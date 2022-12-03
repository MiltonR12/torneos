import estilo from '../sass/torneo.module.scss'
import CardTorneo from './CardTorneo'
import { lista } from "../data/listaT.js";
import { useEffect, useState } from 'react';

function Torneo() {

  const [copas, setCopas] = useState([])

  useEffect(() => {
    setCopas(lista)
  })

  return (
    <section className={estilo.cuerpoTorneo} >
      {
        copas.map(item => (
          <CardTorneo props={item} key={item.id} />
        ))
      }
    </section>
  )
}

export default Torneo