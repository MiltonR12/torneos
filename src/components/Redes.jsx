import { MdOutlineFacebook } from 'react-icons/md';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import estilo from '../sass/redes.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Redes() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className={estilo.cuerpoRedes} >
      <div data-aos="zoom-in-up" >
        <a
          target='_black'
          href="https://www.facebook.com/DimeLegendsBolivia"><MdOutlineFacebook
            className={`${estilo.icono} ${estilo.facebook}`} /></a>
        <a
          target='_black'
          href="https://chat.whatsapp.com/LgwUb7ngTC5DYfjO5bOSyM"><AiOutlineWhatsApp
            className={`${estilo.icono} ${estilo.wtp}`} /></a>
        <a
          target='_black'
          href="https://discord.gg/rMunx9nFGc"><FaDiscord
            className={`${estilo.icono} ${estilo.discord}`} /></a>
      </div>
    </section>
  )
}

export default Redes