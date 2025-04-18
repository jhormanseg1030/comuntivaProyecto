import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomeCli from './components/Clientes/HomeCli';
import HomeTienda from "./components/Tienda/HomeTienda";
import SegPrinci from './components/SegPrincipal/SegPrinci';
import InicioSe from './components/iniciosesion/InicioSe';
import RegistrarUsu from './components/Registrar/RegistrarUsu';


function App() {
  const [count, setCount] = useState(0)
    return(
      <Routes>
        <Route path='/Login' element={<InicioSe></InicioSe>}></Route>
        <Route path='/' element={<HomeCli></HomeCli>}></Route>
        <Route path='/Tienda' element={<HomeTienda></HomeTienda>}></Route>
        <Route path='/Segunda' element={<SegPrinci></SegPrinci>}></Route>
        <Route path='/Registro' element={<RegistrarUsu></RegistrarUsu>}></Route>
      </Routes>
    );

}
export default App;