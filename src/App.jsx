import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import InicioSe from './components/InicioSesion/InicioSe';
import HomeCli from './components/Clientes/HomeCli';
import HomeTienda from "./components/Tienda/HomeTienda";
import SegPrinci from './components/SegPrincipal/SegPrinci';
import ConfTienda from './components/Tienda/ConfTienda';


function App() {
  const [count, setCount] = useState(0)
    return(
      <Routes>
        <Route path='/login' element={<InicioSe></InicioSe>}></Route>
        <Route path='/' element={<HomeCli></HomeCli>}></Route>
        <Route path='/Tienda' element={<HomeTienda></HomeTienda>}></Route>
        <Route path='/Segunda' element={<SegPrinci></SegPrinci>}></Route>
        <Route path='/ConfTienda' element={<ConfTienda></ConfTienda>}></Route>
      </Routes>
    );

}
export default App;