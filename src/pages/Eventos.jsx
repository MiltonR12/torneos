import React from 'react'
import Evento from '../components/Evento'
import Navegacion from '../components/Navegacion'
import Pie from '../components/Pie'

function Eventos() {
  return (
    <>
      <Navegacion />
      <main>
        <Evento />
      </main>
      <Pie />
    </>
  )
}

export default Eventos