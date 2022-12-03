import { useState } from 'react';
import estilo from '../sass/pedido.module.scss';

function Pedido() {

  const [id, setId] = useState(0)
  const [zona, setZona] = useState(0)

  const escucharBtn = (e) => {
    e.preventDefault()
    console.log(id, zona)
  }

  const escucharZona = (e) => {
    setZona(e.target.value)
  }

  const escucharId = (e) => {
    setId(e.target.value)
  }

  return (
    <form onSubmit={escucharBtn} className={estilo.contForm} >
      <div>
        <label>ID</label>
        <input type="number"
          placeholder='ID'
          onChange={escucharId}
          required />
      </div>
      <div>
        <label>ID ZONA</label>
        <input type="number"
          placeholder='(XXXX)'
          onChange={escucharZona}
          required />
      </div>
      <input type="submit" className={estilo.btn} value={'PEDIR'} />
    </form>
  )
}

export default Pedido