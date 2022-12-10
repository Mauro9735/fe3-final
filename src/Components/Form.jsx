import React from "react";
import { useState } from "react";
import Styles from "./Form.module.css"


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones



  const [datos, setDatos] = useState();
  const [validez, setValidez] = useState(null);



  const validation = e =>{
    setDatos("");
    setValidez(false)
    if(e.target.value.length>5){
      setDatos(e.target.value);
    } 
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(datos.length>5){
      setValidez(true)
      document.getElementById("miForm").reset();
    }else{
      setValidez(false);
      alert("Por favor verifica la información diligenciada, recuerda que el nombre tiene que ser mayor  a 5 carácteres");
      console.error("El dato ingresado es menor a 6 carácteres")
    }
  }
  

  return (
    <div>
      <form id="miForm" onSubmit={handleSubmit} className={Styles.space}>
      <label htmlFor="name" className={Styles.space}>Nombre:</label>
          <input type="text" name='name' placeholder='Nombre Completo'  onChange={validation} required />
          <label htmlFor="email" className={Styles.space}>Email:</label>
          <input type="email" name='email' placeholder='Email' required/>
          <button type="submit" className={Styles.button}>Submit</button>
      </form>

      
      <h4 className='padding_left'>{validez?`Gracias ${datos}, te contactaremos cuanto antes vía mail 🙂`:""}</h4>
    </div>
  );
};

export default Form;

