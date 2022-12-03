import React, { useEffect, useState } from 'react'
import estilo from '../sass/recarga.module.scss';
import precios from '../data/precios.json';
import CardPrecio from '../components/CardPrecio';
import Pedido from './Pedido';
import imgMobil from '../img/mobil.png';
import PedidoF from './PedidoF';
import imgFree from '../img/free.png';
import AOS from 'aos';
import 'aos/dist/aos'

function Recarga() {

  const [free, setFree] = useState([])
  const [mobil, setMobil] = useState([])

  useEffect(() => {
    setFree(precios.free)
    setMobil(precios.mobile)
    AOS.init()
  },[])

  return (
    <section className={estilo.cuerpoRecarga} >
      <div className={estilo.parte} data-aos="fade-up" >
        <h1>RECARGAS <br /> MOBILE LEGENDS</h1>
        <ul>
          {
            mobil.map(item => (
              <CardPrecio key={item.id} props={item} />
            ))
          }
        </ul>
      </div>
      <div className={estilo.parte} data-aos="fade-up" >
        <img src={imgMobil} alt="" width={300} />
        <Pedido />
      </div>
      <div className={estilo.parte} data-aos="fade-up" >
        <img src={imgFree} alt="" width={300} />
        <PedidoF />
      </div>
      <div className={estilo.parte} data-aos="fade-up" >
        <h1>RECARGAS <br /> FREE FIRE</h1>
        <ul>
          {
            free.map(item => (
              <CardPrecio key={item.id} props={item} />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Recarga