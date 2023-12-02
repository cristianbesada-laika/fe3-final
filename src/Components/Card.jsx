import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import { BiHeart, BiSolidHeart } from 'react-icons/bi'

const Card = ({ dentista }) => {
  const {state, dispatch} = useContextGlobal();
  const findFav = state.favs.find(fav => fav.id === dentista.id);

  const addFav = () => { dispatch({ type: "ADD_FAV", payload: dentista }) };
  const removeFav = () => {
    const deleteFav = state.favs.filter(fav => fav.id !== dentista.id);
    dispatch({ type: "DELETE_FAV", payload: deleteFav });
  };

  return (
    <div className="card">
        <div>
          <img src="/images/doctor.jpg" alt="doctor" width={'100px'}/>
           <div>
            { findFav ? <BiSolidHeart onClick={removeFav} className="heart-btn"/> : <BiHeart onClick={addFav} className="heart-btn"/> }
            <h3>{dentista.username}</h3>
           </div>
        </div>
        <Link to={`/Detalle/${dentista.id}`}>
          <h2>{dentista.name}</h2>
        </Link>
    </div>
  );
};

export default Card;
