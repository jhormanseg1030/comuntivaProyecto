import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import './Pago.css';
import '../../styles/header.css';
import { useState } from 'react';
import Pinea from '../imagenes/Pinea.jpg';
import Arandanos from '../imagenes/Arandanos.jpeg';
import Mangos from '../imagenes/Mangos.jpg';
import banano from '../imagenes/banano.jpg';
import Fresas from '../imagenes/Fresas.jpg';

function Pago() {
  const location = useLocation();
  const { carrito = [], subtotal = 0, descuento = 0, total = 0 } = location.state || {};
  
  const frutas = [
    { id: 1, nombre: 'Pinea', precio: 3500, imagen: Pinea },
    { id: 2, nombre: 'banano', precio: 1800, imagen: banano },
    { id: 3, nombre: 'Fresas', precio: 4200, imagen: Fresas},
    { id: 4, nombre: 'Arandanos', precio: 7800, imagen: Arandanos },
    { id: 5, nombre: 'Mangos', precio: 3200, imagen: Mangos }
  ];

  const frutasUnaUnidad = frutas.map(fruta => ({
    ...fruta,
    cantidad: 1,
    subtotal: fruta.precio
  }));
  
  const nuevoSubtotal = frutasUnaUnidad.reduce((sum, item) => sum + item.precio, 0);
  const nuevoDescuento = 0; 
  const nuevoTotal = nuevoSubtotal - nuevoDescuento;

  const [datosPago, setDatosPago] = useState({
    nombre: '',
    email: '',
    direccion: '',
    ciudad: ''
  });

  const [metodoPago, setMetodoPago] = useState(''); 
  const [tarjetaData, setTarjetaData] = useState({
    numero: '',
    nombre: '',
    vencimiento: '',
    cvv: ''
  });

  const [datosTransferencia, setDatosTransferencia] = useState({
    telefono: '',
    cantidad: nuevoTotal
  });

  const [errorMetodoPago, setErrorMetodoPago] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosPago(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTarjetaChange = (e) => {
    const { name, value } = e.target;
    setTarjetaData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTransferenciaChange = (e) => {
    const { name, value } = e.target;
    setDatosTransferencia(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
    setErrorMetodoPago('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (!metodoPago) {
      setErrorMetodoPago('Por favor selecciona un método de pago');
      return;
    }
    
    console.log('Procesando pago:', {
      ...datosPago,
      metodoPago,
      tarjetaData: metodoPago === 'tarjeta' ? tarjetaData : null,
      datosTransferencia: (metodoPago === 'nequi' || metodoPago === 'daviplata') ? datosTransferencia : null,
      total: nuevoTotal
    });
    alert(`¡Pago procesado con éxito! Método: ${metodoPago}`);
  };

  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary"> 
          <Container fluid>
            <img src={logo} alt="Logo" className="nav-brand" />
          </Container>
        </Navbar>
      </div>

      <div className="pago-container">
        <div className="pago-content">
          
          <div className="columna-izquierda">
            
            <div className="resumen-pedido">
              <h2>Resumen de tu pedido</h2>
              
              {frutasUnaUnidad.length === 0 ? (
                <p className="empty-cart">No hay productos en el carrito</p>
              ) : (
                <>
                  <div className="productos-resumen">
                    {frutasUnaUnidad.map((fruta, index) => (
                      <div key={index} className="producto-resumen">
                        <img src={fruta.imagen} alt={fruta.nombre} className="producto-resumen-img" />
                        <div className="producto-resumen-info">
                          <h4>{fruta.nombre}</h4>
                          <p>Cantidad: {fruta.cantidad}</p>
                          <p>Precio: ${fruta.precio.toLocaleString()}/kg</p>
                          <p>Subtotal: ${(fruta.precio * fruta.cantidad).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="totales-resumen">
                    <div className="total-line">
                      <span>Subtotal:</span>
                      <span>${nuevoSubtotal.toLocaleString()}</span>
                    </div>
                    {nuevoDescuento > 0 && (
                      <div className="total-line descuento">
                        <span>Descuento:</span>
                        <span>-${nuevoDescuento.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="total-line total-final">
                      <span>Total:</span>
                      <span>${nuevoTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="metodos-pago-seccion">
              <h2>Método de pago</h2>
              

              {errorMetodoPago && (
                <div className="error-mensaje-pago">
                  ⚠️ {errorMetodoPago}
                </div>
              )}
              
              <div className="metodos-pago">
                <div className="opciones-pago">
                  <label className="opcion-pago">
                    <input
                      type="radio"
                      name="metodoPago"
                      value="efectivo"
                      checked={metodoPago === 'efectivo'}
                      onChange={handleMetodoPagoChange}
                    />
                    <span className="icono-pago">💵</span>
                    <span>Efectivo</span>
                  </label>

                  <label className="opcion-pago">
                    <input
                      type="radio"
                      name="metodoPago"
                      value="daviplata"
                      checked={metodoPago === 'daviplata'}
                      onChange={handleMetodoPagoChange}
                    />
                    <span className="icono-pago">📱</span>
                    <span>DaviPlata</span>
                  </label>

                  <label className="opcion-pago">
                    <input
                      type="radio"
                      name="metodoPago"
                      value="tarjeta"
                      checked={metodoPago === 'tarjeta'}
                      onChange={handleMetodoPagoChange}
                    />
                    <span className="icono-pago">💳</span>
                    <span>Tarjeta crédito/débito</span>
                  </label>

                  <label className="opcion-pago">
                    <input
                      type="radio"
                      name="metodoPago"
                      value="nequi"
                      checked={metodoPago === 'nequi'}
                      onChange={handleMetodoPagoChange}
                    />
                    <span className="icono-pago">💜</span>
                    <span>Nequi</span>
                  </label>
                </div>
              </div>


              {!metodoPago && (
                <div className="selecciona-metodo">
                  <p>👆 Por favor selecciona un método de pago</p>
                </div>
              )}


              {metodoPago === 'efectivo' && (
                <div className="transferencia-section">
                  <div className="transferencia-animation">
                    <div className="cash-animation">
                      <div className="cash-bill">💵</div>
                      <div className="cash-bill">💵</div>
                      <div className="cash-bill">💵</div>
                    </div>
                    <h3>Pago en Efectivo</h3>
                    <p>Prepara el monto exacto para cuando recibas tu pedido</p>
                    <div className="monto-efectivo">
                      <strong>Total a pagar: ${nuevoTotal.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>
              )}

              {(metodoPago === 'daviplata' || metodoPago === 'nequi') && (
                <div className="transferencia-section">
                  <div className="transferencia-animation">
                    <div className="phone-animation">
                      <div className="phone-screen">
                        <div className="app-icon">
                          {metodoPago === 'daviplata' ? '📱' : '💜'}
                        </div>
                        <div className="transfer-process">
                          <div className="transfer-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <p>Transferencia en proceso...</p>
                        </div>
                      </div>
                    </div>
                    <h3>Pago con {metodoPago === 'daviplata' ? 'DaviPlata' : 'Nequi'}</h3>
                    
                    <div className="form-transferencia">
                      <div className="form-group">
                        <label>Número de teléfono *</label>
                        <input
                          type="tel"
                          name="telefono"
                          value={datosTransferencia.telefono}
                          onChange={handleTransferenciaChange}
                          placeholder="Ingresa tu número de teléfono"
                          maxLength="10"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Cantidad a transferir</label>
                        <input
                          type="text"
                          name="cantidad"
                          value={`$${datosTransferencia.cantidad.toLocaleString()}`}
                          readOnly
                          className="cantidad-readonly"
                        />
                      </div>
                      <div className="transferencia-info">
                        <p>💡 <strong>Instrucciones:</strong></p>
                        <ol>
                          <li>Ingresa tu número de teléfono registrado</li>
                          <li>Abre tu app de {metodoPago === 'daviplata' ? 'DaviPlata' : 'Nequi'}</li>
                          <li>Transfiere el monto exacto indicado</li>
                          <li>Guarda el comprobante de transferencia</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {metodoPago === 'tarjeta' && (
                  <div className="tarjeta-section">
                    <h3>Información de la tarjeta</h3>
                    
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <p className="heading_8264">MASTERCARD</p>
                          <svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
                            <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
                            <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                          </svg>
                        
                          <svg className="chip" viewBox="0 0 24 24" width="30" height="30">
                            <rect x="2" y="6" width="20" height="12" rx="2" fill="#C0C0C0" stroke="#808080" strokeWidth="0.5"/>
                            <rect x="4" y="8" width="16" height="8" fill="#D4AF37" stroke="#B8860B" strokeWidth="0.3"/>
                            <line x1="6" y1="10" x2="8" y2="10" stroke="#808080" strokeWidth="0.5"/>
                            <line x1="10" y1="10" x2="12" y2="10" stroke="#808080" strokeWidth="0.5"/>
                            <line x1="14" y1="10" x2="16" y2="10" stroke="#808080" strokeWidth="0.5"/>
                            <line x1="6" y1="12" x2="8" y2="12" stroke="#808080" strokeWidth="0.5"/>
                            <line x1="10" y1="12" x2="12" y2="12" stroke="#808080" strokeWidth="0.5"/>
                            <line x1="14" y1="12" x2="16" y2="12" stroke="#808080" strokeWidth="0.5"/>
                            <line x1="6" y1="14" x2="8" y2="14" stroke="#808080" strokeWidth="0.5"/>
                            <line x1="10" y1="14" x2="12" y2="14" stroke="#808080" strokeWidth="0.5"/>
                            <line x1="14" y1="14" x2="16" y2="14" stroke="#808080" strokeWidth="0.5"/>
                          </svg>
                
                          <svg className="contactless" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50">
                            <image width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQflGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJauKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/FfPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xNGQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Xc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49itVoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMJjJkHpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z7kbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6gDJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjKfiCuJg2ZEspq9EHGVpYgzKqwJqSAOEwuJQ/pxPvE3cYltJCLdxBLiSKOIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKBsYctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71AmzZ+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+cze8RKZQp2zw94kUy8SKzSyA2TOzvciEbsSTe2VKFuvRB169TrJtHicEV7uAmq1aRzHyOzSpMqzSIJgJZdraiuZ3nlcUxNETtNhBJvJ7NTlXOuLhAg2IAwAuEA7/nQYQf78fM+W2Ya6eO51XfkXR4pg/DnXrRcK30XiD1NvRWglYp7YzWmTEBFBLd7gdtpStdDS2P6CBSQGAK0JWIJgIx5FAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTA5LTIwVDA4OjE5OjU2KzAwOjAwY5auywAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wOS0yMFQwODoxOTo1NiswMDowMNLLFncAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDktMjBUMDg6MTk6NTYrMDA6MDCF3jeoAAAAAElFTkSuQmCC"></image>
                          </svg>
                          
                          <p className="number">{tarjetaData.numero || '9759 2484 5269 6576'}</p>
                          <p className="valid_thru">VALID THRU</p>
                          <p className="date_8264">{tarjetaData.vencimiento || '12/24'}</p>
                          <p className="name">{tarjetaData.nombre || 'BRUCE WAYNE'}</p>
                        </div>
                        <div className="flip-card-back">
                          <div className="strip"></div>
                          <div className="mstrip"></div>
                          <div className="sstrip">
                            <p className="code">{tarjetaData.cvv || '*'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="form-tarjeta">
                    <div className="form-group">
                      <label>Número de tarjeta *</label>
                      <input
                        type="text"
                        name="numero"
                        value={tarjetaData.numero}
                        onChange={handleTarjetaChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Nombre en la tarjeta *</label>
                      <input
                        type="text"
                        name="nombre"
                        value={tarjetaData.nombre}
                        onChange={handleTarjetaChange}
                        placeholder="BRUCE WAYNE"
                        required
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Fecha de vencimiento *</label>
                        <input
                          type="text"
                          name="vencimiento"
                          value={tarjetaData.vencimiento}
                          onChange={handleTarjetaChange}
                          placeholder="MM/AA"
                          maxLength="5"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>CVV *</label>
                        <input
                          type="text"
                          name="cvv"
                          value={tarjetaData.cvv}
                          onChange={handleTarjetaChange}
                          placeholder="123"
                          maxLength="3"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="columna-derecha">
            <div className="formulario-pago">
              <h2>Información de contacto</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nombre completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={datosPago.nombre}
                    onChange={handleInputChange}
                    required
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={datosPago.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>

                <div className="form-group">
                  <label>Dirección de envío *</label>
                  <input
                    type="text"
                    name="direccion"
                    value={datosPago.direccion}
                    onChange={handleInputChange}
                    required
                    placeholder="Calle, número, departamento"
                  />
                </div>

                <div className="form-group">
                  <label>Ciudad *</label>
                  <input
                    type="text"
                    name="ciudad"
                    value={datosPago.ciudad}
                    onChange={handleInputChange}
                    required
                    placeholder="Ciudad"
                  />
                </div>

                <button 
                  type="submit" 
                  className="pay-btn"
                  disabled={frutasUnaUnidad.length === 0}
                >
                  <span className="btn-text">Pagar ahora - ${nuevoTotal.toLocaleString()}</span>
                  <div className="icon-container">
                    <svg viewBox="0 0 24 24" className="icon card-icon">
                      <path
                        d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg viewBox="0 0 24 24" className="icon payment-icon">
                      <path
                        d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg viewBox="0 0 24 24" className="icon dollar-icon">
                      <path
                        d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg viewBox="0 0 24 24" className="icon wallet-icon default-icon">
                      <path
                        d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg viewBox="0 0 24 24" className="icon check-icon">
                      <path
                        d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pago;