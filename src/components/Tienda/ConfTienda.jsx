// src/components/ConfTienda.js
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../imagenes/logo.jpg'; 
import './ConfTienda.css';
import ProductoTienda from './ProductoTienda';
import HistorialTi from './HistorialTi';
import Hist_Pag from './Hist_Pag'; 
import GestVende from './GestVende';
import Gestras from './Gestras';
import GeneralTi from './GeneralTi';
import CuentaTi from './CuentaTi';
import Footer_Abajo from '../Vendedor/Footer_Abajo';
import './generalve.css';
import "./Historial.css";
import './Producto.css';
import './GestVende.css';

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
            <li onClick={() => manejarSeleccion('Productos')} className={contenido === 'Productos' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfTienda/ProductoTi"}>📦 Productos</Link>
            </li>
            <li className="menu-section">
              <span className="section-title">👥 PERSONAL</span>
            </li>
            <li onClick={() => manejarSeleccion('Vendedores')} className={contenido === 'Vendedores' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfTienda/Vendedores"}>👥 Gestión de Vendedores</Link>
            </li>
            <li className="menu-section">
              <span className="section-title">📈 REPORTES</span>
            </li>
            <li onClick={() => manejarSeleccion('Historial')} className={contenido === 'Historial' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfTienda/HistorialTi"}>📊 Historial de Ventas</Link>
            </li>
            <li onClick={() => manejarSeleccion('HistorialPagos')} className={contenido === 'HistorialPagos' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfTienda/HistorialPagos"}>💰 Estado de Pagos</Link>
            </li>
            <li className="menu-section">
              <span className="section-title">🚚 LOGÍSTICA</span>
            </li>
            <li onClick={() => manejarSeleccion('Transportadora')} className={contenido === 'Transportadora' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfTienda/Transportadora"}>🚚 Gestión de Transporte</Link>
            </li>
            <li className="menu-section">
              <span className="section-title">⚙️ CONFIGURACIÓN</span>
            </li>
            <li onClick={() => manejarSeleccion('General')} className={contenido === 'General' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfTienda/GeneralTi"}>⚙️ Configuración General</Link>
            </li>
            <li onClick={() => manejarSeleccion('Cuenta')} className={contenido === 'Cuenta' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfTienda/CuentaTi"}>👤 Mi Cuenta</Link>
            </li>
          </ul>
        </nav>

        <div className="contenido">
          <div>
            <Routes>
              <Route path='/ProductoTi' element={<ProductoTienda />} />
              <Route path='/Vendedores' element={<GestVende />} />
              <Route path='/HistorialTi' element={<HistorialTi />} />
              <Route path='/HistorialPagos' element={<Hist_Pag />} />
              <Route path='/Transportadora' element={<Gestras />} />
              <Route path='/GeneralTi' element={<GeneralTi />} />
              <Route path='/CuentaTi' element={<CuentaTi />} />
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