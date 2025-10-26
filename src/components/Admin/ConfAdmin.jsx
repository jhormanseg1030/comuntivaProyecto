import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../imagenes/logo.jpg'; 
import './ConfAdmin.css';
import GeneralTi from './GeneralTi';
import './GeneralTi.css';
import ProductoTienda from './ProductoTienda';
import './Producto.css';
import GestVende from './GestVende';
import './GestVende.css';
import HistorialTi from './HistorialTi';
import Hist_Pag from './Hist_Pag'; 
import Gestras from './Gestras';
import './Historial.css';
import Footer_Abajo from '../Vendedor/Footer_Abajo';

const ConfAdmin = () => {
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
              <span className="section-title">⚙️ CONFIGURACIÓN</span>
            </li>
            <li onClick={() => manejarSeleccion('General')} className={contenido === 'General' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfAdmin/GeneralTi"}>⚙️ Configuración General</Link>
            </li>
            <li className="menu-section">
              <span className="section-title">📦 PRODUCTOS</span>
            </li>
            <li onClick={() => manejarSeleccion('Productos')} className={contenido === 'Productos' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfAdmin/ProductoTi"}>📦 Gestión de Productos</Link>
            </li>
            <li className="menu-section">
              <span className="section-title">👥 PERSONAL</span>
            </li>
            <li onClick={() => manejarSeleccion('Vendedores')} className={contenido === 'Vendedores' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfAdmin/Vendedores"}>👥 Gestión de Vendedores</Link>
            </li>
            <li className="menu-section">
              <span className="section-title">📈 REPORTES Y LOGÍSTICA</span>
            </li>
            <li onClick={() => manejarSeleccion('Historial')} className={contenido === 'Historial' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfAdmin/HistorialTi"}>📊 Historial de Ventas</Link>
            </li>
            <li onClick={() => manejarSeleccion('HistorialPagos')} className={contenido === 'HistorialPagos' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfAdmin/HistorialPagos"}>💰 Estado de Pagos</Link>
            </li>
            <li onClick={() => manejarSeleccion('Transportadora')} className={contenido === 'Transportadora' ? 'active' : ''}>
              <Link className='nav-link1' to={"/ConfAdmin/Transportadora"}>🚚 Gestión de Transporte</Link>
            </li>
          </ul>
        </nav>

        <div className="contenido">
          <div>
            <Routes>
              <Route path='/GeneralTi' element={<GeneralTi />} />
              <Route path='/ProductoTi' element={<ProductoTienda />} />
              <Route path='/Vendedores' element={<GestVende />} />
              <Route path='/HistorialTi' element={<HistorialTi />} />
              <Route path='/HistorialPagos' element={<Hist_Pag />} />
              <Route path='/Transportadora' element={<Gestras />} />
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

export default ConfAdmin;