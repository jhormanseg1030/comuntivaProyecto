import './carro.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';

function Carrito () {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <img src={logo} alt="Logo" className="nav-brand"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link className='h' href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Quienes Somos</Nav.Link>
            <Link to = "/Login"><Nav.Link href="#action3">Tiendas</Nav.Link></Link>
            <Nav.Link href="#action4">Características</Nav.Link>
            <Nav.Link href="#action5">Ayuda</Nav.Link>
            <NavDropdown title="Categoría" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action6">Acción 1</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Acción 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">Otra opción</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form className="d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Buscar</Button>
            </Form>
            </Navbar.Collapse>
            <Link className='link1' to= "/Login"> Iniciar Sesión</Link>
        </Container>
    </Navbar>
    <div className="page-container">
        
        <div className="main-content">
            <h2>Aqui estan las compras</h2>
            <p>Esto es una muestra no me pelien</p>
        </div>

        
        <div className="cart-container">
            <h2 className="cart-title">Tu Carrito (0)</h2>

            <div className="cart-items">
            <div className="empty-cart-message">
                <p>Tu carrito está vacío</p>
            </div>
        </div>
        <div className="cart-summary">
            <div className="summary-row">
                <span>Subtotal:</span>
                <span>COP0</span>
            </div>
            <div className="summary-row">
                <span>Envío:</span>
                <span>COP0</span>
            </div>
            <div className="summary-row total">
                <span>Total:</span>
                <span>COP0</span>
            </div>
            <button className="checkout-button" disabled>Continuar compra</button>
            </div>
        </div>
        </div>
    </>
    );
};

export default Carrito;
/*Hola*/ 