

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import banano from '../imagenes/banano.jpg';
import logo from '../Imagenes/logo.jpg';
import './Pago.css';
function Pago () {
    return (
        <div>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <img src={logo} alt="Logo" className="nav-brand"/>
        </Container>
    </Navbar>
        <div className='Pag'>
            <h2>Direccion de entrega</h2>
            <p>Calle 49 sur # 88 c 50
            Quintas de santa cecillia 2 etapa 2
            Juan Camilo Chon Fonceca</p>
            <Link>Editar</Link>
        </div>
        <div className='Pag2'>
            <h2>Metodo de pago</h2>
            <h5>Agrega te metodo de pago</h5>
            <input type="checkbox"/>
        </div>
        <div className=' Pag3'>
            <h2>Nombre de la tienda</h2>
                <div className='Cami'>
                    <img src={banano} alt="banano" />
                <div>
                    <h5 className='text'>Descripcion del producto</h5>
                    <h5>Valor del producto</h5>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h2>Confirmacion de pedido</h2>
            </div>
            <div>
                <h5>subtotal</h5>
                <h5>Envio:</h5>
                <h5>Fecha de entrega</h5>
                <h5>Total a pagar</h5>
            </div>
            <div>
                <h5>Valor de la compra</h5>
            </div>
        </div>
    </div>
    );
}

export default Pago;

