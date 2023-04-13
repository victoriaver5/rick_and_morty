import Cards from "./components/Cards/Cards";
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '3a7990d728df.072c57c954bca71ad481';

const email = 'vicky@gmail.com';
const password = '123abc';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   } , [access,navigate])

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      if (characters && characters.length > 0) {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
      }
   }

   return (
      <div className='App'>
          {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
          }
          <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path = '/favorites' element ={<Favorites/>} />
          </Routes>
        
      </div>
   );
  
  }

export default App;




   


