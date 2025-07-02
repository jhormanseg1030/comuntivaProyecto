import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import './Frutas.css';
function Frutas() {
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
            <Nav.Link href="#action3">Tiendas</Nav.Link>
            <Nav.Link href="#action4">Características</Nav.Link>
            <Nav.Link href="#action5">Ayuda</Nav.Link>
            <NavDropdown title="Categoría" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action6">frutas</NavDropdown.Item>
                <NavDropdown.Item href="#action7">verduras</NavDropdown.Item>
                <NavDropdown.Item href="#action8">lacteos</NavDropdown.Item>
                <NavDropdown.Item href="#action9">papa</NavDropdown.Item>
                <NavDropdown.Item href="#action10">granos</NavDropdown.Item>
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
    
    </>
    )
}

export default Frutas;