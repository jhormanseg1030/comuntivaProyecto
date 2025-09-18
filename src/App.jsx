import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito/carro';
import Frutas from './components/Categoria_Menu/Frutas';
import Grano from './components/Categoria_Menu/Grano';
import Lacteos from './components/Categoria_Menu/Lacteos';
import Papa from './components/Categoria_Menu/Papa';
import Verduras from './components/Categoria_Menu/Verduras';
import HomeCli from './components/Clientes/HomeCli';
import PagCompra from './components/Compra/PagCompra';
import Actu_Clie from './components/Config_Cliente/Actu_Clie';
import Pago from './components/FinalDePago/Pago';
import Inicio_Pag from './components/Inicio/Inicio_Pag';
import InicioSe from './components/iniciosesion/InicioSe';
import Perfil from './components/Perfil/Perfil';
import ProductosTienda from './components/Productos/ProductosTi';
import QuienesSomos from './components/Quienes somos/quienSom';
import RegistrarUsu from './components/Registrar/RegistrarUsu';
import SegPrinci from './components/SegPrincipal/SegPrinci';
import ConfTienda from './components/Tienda/ConfTienda';
import HomeTienda from "./components/Tienda/HomeTienda";
import InicioVendedor from './components/Vendedor/InicioVendedor';
import SucursalNor from './components/Tienda/SucursalNor';
import SucursalZo from './components/Tienda/SucursalZo';
import SurcursalOcc from './components/Tienda/SucursalOcc';


function App() {
  const [Count, SetCount] = useState(0)
    return(
      <Routes>
        <Route path='/Login' element={<InicioSe></InicioSe>}></Route>
        <Route path='/Tienda' element={<HomeCli></HomeCli>}></Route>
        <Route path='/TiendaDonJuan' element={<HomeTienda></HomeTienda>}></Route>
        <Route path='/SucursalNor' element={<SucursalNor></SucursalNor>}></Route>
        <Route path='/SucursalZo' element={<SucursalZo></SucursalZo>}></Route>
        <Route path='SucursalOcc' element={<SurcursalOcc></SurcursalOcc>}></Route>
        <Route path='/Segunda' element={<SegPrinci></SegPrinci>}></Route>
        <Route path='/Registro' element={<RegistrarUsu></RegistrarUsu>}></Route>
        <Route path='/ConfTienda/*' element={<ConfTienda></ConfTienda>}></Route>
        <Route path='/Vende' element={<InicioVendedor></InicioVendedor>}></Route>
        <Route path='/Compra' element={<PagCompra></PagCompra>}></Route>
        <Route path='/Productos' element={<ProductosTienda></ProductosTienda>}></Route>
        <Route path='/Pago' element={<Pago></Pago>}></Route>
        <Route path='/Perfil' element={<Perfil></Perfil>}></Route>
        <Route path='/Frutas' element={<Frutas></Frutas>}></Route>
        <Route path='/Papa' element={<Papa></Papa>}></Route>
        <Route path='/Lacteos' element={<Lacteos></Lacteos>}></Route>
        <Route path='/Verduras' element={<Verduras></Verduras>}></Route>
        <Route path='/Grano' element={<Grano></Grano>}></Route>
        <Route path='/carrito' element ={<Carrito></Carrito>}></Route>
        <Route path="/Quienes somos" element={<QuienesSomos></QuienesSomos>} />
        <Route path='/' element={<Inicio_Pag></Inicio_Pag>}></Route>
        <Route path='/Confi_Cliente' element={<Actu_Clie></Actu_Clie>}></Route>
        
      </Routes>
    );
}
export default App;
/**/ 