import { BsFacebook, BsWhatsapp, BsDiscord } from "react-icons/bs";
import estilo from '../sass/pie.module.scss';
import logo from '../img/logomandar.png';

function Pie() {
  return (
    <footer className={estilo.cuerpoPie} >
      <div >
        <a href=""><img src={logo} alt='logo' width={100} /></a>
      </div>
      <div className={estilo.contEnlaces} >
        <a href="">
          <BsFacebook className={estilo.icono} />
        </a>
        <a href="">
          <BsWhatsapp className={estilo.icono} />
        </a>
        <a href="">
          <BsDiscord className={estilo.icono} />
        </a>
      </div>
    </footer>
  )
}

export default Pie