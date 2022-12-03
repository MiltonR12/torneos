import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import estilo from '../sass/navegacion.module.scss';

function Navegacion() {

  const [color, setColor] = useState('#101010')

  const nameClase = (isActive) => {
    if (isActive) {
      return `${estilo.activado} ${estilo.enlace}`
    }
    return `${estilo.desactivado} ${estilo.enlace}`
  }

  window.addEventListener('scroll', () => {
    return window.scrollY > 1 ? setColor('rgba(0,0,0,0.2)') : setColor('#101010')
  })

  return (
    <header className={estilo.contNav} style={{background: color}} >
      <div className={estilo.contLogo} >
        <Link className={estilo.name} >Dime Legends</Link>
      </div>
      <nav>
        <NavLink
          to='/'
          className={({ isActive }) => (nameClase(isActive))}
        >Inicio
        </NavLink>
        <NavLink
          to='/eventos'
          className={({ isActive }) => (nameClase(isActive))}
        >Eventos
        </NavLink>
        <NavLink
          to='/torneos'
          className={({ isActive }) => (nameClase(isActive))}
        >Torneos
        </NavLink>
        <NavLink
          to='/contactanos'
          className={({ isActive }) => (nameClase(isActive))}
        >Contactanos
        </NavLink>
      </nav>
    </header>
  )
}

export default Navegacion