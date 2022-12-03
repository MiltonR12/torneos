import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Eventos from "./pages/Eventos";
import Torneos from './pages/Torneos';
import Contactanos from './pages/Contactanos';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/torneos' element={<Torneos />} />
        <Route path='/contactanos' element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
