// src/components/ConfTienda.js
import React, { useState } from 'react';
import './ConfTienda.css';
import logo from '../imagenes/logo.jpg';

const ConfTienda = () => {
  const [contenido, setContenido] = useState('Inicio');

  const manejarSeleccion = (opcion) => {
    setContenido(opcion);
  };

  return (
    <div className="conf-tienda">
      <nav className="menu">
        <div className="logo">
        <img src={logo} alt="Logo" className="nav-brand"/>
        <button>Ver tienda</button>
        </div>
        <ul className="menu-principal">
          <li onClick={() => manejarSeleccion('Inicio')} className={contenido === 'Inicio' ? 'active' : ''}>Inicio</li>
          <li onClick={() => manejarSeleccion('Pedidos')} className={contenido === 'Pedidos' ? 'active' : ''}>Pedidos</li>
          <li onClick={() => manejarSeleccion('Productos')} className={contenido === 'Productos' ? 'active' : ''}>Productos</li>
          <li onClick={() => manejarSeleccion('Historial')} className={contenido === 'Historial' ? 'active' : ''}>Historial</li>
          <li onClick={() => manejarSeleccion('Promociones')} className={contenido === 'Promociones' ? 'active' : ''}>Promociones</li>
      
        <h2>Personalización</h2>
    
          <li onClick={() => manejarSeleccion('Galería')} className={contenido === 'Galería' ? 'active' : ''}>Galería</li>
    
        <h2>Configuración</h2>

          <li onClick={() => manejarSeleccion('General')} className={contenido === 'General' ? 'active' : ''}>General</li>
          <li onClick={() => manejarSeleccion('Proceso de compra')} className={contenido === 'Proceso de compra' ? 'active' : ''}>Proceso de compra</li>
          <li onClick={() => manejarSeleccion('Cuenta')} className={contenido === 'Cuenta' ? 'active' : ''}>Cuenta</li>
        </ul>
      </nav>
      <div className="contenido">
        <h1>{contenido}</h1>
        <div className="contenido-dinamico">
          {contenido === 'Inicio' && <div><h2>Gestionar descuentos y promociones</h2>
          <p>Aquí puedes ver las tareas para configurar tu tienda.</p>
          <button>hjsjdks</button></div>}
          {contenido === 'Pedidos' && <p>Aquí puedes gestionar tus pedidos.</p>}
          {contenido === 'Productos'&& 
          <div>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>Añadir Producto</button></div>}
          {contenido === 'Historial' && <p>Aquí puedes ver el historial de tus transacciones.</p>}

          {contenido === 'Promociones' && 
          <div>
            <h2>Gestionar descuentos y promociones</h2>
            <p>Aquí puedes gestionar tus promociones, añade códigos de descuento y descuentos automáticos que se aplican en el pago</p>
            <button>Crear Promociones</button>
            </div>}

          {contenido === 'Galería' && <p>Aquí puedes gestionar la galería de tu tienda.</p>}
          {contenido === 'General' && <p>Aquí puedes ajustar la configuración general de tu tienda.</p>}
          {contenido === 'Proceso de compra' && <p>Aquí puedes configurar el proceso de compra.</p>}
          {contenido === 'Cuenta' && <p>Aquí puedes gestionar la información de tu cuenta.</p>}
        </div>
        <div className="ayuda">
          <h2><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg></h2>
          <p>Aquí puedes encontrar orientación sobre cómo usar la plataforma.</p>
          <button>¿Necesitas Ayuda? </button>
        </div>
      </div>
    </div>
  );
};

export default ConfTienda;