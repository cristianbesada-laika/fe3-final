import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const {state,dispatch} = useContextGlobal()
  const eliminarFavoritos = () => {
    dispatch({ type: "ELIMINAR_FAVORITOS" })
  }

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        <button onClick={eliminarFavoritos} className="favButton">
          {(Object.entries(state.favs).length === 0) ? "No hay favoritos" : "Eliminar favoritos"}
        </button>
        {state.favs.map(dentista => <Card dentista={dentista} key={dentista.id} />)}
      </div>
    </>
  );
};

export default Favs;
