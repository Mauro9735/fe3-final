import React from 'react'
import { ContextGlobal } from './utils/global.context'
import Styles from './Footer.module.css'



const Footer = () => {

  const{theme} = React.useContext(ContextGlobal)

  return (
    <footer className={Styles.container}>
      <div>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' className={Styles.logo_size} />
      </div>

      <div className={Styles.container_logos}>
        <img src="/images/ico-facebook.png"alt="Logo Facebook"  className={theme.theme==="dark"?Styles.icon_size_dark:Styles.icon_size}/>
       <img src="/images/ico-instagram.png" alt="Logo Instagram"  className={theme.theme==="dark"?Styles.icon_size_dark:Styles.icon_size}/>
        <img src="/images/ico-whatsapp.png" alt="Logo Whatsapp" className={theme.theme==="dark"?Styles.icon_size_dark:Styles.icon_size} />
        <img src="/images/ico-tiktok.png" alt="Logo Tik tok" className={theme.theme==="dark"?Styles.icon_size_dark:Styles.icon_size} />
      </div>


{/* 
      Eslint ponia problemas con enviar a otra páginas
      <a href="https://facebook.com" target="_blank"></a> 
<a href="https://instagram.com" target="_blank"></a>
<a href="https://whatsapp.com" target="_blank"></a>
<a href="https://tiktok.com" target="_blank"></a> */}


    </footer>
  )
}

export default Footer
