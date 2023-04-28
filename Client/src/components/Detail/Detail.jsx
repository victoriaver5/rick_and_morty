import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//const URL_BASE = "http://localhost:3001/rickandmorty/character/${id}";
//const API_KEY = '3a7990d728df.072c57c954bca71ad481';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);


    return(
        <div >
          {character.name ? (<div>
            <div>
              <button>
                <Link to='/home' >Home</Link>
              </button>
              <h1>{character?.name}</h1>
            </div>
    
            <div>
              <div>
                <img src={character?.image} alt={character?.name} />
              </div>
    
              <div>
                <label htmlFor="status">Status: </label>
                <p>{character?.status}</p>
                <label htmlFor="specie">Specie: </label>
                <p>{character?.species}</p>
                <label htmlFor="gender">Gender: </label>
                <p>{character?.gender}</p>
                <label htmlFor="origin">Origin: </label>
                <p>{character?.origin?.name}</p>
              </div>
            </div>
          </div>)
          : (<h1>cargando...</h1>)}
        </div>
      )
    }
    
    export default Detail;