import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import logo from '../imagenes/logo.jpg';

import '../../components/Admin/ConfAdmin.css';
import '../../components/Admin/GeneralTi.css';
import PedidosVendedor from './PedidosVendedor';
import ProductosVendedor from './ProductosVendedor';
import HistorialTi from '../Admin/HistorialTi';
import ComprasVendedor from './ComprasVendedor';
import ReportesVendedor from './ReportesVendedor';
import CuentaVendedor from './CuentaVendedor';
import Footer_Abajo from './Footer_Abajo';
import InicioVendedor from './InicioVendedor';

const ConfVendedor = () => {
  const [contenido, setContenido] = useState('Inicio');

  const manejarSeleccion = (opcion) => {
    setContenido(opcion);
  };

  return (
    <>
      <div className="conf-tienda">
        <nav className="menu">
          <div className="menu-header">
            <img src={logo} alt="Logo" className="menu-logo" />
            <span className="admin-text">Vendedor</span>
          </div>

          <ul className="menu-principal">
            <li className="menu-section"><span className="section-title">📊 OPERACIONES</span></li>
            <li onClick={() => manejarSeleccion('Inicio')} className={contenido === 'Inicio' ? 'active' : ''}>
              <Link className='nav-link1' to={'/ConfVendedor'}>🏠 Inicio</Link>
            </li>
            <li onClick={() => manejarSeleccion('Pedidos')} className={contenido === 'Pedidos' ? 'active' : ''}>
              <Link className='nav-link1' to={'/ConfVendedor/pedidosvende'}>📋 Pedidos</Link>
            </li>
            <li onClick={() => manejarSeleccion('Productos')} className={contenido === 'Productos' ? 'active' : ''}>
              <Link className='nav-link1' to={'/ConfVendedor/productosvende'}>📦 Productos</Link>
            </li>

            <li className="menu-section"><span className="section-title">📈 REPORTES</span></li>
            <li onClick={() => manejarSeleccion('Ventas')} className={contenido === 'Ventas' ? 'active' : ''}>
              <Link className='nav-link1' to={'/ConfVendedor/ventas'}>📊 Ventas</Link>
            </li>
            <li onClick={() => manejarSeleccion('Compras')} className={contenido === 'Compras' ? 'active' : ''}>
              <Link className='nav-link1' to={'/ConfVendedor/comprasvende'}>🧾 Compras</Link>
            </li>
            <li onClick={() => manejarSeleccion('Reportes')} className={contenido === 'Reportes' ? 'active' : ''}>
              <Link className='nav-link1' to={'/ConfVendedor/reportes'}>📊 Reportes</Link>
            </li>

            <li className="menu-section"><span className="section-title">⚙️ CONFIGURACIÓN</span></li>
            <li onClick={() => manejarSeleccion('Cuenta')} className={contenido === 'Cuenta' ? 'active' : ''}>
              <Link className='nav-link1' to={'/ConfVendedor/cuenta'}>👤 Cuenta</Link>
            </li>
          </ul>
        </nav>

        <div className="contenido">
          <Routes>
            <Route index element={<InicioVendedor />} />
            <Route path="pedidosvende" element={<PedidosVendedor />} />
            <Route path="productosvende" element={<ProductosVendedor />} />
            <Route path="ventas" element={<HistorialTi />} />
            <Route path="comprasvende" element={<ComprasVendedor />} />
            <Route path="reportes" element={<ReportesVendedor />} />
            <Route path="cuenta" element={<CuentaVendedor />} />
          </Routes>
        </div>
      </div>

      <div className="foret">
        <Footer_Abajo />
      </div>
    </>
  );
};

export default ConfVendedor;
