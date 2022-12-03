import { useEffect, useState } from "react";
import { copas } from "../data/copas.js";
import estilo from '../sass/copas.module.scss';

function Copas() {

  const [lista, setLista] = useState([])

  useEffect(() => {
    setLista(copas)
  },[])

  return (
    <section className={estilo.cuerpoCopas} >
      {
        lista.map((item, index) => (
          <img src={item} alt="" key={index} width={500} className={estilo.imgCopa} />
        ))
      }
    </section>
  )
}

export default Copas