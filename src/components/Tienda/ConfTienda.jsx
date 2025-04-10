// src/components/ConfTienda.js
import React, { useState } from 'react';
import './ConfTienda.css';

const ConfTienda = () => {
  const [contenido, setContenido] = useState('Inicio');

  const manejarSeleccion = (opcion) => {
    setContenido(opcion);
  };

  return (
    <div className="conf-tienda">
      <nav className="menu">
        <div className="logo">
          <h1>COMUCTIVA</h1>
          <button>Ver tienda</button>
        </div>
        <ul className="menu-principal">
          <li onClick={() => manejarSeleccion('Inicio')} className={contenido === 'Inicio' ? 'active' : ''}>Inicio</li>
          <li onClick={() => manejarSeleccion('Pedidos')} className={contenido === 'Pedidos' ? 'active' : ''}>Pedidos</li>
          <li onClick={() => manejarSeleccion('Productos')} className={contenido === 'Productos' ? 'active' : ''}>Productos</li>
          <li onClick={() => manejarSeleccion('Historial')} className={contenido === 'Historial' ? 'active' : ''}>Historial</li>
          <li onClick={() => manejarSeleccion('Promociones')} className={contenido === 'Promociones' ? 'active' : ''}>Promociones</li>
        </ul>
        <h2>Personalización</h2>
        <ul>
          <li onClick={() => manejarSeleccion('Galería')} className={contenido === 'Galería' ? 'active' : ''}>Galería</li>
        </ul>
        <h2>Configuración</h2>
        <ul>
          <li onClick={() => manejarSeleccion('General')} className={contenido === 'General' ? 'active' : ''}>General</li>
          <li onClick={() => manejarSeleccion('Proceso de compra')} className={contenido === 'Proceso de compra' ? 'active' : ''}>Proceso de compra</li>
          <li onClick={() => manejarSeleccion('Cuenta')} className={contenido === 'Cuenta' ? 'active' : ''}>Cuenta</li>
        </ul>
      </nav>
      <div className="contenido">
        <h1>{contenido}</h1>
        <div className="contenido-dinamico">
          {contenido === 'Inicio' && <p>Aquí puedes ver las tareas para configurar tu tienda.</p>}
          {contenido === 'Pedidos' && <p>Aquí puedes gestionar tus pedidos.</p>}
          {contenido === 'Productos' && <p>Aquí puedes agregar y gestionar tus productos.</p>}
          {contenido === 'Historial' && <p>Aquí puedes ver el historial de tus transacciones.</p>}
          {contenido === 'Promociones' && <p>Aquí puedes gestionar tus promociones.</p>}
          {contenido === 'Galería' && <p>Aquí puedes gestionar la galería de tu tienda.</p>}
          {contenido === 'General' && <p>Aquí puedes ajustar la configuración general de tu tienda.</p>}
          {contenido === 'Proceso de compra' && <p>Aquí puedes configurar el proceso de compra.</p>}
          {contenido === 'Cuenta' && <p>Aquí puedes gestionar la información de tu cuenta.</p>}
        </div>
        <div className="ayuda">
          <h2>¿Necesitas Ayuda?</h2>
          <p>Aquí puedes encontrar orientación sobre cómo usar la plataforma.</p>
        </div>
      </div>
    </div>
  );
};

export default ConfTienda;