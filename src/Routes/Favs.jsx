import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {theme} = useContext(ContextGlobal);
  const tema = theme.theme;

  const favs = localStorage.getItem("favs");
  const listaOdontoFavs = favs ? JSON.parse(favs):[];


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">            
          {listaOdontoFavs.length? listaOdontoFavs.map(datos =>{
            return(
              <div className="card" key={datos.id}>
              <div className="container_favs">
              <Link to={`/dentist/${datos.id}`}>
                  <img src="./images/doctor.jpg"alt="Doctor img" className="img_favs"/>
                  <h4 className={tema==="dark"?"color_letter_favs":""}>{datos.name}</h4>
                  <p  className={tema==="dark"?"color_letter_favs":""}>{datos.username}</p>
              </Link>
            </div>
            </div>
            )
            }):null

          }
      </div>
    </>
  );
};

export default Favs;
