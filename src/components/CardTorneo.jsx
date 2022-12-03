import estilo from '../sass/cardTorneo.module.scss'

function CardTorneo({ props }) {
  return (
    <div className={estilo.contCard} >
      <div className={estilo.seccion} >
        <div>
          <h1> {props.name} </h1>
          <h2> <span>PRECIO:</span> {props.price} </h2>
          <h2> <span>PREMIO:</span> {props.premio} </h2>
          <div className={estilo.contBtn} >
            <a href={props.form} target='_black' >
              <button className={estilo.btn} ><span>INSCRIBIRSE</span></button>
            </a>
            <a href={props.grupo} target='_black' >
              <button className={estilo.btn} ><span>GRUPO</span></button>
            </a>
          </div>
        </div>
        <div>
          <h2 className={estilo.inicio} >INICIO</h2>
          <h3 className={estilo.fecha} > {props.date} a hrs. {props.hours} </h3>
        </div>
      </div>
      <div className={estilo.seccion} >
        <img src={props.flayer} alt="free" className={estilo.imgBanner} />
      </div>
    </div>
  )
}

export default CardTorneo