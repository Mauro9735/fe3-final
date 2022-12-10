import React from "react";
import { createContext } from "react";

export const initialState = {theme:"light", data: []}

export const ContextGlobal = createContext(undefined);






export const ContextProvider = ({ children }) => {

  //Traer info de la Api

  const[odontologo, setOdontologo] = React.useState([]);
  
  React.useEffect(() => {
    async function getData(){
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        console.log(data);

        setOdontologo(data);
      }catch(e){
        console.log("Error");
        console.log(e);
      }
    }
    getData();
  }, []);





//Pruebas reducer
const themeReducer = (state,action) =>{
  console.log("Action");
  console.log(action);
  console.log("state.theme");
  console.log(state.theme);
  console.log("State");
  console.log(state);
  // console.log("Action.type");
  // console.log(action.type);
  switch(action.type){
    case "theme":
      return{theme: state.theme==="dark"?"light":"dark"}
    default:
      console.log("Default");
      return state;
  }

}


const [theme,dispatch] = React.useReducer(themeReducer,initialState);


const toggleTheme = () =>{
  dispatch({type:"theme"})
  console.log(theme.theme);
};





  return (
    <ContextGlobal.Provider value={{odontologo,toggleTheme,theme,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};


