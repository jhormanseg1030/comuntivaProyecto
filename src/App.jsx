import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomeCli from './components/Clientes/HomeCli';
import HomeTienda from "./components/Tienda/HomeTienda";
import SegPrinci from './components/SegPrincipal/SegPrinci';
import InicioSe from './components/iniciosesion/InicioSe';
import RegistrarUsu from './components/Registrar/RegistrarUsu';
import ConfTienda from './components/Tienda/ConfTienda';
import InicioVendedor from './components/Vendedor/InicioVendedor';
import PagCompra from './components/Compra/PagCompra';


function App() {
  const [count, setCount] = useState(0)
    return(
      <Routes>
        <Route path='/Login' element={<InicioSe></InicioSe>}></Route>
        <Route path='/' element={<HomeCli></HomeCli>}></Route>
        <Route path='/Tienda' element={<HomeTienda></HomeTienda>}></Route>
        <Route path='/Segunda' element={<SegPrinci></SegPrinci>}></Route>
        <Route path='/Registro' element={<RegistrarUsu></RegistrarUsu>}></Route>
        <Route path='/ConfTienda' element={<ConfTienda></ConfTienda>}></Route>
        <Route path='/Vende' element={<InicioVendedor></InicioVendedor>}></Route>
        <Route path='/Compra' element={<PagCompra></PagCompra>}></Route>
      </Routes>
    );

}
export default App;