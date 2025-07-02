import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeCli from './components/Clientes/HomeCli';
import PagCompra from './components/Compra/PagCompra';
import Pago from './components/FinalDePago/Pago';
import InicioSe from './components/iniciosesion/InicioSe';
import ProductosTienda from './components/Productos/ProductosTi';
import RegistrarUsu from './components/Registrar/RegistrarUsu';
import SegPrinci from './components/SegPrincipal/SegPrinci';
import ConfTienda from './components/Tienda/ConfTienda';
import HomeTienda from "./components/Tienda/HomeTienda";
import InicioVendedor from './components/Vendedor/InicioVendedor';
import QuienesSomos from './components/Quienes somos/quienSom';
import Carrito from './components/Carrito/carro';

function App() {
  const [Count, SetCount] = useState(0)
    return(
      <Routes>
        <Route path='/Login' element={<InicioSe></InicioSe>}></Route>
        <Route path='/' element={<HomeCli></HomeCli>}></Route>
        <Route path='/TiendaDonJuan' element={<HomeTienda></HomeTienda>}></Route>
        <Route path='/Segunda' element={<SegPrinci></SegPrinci>}></Route>
        <Route path='/Registro' element={<RegistrarUsu></RegistrarUsu>}></Route>
        <Route path='/ConfTienda' element={<ConfTienda></ConfTienda>}></Route>
        <Route path='/Vende' element={<InicioVendedor></InicioVendedor>}></Route>
        <Route path='/Compra' element={<PagCompra></PagCompra>}></Route>
        <Route path='/Productos' element={<ProductosTienda></ProductosTienda>}></Route>
        <Route path='/Pago' element={<Pago></Pago>}></Route>
        <Route path='/carrito' element ={<Carrito></Carrito>}></Route>
        <Route path="/Quienes somos" element={<QuienesSomos></QuienesSomos>} />
      </Routes>
    );
}
export default App;
/**/ 