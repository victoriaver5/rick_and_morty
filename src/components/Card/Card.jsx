import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions"
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, status, gender, image, onClose }));
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>

      <div >
        <img src={image} alt={name} />
      </div>


      <div >
        <div>
          <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
          </Link>
        </div>

        <div>
          <h2>Specie: {species}</h2>
          <h2>Gender: {gender}</h2>
        </div>

        <div>
          <button onClick={() => onClose(id)}>X</button>
        </div>
        <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      </div>
    </div>
  );
}

export default Card;