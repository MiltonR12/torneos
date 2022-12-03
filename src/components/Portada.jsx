import estilo from '../sass/portada.module.scss';
import copaUpea from '../img/copaUpea.png';
import copa2 from '../img/copa2.png';
import copa3 from '../img/copa3.png';
import { Link } from "react-router-dom";

function Portada() {

  return (
    <section className={estilo.cuerpoPortada} >
      <div className={estilo.parte} >
        <h1>Dime Legends <br /> Bolivia</h1>
        <p>Encuentra tus torneos favoritos y participa en ellos para ganar muchos premios. Demuestra quien es el mejor gamer</p>
        <Link to='/torneos' ><button className={estilo.btn} >ENTRAR</button></Link>
      </div>
      <div className={estilo.parte} >
        <img
          src={copaUpea} className={estilo.imgFlayer} alt="Upea"/>
        <img src={copa2} className={estilo.imgFlayer} alt="Duo" />
        <img src={copa3} className={estilo.imgFlayer} alt="Squat" />
      </div>
    </section>
  )
}

export default Portada