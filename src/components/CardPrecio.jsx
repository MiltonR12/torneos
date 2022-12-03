import { useId, useState } from 'react';
import estilo from '../sass/cardPrecio.module.scss';

function CardPrecio({ props }) {

  const [verificar, setVerificar] = useState(true)
  const [nombreClase, setNombreClase] = useState(`${estilo.contEnlace}`)

  function escucharClic() {
    console.log(verificar)
    if (!verificar) {
      setNombreClase(`${estilo.contEnlace}`);
    } else {
      setNombreClase(`${estilo.contEnlace} ${estilo.activado}`);
    }
    setVerificar(!verificar);
  }

  return (
    <li className={nombreClase} onClick={escucharClic} >
      <span>{props.amount}</span> Diamantes x <span>{props.price}</span>
    </li>
  )
}

export default CardPrecio