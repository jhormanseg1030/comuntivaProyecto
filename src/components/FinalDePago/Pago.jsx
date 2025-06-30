import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import banano from '../imagenes/banano.jpg';
import logo from '../Imagenes/logo.jpg';
import './Pago.css';
import { useState } from 'react';

function Pago() {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);

  const metodosPago = [
    { id: 'paypal', nombre: 'PayPal', icono: 'bi bi-paypal' },
    { id: 'tarjeta', nombre: 'Tarjeta', icono: 'bi bi-credit-card' },
  ];

  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <img src={logo} alt="Logo" className="nav-brand" />
          </Container>
        </Navbar>

        <div className='Pag'>
          <h2>Dirección de entrega</h2>
          <p>
            Calle 49 sur # 88 c 50 <br />
            Quintas de santa Cecilia 2 etapa 2 <br />
            Juan Camilo Chon Fonceca
          </p>
          <Link>Editar</Link>
        </div>

        <div className='Pag2'>
          <h2>Método de pago</h2>
          <h5>Selecciona tu método de pago</h5>
          
          <div className="metodos-pago">
            {metodosPago.map((metodo) => (
              <div
                key={metodo.id}
                className={`metodo-pago ${metodoSeleccionado === metodo.id ? 'seleccionado' : ''}`}
                onClick={() => setMetodoSeleccionado(metodo.id)}
              >
                <i className={metodo.icono}></i>
                <span>{metodo.nombre}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='Pag3'>
          <h2>Nombre de la tienda</h2>
          <div className='Cami'>
            <img src={banano} alt="banano" />
            <div>
              <h5 className='text'>Descripción del producto</h5>
              <h5 className='tex'>Valor del producto</h5>
            </div>
          </div>
        </div>

        <section className='cont1'>
          <div className='cont2'>
            <h2>Confirmación de pedido</h2>
            <div className='val'>
              <h5>Subtotal</h5>
              <h5 className='com'>Valor de la compra</h5>
            </div>
            <div className='cont3'>
              <h5>Envío</h5>
              <h5>Fecha de entrega</h5>
            </div>
            <div className='cont4'>
              <h5>Total a pagar</h5>
              <h5 className='Valo'>Valor de la compra</h5>
            </div>
            <div className='pa'>
              <button disabled={!metodoSeleccionado}>
                {metodoSeleccionado ? `Pagar con ${metodosPago.find(m => m.id === metodoSeleccionado).nombre}` : 'Selecciona un método de pago'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Pago;