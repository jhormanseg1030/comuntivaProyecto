import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import './Pago.css';
const Pago = () => {
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
            <h5>Agregar</h5>
        </div>
    </div>
    );
}

export default Pago;
