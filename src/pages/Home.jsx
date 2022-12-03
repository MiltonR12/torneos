import Navegacion from "../components/Navegacion"
import Pie from "../components/Pie"
import Portada from "../components/Portada"
import Recarga from "../components/Recarga"
import Redes from "../components/Redes"
import Unete from "../components/Unete"

function Home() {
  return (
    <>
      <Navegacion />
      <main>
        <Portada />
        <Recarga />
        <Unete />
        <Redes />
      </main>
      <Pie />
    </>
  )
}

export default Home