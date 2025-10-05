// src/components/ConfTienda.js
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../imagenes/logo.jpg'; 
import './ConfTienda.css';
import CuentaTi from './CuentaTi';
import GeneralTi from './GeneralTi';
import './generalve.css';
import "./Historial.css";
import HistorialTi from './HistorialTi';
import InicioTienda from './Inicio';
import './Inicio.css';
import './Pedidos.css';
import PedidosTienda from './PedidosTienda';
import Proceso_Comp from './Proce_Compra';
import './ProCompra.css';
import './Producto.css';
import ProductoTienda from './ProductoTienda';
import Promocion from './Promocion';
import './Promociones.css';
import Footer_Abajo from '../Vendedor/Footer_Abajo';
import Hist_Pag from './Hist_Pag'; 
import Gestras from './Gestras';

const ConfTienda = () => {
  const [contenido, setContenido] = useState('Inicio');

  const manejarSeleccion = (opcion) => {
    setContenido(opcion);
  };
  return (
    <>
    <div className="conf-tienda">
      <nav className="menu">
        
        <div className="menu-header">
          <img src={logo} alt="Logo" className="menu-logo"/>
          <span className="admin-text">Admin</span>
        </div>        
                <ul className="menu-principal">
                  
                  <li className="menu-section">
                    <span className="section-title">📊 OPERACIONES</span>
                  </li>
                  <li onClick={() => manejarSeleccion('Inicio')} className={contenido === 'Inicio' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda"}>🏠 Inicio</Link>
                  </li>
                  <li onClick={() => manejarSeleccion('Pedidos')} className={contenido === 'Pedidos' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda/pedidos"} >📋 Pedidos</Link>
                  </li>
                  <li onClick={() => manejarSeleccion('Productos')} className={contenido === 'Productos' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda/ProductoTi"}>📦 Productos</Link>
                  </li>
                  <li className="menu-section">
                    <span className="section-title">📈 REPORTES</span>
                  </li>
                  <li onClick={() => manejarSeleccion('Historial')} className={contenido === 'Historial' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda/HistorialTi"}>📊 Historial</Link>
                  </li>
                  <li onClick={() => manejarSeleccion('HistorialPagos')} className={contenido === 'HistorialPagos' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda/HistorialPagos"}>💰 Pagos</Link>
                  </li>
                  <li onClick={() => manejarSeleccion('Promociones')} className={contenido === 'Promociones' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda/PromocionTi"}>🎯 Promociones</Link>
                  </li>
                  <li className="menu-section">
                    <span className="section-title">🚚 LOGÍSTICA</span>
                  </li>
                  <li onClick={() => manejarSeleccion('Transportadora')} className={contenido === 'Transportadora' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda/Transportadora"}>🚚 Transporte</Link>
                  </li>
                  <li className="menu-section">
                    <span className="section-title">⚙️ CONFIGURACIÓN</span>
                  </li>
                  <li onClick={() => manejarSeleccion('General')} className={contenido === 'General' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda/GeneralTi"}>⚙️ General</Link>
                  </li>
                  <li onClick={() => manejarSeleccion('Cuenta')} className={contenido === 'Cuenta' ? 'active' : ''}>
                    <Link className='nav-link1' to={"/ConfTienda/CuentaTi"}>👤 Cuenta</Link>
                  </li>
                </ul>
      </nav>
      <div className="contenido">
        <div>
          <Routes>
            <Route path='/' element={<InicioTienda></InicioTienda>}></Route>
            <Route path='/pedidos' element={<PedidosTienda></PedidosTienda>}> </Route>
            <Route path='/ProductoTi' element={<ProductoTienda></ProductoTienda>}></Route>
            <Route path='/HistorialTi' element={<HistorialTi></HistorialTi>}></Route>
            <Route path='/PromocionTi' element={<Promocion></Promocion>}></Route>
            <Route path='/GeneralTi' element={<GeneralTi></GeneralTi>}></Route>
            <Route path='/CuentaTi' element={<CuentaTi></CuentaTi>}></Route>
            <Route path='/HistorialPagos' element={<Hist_Pag></Hist_Pag>}></Route>
            <Route path='/Transportadora' element={<Gestras></Gestras>}></Route>
          </Routes>
        </div>
      </div>
    </div>
        <div className='foret'>
          <Footer_Abajo/>
        </div>
    </>
  );
};

export default ConfTienda;