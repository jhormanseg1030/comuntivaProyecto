// src/components/ConfTienda.js
import React, { useState } from 'react';
import './ConfTienda.css';
import logo from '../imagenes/logo.jpg';
import './Producto.css';
import './Inicio.css';
import './ProCompra.css';
import './Pedidos.css';
import "./Historial.css";
import { Link } from 'react-router-dom';
import grafica from '../imagenes/grafica.png';

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
        <Link to ="/TiendaDonJuan"><button>Ver tienda</button></Link>
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
        {contenido === 'Inicio' && 
<div className="inicio-container">
  <p>Aquí puedes ver las tareas para configurar tu tienda</p>
  <div className="form-container">
    <div className="form-floating">
      <input type="text" className="form-control" id="floatingPassword" placeholder=""/>
      <label htmlFor="floatingPassword">Asignar un Nombre a tu Tienda</label>
    </div>
    <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Telefono de Contacto" aria-label="Contacto"/>
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Correo" aria-label="CorreoT"/>
                </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Cra 68 #677 surexamp"/>
                <label for="floatingInput">Direccion o Dominio de la Tienda </label>
                </div>
                <div class="input-group mb-3">
                  <input type="file" class="form-control" id="inputGroupFile02"/>
                  <label class="input-group-text" for="inputGroupFile02">Logotipo de la Marca</label>
                </div>
                <button type="button" class="btn btn-success">Guardar Informacion</button>
            </div>
          </div>}

          {contenido === 'Pedidos' && (
  <div className="seccion-pedidos">
    {/* Header con filtros y botones */}
    <div className="pedidos-header">
      <h3>Aquí puedes gestionar tus pedidos</h3>
      <div className="controles-pedidos">
        <div className="filtros">
          <input 
            type="text" 
            placeholder="Buscar por cliente o ID..." 
            className="input-busqueda"
          />
          <input 
            type="date" 
            className="input-fecha"
          />
             <select className="select-filtro">
            <option>Todos los estados</option>
            <option>Pendiente</option>
            <option>Procesando</option>
            <option>Enviado</option>
            <option>Entregado</option>
            <option>Cancelado</option>
          </select> 
        </div>
      <button className="btn-nuevo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Nuevo Pedido
        </button>
      </div>
    </div>

    {/* Tabla de pedidos */}
    <div className="tabla-pedidos-container">
      <table className="tabla-pedidos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Productos</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Ejemplo de pedido */}
          <tr>
            <td>#10025</td>
            <td>
              <div className="cliente-info">
                <span className="cliente-nombre">María González</span>
                <span className="cliente-contacto">maria@example.com</span>
              </div>
            </td>
            <td>15/05/2024</td>
            <td>
              <div className="productos-lista">
                <span>5x Arroz Orgánico</span>
                <span>2x Café 1kg</span>
              </div>
            </td>
            <td>30.000</td>
            <td>
              <span className="estado-badge estado-procesando">Procesando</span>
            </td>
            <td>
              <div className="acciones-pedido">
                <button className="btn-accion btn-detalles">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                  </svg>
                </button>
                <button className="btn-accion btn-editar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </button>
                <button className="btn-accion btn-factura">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm4 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Integración con inventario/facturas */}
    <div className="modulos-integracion">
      <div className="card-integracion">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.793L6.354 7.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5z"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
          </svg>
          Inventario
        </h3>
        <p>Actualización automática al procesar pedidos</p>
        <button className="btn-ver-inventario">Ver Inventario</button>
      </div>

      <div className="card-integracion">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
          </svg>
          Facturación
        </h3>
        <p>Generar facturas electrónicas</p>
        <button className="btn-generar-factura">Generar Factura</button>
      </div>
    </div>
  </div>
)}
          {contenido === 'Productos' && 
<div className="productos-container">
  <div className="productos-header">
    <h3>Aquí puedes gestionar tus productos</h3>
  </div>

  <div className="product-form-container">
    <div className="form-section">
      <h3>Información Básica</h3>
      <div className="form-row">
        <div className="form-group1">
          <label>Nombre del Producto*</label>
          <input type="text" placeholder="Ej: Arroz Orgánico" required />
        </div>
        <div className="form-group1">
          <label>Código de Barras/Referencia</label>
          <input type="text" placeholder="Código único" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Categoría*</label>
          <select required>
            <option value="">Seleccionar...</option>
            <option value="granos">Granos</option>
            <option value="frutas">Frutas</option>
            <option value="verduras">Verduras</option>
            <option value="lacteos">Lácteos</option>
            <option value="carnes">Carnes</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tipo de Producto*</label>
          <select required>
            <option value="">Seleccionar...</option>
            <option value="fresco">Fresco</option>
            <option value="seco">Seco</option>
            <option value="procesado">Procesado</option>
            <option value="organico">Orgánico</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group2">
          <label>Descripción</label>
          <textarea placeholder="Descripción detallada del producto"></textarea>
        </div>
      </div>
    </div>

    <div className="form-section">
      <h3>Precio y Unidades</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Unidad de Medida*</label>
          <select required>
            <option value="">Seleccionar...</option>
            <option value="libra">Libra</option>
            <option value="kilo">Kilogramo</option>
            <option value="bulto">Bulto</option>
            <option value="unidad">Unidad</option>
            <option value="litro">Litro</option>
          </select>
        </div>
        <div className="form-group">
          <label>Precio por Unidad*</label>
          <input type="number" placeholder="Ej: 2500" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Precio por Mayor (opcional)</label>
          <div className="price-tier-container">
            <div className="price-tier">
              <input type="number" placeholder="Cantidad mínima" />
              <span>unidades →</span>
              <input type="number" placeholder="Precio especial" />
            </div>
            <button type="button" className="btn-add-tier">+ Añadir otro nivel</button>
          </div>
        </div>
      </div>
    </div>

    <div className="form-section">
      <h3>Inventario y Logística</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Cantidad en Stock*</label>
          <input type="number" placeholder="Ej: 100" required />
        </div>
        <div className="form-group">
          <label>Almacén/Lugar de Origen</label>
          <input type="text" placeholder="Ej: Finca La Esperanza" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Peso (opcional)</label>
          <input className="ejem" type="number" placeholder="Ej: 1.5" />
        </div>
        <div className="form-group">
          <label>Dimensiones (opcional)</label>
          <div className="dimensions-input">
            <input type="number" placeholder="Ancho" />
            <span>x</span>
            <input type="number" placeholder="Alto" />
            <span>x</span>
            <input type="number" placeholder="Largo" />
            <select className="small-select">
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
            <select className="small-select">
            <option value="kg">kg</option>
            <option value="g">gr</option>
            <option value="lb">lib</option>
          </select>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Método de Envío</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Recogida en finca
            </label>
            <label>
              <input type="checkbox" /> Envío a domicilio
            </label>
            <label>
              <input type="checkbox" /> Puntos de distribución
            </label>
          </div>
        </div>
      </div>
    </div>

    <div className="form-section">
      <h3>Imágenes del Producto</h3>
      <div className="image-upload-container">
        <div className="image-upload-box">
          <span>+</span>
          <p>Arrastra imágenes aquí o haz clic para subir</p>
        </div>
      </div>
    </div>

    <div className="form-actions">
      <button type="button" className="btn-cancel">Cancelar</button>
      <button type="submit" className="btn-save">Guardar Producto</button>
    </div>
  </div>
</div>}
        {contenido === 'Historial' && 
  <div className="sales-history-container">
    <div className="div1">
      <div className="div2">
        <h2>Ganancias del vendedor</h2>
        <div className="date-filter">
          <label htmlFor="start-date">Desde:</label>
          <input type="date" id="start-date" />
          <label htmlFor="end-date">Hasta:</label>
          <input type="date" id="end-date" />
        </div>
        <div className="total-sales">
          <p>Total de Ventas</p>
          <span>$2.450.000</span>
        </div>
      </div>

      <div className="summary-graphic">
        <img src={grafica} alt="grafica" className="summary-graphic"/>
      </div>
    </div>

    <div className="sales-table">
      <h3>Transacciones recientes</h3>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>29-06-2025</td>
            <td>Arroz Orgánico</td>
            <td>3</td>
            <td>$75.000</td>
          </tr>
          <tr>
            <td>30-06-2025</td>
            <td>Tomate</td>
            <td>5</td>
            <td>$50.000</td>
          </tr>
          <tr>
            <td>30-07-2025</td>
            <td>Papa Pastusa</td>
            <td>1</td>
            <td>$20.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}


          {contenido === 'Promociones' && 
          <div>
            <h2>Gestionar descuentos y promociones</h2>
            <h5>Nombre del Descuento</h5>
            <input type="text" />
            <i class="bi bi-toggle-on"></i>
            Descuento con cupón
            <h5>Configura opcionalmenteun código de cupón para activar la promocion</h5>
            <p>Aquí puedes gestionar tus promociones, añade códigos de descuento y descuentos automáticos que se aplican en el pago</p>
            <button>Crear Promociones</button>

            
            </div>}

          {contenido === 'Galería' && <p>Aquí puedes gestionar la galería de tu tienda.</p>}
          {contenido === 'General' && <p>Aquí puedes ajustar la configuración general de tu tienda.</p>}

          {contenido === 'Proceso de compra' && 
<div className="proceso-compra-container">
  <h2>Aquí puedes configurar el proceso de compra</h2>
  
  <div className="config-section">
    <h3>Métodos de Pago</h3>
    <div className="payment-methods">
    <div className="method-card">
    <div className="payment-method">
  <div className="method-label">
    <input type="checkbox" id="med" />
   <label  htmlFor="med">Pago en efectivo</label>
  </div>

        
        <div className="method-details">
          <p>Pago al momento de recibir el producto</p>
          <div className="method-options">
            <label>
              <input type="checkbox" /> Requerir cambio exacto
            </label>
          </div>
        </div>
      </div>
  </div>
      <div className="method-card">
        <div className="method-header">
          <input type="checkbox" id="transferencia" />
          <label htmlFor="transferencia">Transferencia Bancaria</label>
        </div>
        <div className="method-details">
          <p>Pago por transferencia o consignación</p>
          <div className="form-group">
            <label>Cuentas bancarias:</label>
            <div className="bank-accounts">
              <input type="text" placeholder="Banco" />
              <input type="text" placeholder="Tipo de cuenta" />
              <input type="text" placeholder="Número de cuenta" />
              <button className="btn-add-account">+ Añadir cuenta</button>
            </div>
          </div>
        </div>
      </div>

      <div className="method-card">
        <div className="method-header">
          <input type="checkbox" id="tarjeta" />
          <label htmlFor="tarjeta">Tarjeta de Crédito/Débito</label>
        </div>
        <div className="method-details">
          <p>Pago con tarjeta a través de pasarela de pago</p>
          <div className="form-group">
            <label>Seleccionar pasarela:</label>
            <select>
              <option value="">Seleccionar...</option>
              <option value="payu">PayPal</option>
              <option value="mercadopago">Mercado de Pago</option>
              <option value="stripe">Stripe</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="config-section">
    <h3>Opciones de Entrega</h3>
    <div className="delivery-options">
      <div className="form-group">
        <label>
          <input type="checkbox" /> Recogida en finca/tienda
        </label>
        <div className="option-details">
          <input type="text" placeholder="Dirección para recoger" />
        </div>
      </div>

      <div className="form-group">
        <label>
          <input type="checkbox" /> Envío a domicilio
        </label>
        <div className="option-details">
          <div className="form-row">
            <div className="form-group">
              <label>Costo de envío base:</label>
              <input type="number" placeholder="Valor fijo" />
            </div>
            <div className="form-group">
              <label>o calcular por:</label>
              <select>
                <option value="">Seleccionar...</option>
                <option value="peso">Peso</option>
                <option value="distancia">Distancia</option>
                <option value="zona">Zona geográfica</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="form-actions">
    <button className="btn-cancel">Cancelar</button>
    <button className="btn-save">Guardar Configuración</button>
  </div>
</div>}

          {contenido === 'Cuenta' && <p>Aquí puedes gestionar la información de tu cuenta.</p>}
        </div>


        <div className="ayuda">
          <h2><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg></h2>
          <p>Aquí puedes encontrar orientación sobre cómo usar la plataforma.</p>
          <button>¿Necesitas Ayuda? Click aqui! </button>
        </div>
      </div>
    </div>
  );
};

export default ConfTienda;