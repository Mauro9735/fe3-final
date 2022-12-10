import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

 


  const  datos  = useParams();
  console.log(datos);
  const [odontologoDato, setOdontologoDato] = useState([]);

  useEffect(() => {
    async function getDataOdonto(){
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${datos.id}`);
        const data = await response.json();
        console.log(data);
        setOdontologoDato(data);
      }catch(e){
        console.log("Error");
        console.log(e);
      }
    }
    getDataOdonto();
  }, [datos.id])

  return (
    <div>
      <h1>Detail Dentist id</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>WEBSITE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{odontologoDato.name}</td>
            <td>{odontologoDato.phone}</td>
            <td>{odontologoDato.email}</td>
            <td>{odontologoDato.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail