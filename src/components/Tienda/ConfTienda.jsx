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
          <li onClick={() => manejarSeleccion('Inicio')} className={contenido === 'Inicio' ? 'active' : ''}>
            <Link className='nav-link1' to={"/ConfTienda"}>Inicio</Link>
          </li>
          <li onClick={() => manejarSeleccion('Pedidos')} className={contenido === 'Pedidos' ? 'active' : ''}>
            <Link className='nav-link1' to={"/ConfTienda/pedidos"} >Pedidos</Link>
          </li>
          <li onClick={() => manejarSeleccion('Productos')} className={contenido === 'Productos' ? 'active' : ''}>
            <Link className='nav-link1' to={"/ConfTienda/ProductoTi"}>Productos</Link>
          </li>
          <li onClick={() => manejarSeleccion('Historial')} className={contenido === 'Historial' ? 'active' : ''}>
            <Link className='nav-link1' to={"/ConfTienda/HistorialTi"}>Historial</Link>
          </li>
          <li onClick={() => manejarSeleccion('Promociones')} className={contenido === 'Promociones' ? 'active' : ''}>
            <Link className='nav-link1' to={"/ConfTienda/PromocionTi"}>Promociones</Link>
          </li>
          
          <li onClick={() => manejarSeleccion('General')} className={contenido === 'General' ? 'active' : ''}>
            <Link className='nav-link1' to={"/ConfTienda/GeneralTi"}>General</Link>
          </li>
          <li onClick={() => manejarSeleccion('Proceso de compra')} className={contenido === 'Proceso de compra' ? 'active' : ''}>
            <Link className='nav-link1' to={"/ConfTienda/Proceso_Com"}>Procesos de compra</Link>
          </li>
          <li onClick={() => manejarSeleccion('Cuenta')} className={contenido === 'Cuenta' ? 'active' : ''}>
            <Link className='nav-link1' to={"/ConfTienda/CuentaTi"}>Cuenta</Link>
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
            <Route path='/Proceso_Com' element ={<Proceso_Comp></Proceso_Comp>}></Route>
            <Route path='/CuentaTi' element={<CuentaTi></CuentaTi>}></Route>
          </Routes>
        </div>
        <div className="ayuda">
          <h2><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
          </svg></h2>
          <p>Aquí puedes encontrar orientación sobre cómo usar la plataforma.</p>
          <button>¿Necesitas Ayuda? Click aqui! </button>
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
