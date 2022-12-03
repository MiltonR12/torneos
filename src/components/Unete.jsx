import estilo from '../sass/unete.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import dimeLegends from '../img/logomandar.png';
import { Link } from "react-router-dom";

function Unete() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className={estilo.cuerpoUnete} >
      <div className={estilo.parte} >
        <div data-aos="fade-up" >
          <img src={dimeLegends} alt="" className={estilo.img} width='500px' />
        </div>
      </div>
      <div className={estilo.parte} >
        <div className={estilo.contContacto} data-aos="fade-up" >
          <h2>Unete a Nosotros</h2>
          <p>
            Publicita tu torneo o evento en Dime Legends para llegar a mas personas y unir a toda la comunidad boliviana.
          </p>
          <Link to='/contactanos' ><button className={estilo.btn} >Contactanos</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Unete