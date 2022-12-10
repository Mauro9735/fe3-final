import React, {useState} from "react";
import Card from "../Components/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  /*const getAllItems = () => {
    return JSON.parse(localStorage.getItem("odontoList"));
  }
  let allFavs = getAllItems()
  localStorage.setItem("odontoList", JSON.stringify(allFavs))*/
  const [odontoFavs, setOdontoFavs] = useState(JSON.parse(localStorage.getItem("odontoList")))
  setOdontoFavs(JSON.parse(localStorage.getItem("odontoList")))
  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        { odontoFavs.length ? odontoFavs.map(datos => 
          (<Card {...datos} key={datos.id}/>)
        ):null
        }
      </div>
    </div>
  );
};

export default Favs;
