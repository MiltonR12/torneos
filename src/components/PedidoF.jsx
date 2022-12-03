import estilo from '../sass/pedidoF.module.scss';

function PedidoF() {
  return (
    <form onSubmit={() => (console.log('hola'))} className={estilo.contForm} >
      <div>
        <label>ID</label>
        <input type="number" placeholder='ID' />
      </div>
      <input type="submit" className={estilo.btn} />
    </form>
  )
}

export default PedidoF