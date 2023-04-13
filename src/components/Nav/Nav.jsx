import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch,setAccess }) => {
    const handleLogOut = ( )=>{
        setAccess(false);
        
    }
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>

            <div>
                <Link to='/about' >ABOUT</Link>
                <Link to='/home' >HOME</Link>
                <Link to='/favorites'> Favorites </Link>
            </div>

            <button onClick={handleLogOut}> Log Out </button>
                <SearchBar onSearch={onSearch}/>
    
        </nav>
    )
}

export default Nav;