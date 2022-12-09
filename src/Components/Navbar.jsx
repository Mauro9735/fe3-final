import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Navbar.module.css"
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const{toggleTheme,theme} = useContext(ContextGlobal);

  return (

    <header id={theme.theme}>
      <nav className={Styles.container} >
        
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to={"/home"} className={`${Styles.title} ${theme.theme==='dark'?Styles.title_nav_dark:""}`}> <span className={Styles}>D</span>H ODONTO</Link>

        <div className={Styles.container_nav} >
          <Link className ={theme.theme==='dark'?Styles.title_nav_dark:""} to={"/home"}>Home</Link>
          <Link className ={theme.theme==='dark'?Styles.title_nav_dark:""} to={"/contacto"}>Contact</Link>
          <Link className ={theme.theme==='dark'?Styles.title_nav_dark:""}to={"/destacados"}>Favs</Link>
          <button className ={theme.theme==='light'?Styles.btn_light:""}onClick={toggleTheme}>{theme.theme==="dark"?"☀️":"🌙"}</button>
        </div>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      </nav>
    </header>
  )
}

export default Navbar