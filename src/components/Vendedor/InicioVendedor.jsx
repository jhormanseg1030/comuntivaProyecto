import React from 'react';
import { Link } from 'react-router-dom';
import './InicioVendedor.css';

const InicioVendedor = () => {
  return (
    <div className="inicio-vendedor">
      <header className="inicio-header">
        <h1>Bienvenido a tu espacio de Vendedor</h1>
        <p className="intro">Este es un espacio pensado especialmente para campesinos.</p>
      </header>

      <section className="inicio-content">
        <p>
          Aquí puedes publicar y promocionar tus productos, gestionar y revisar pedidos.
          Nuestro objetivo es darte una vitrina sencilla para que tus productos lleguen a más clientes.
        </p>

        <ul className="beneficios-list">
          <li><strong>Publicar productos:</strong> Añade fotos, precios y descripciones claras.</li>
          <li><strong>Gestionar inventario:</strong> Actualiza cantidades y controla lo que ofreces.</li>
          <li><strong>Recibir pedidos:</strong> Administra los pedidos y comunícate con compradores.</li>
          <li><strong>Promoción local:</strong> Aprovecha este espacio para conectar con tu comunidad.</li>
        </ul>

        <div className="acciones">
          <Link to="/ConfVendedor/productosvende" className="btn">Publicar productos / Gestionar productos</Link>
          <Link to="/ConfVendedor/pedidosvende" className="btn secondary">Ver pedidos</Link>
        </div>

        <p className="nota">Consejo: usa fotos claras y descripciones honestas para ganar la confianza de tus clientes.</p>
      </section>
    </div>
  );
};

export default InicioVendedor;
