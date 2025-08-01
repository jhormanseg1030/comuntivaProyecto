import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Frutas1 from '../imagenes/Frutas1.jpg'
import Frutas2 from '../imagenes/Frutas2.jpg'
import Mercados8 from '../imagenes/Mercados8.jpg';
import './Gran.css';
function Grano() {
    return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <img src={logo} alt="Logo" className="nav-brand"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                          <Nav.Link href="/">Inicio</Nav.Link>
                          <Nav.Link href="/Quienes somos">Quienes Somos</Nav.Link>
                          <Nav.Link href="/Segunda">Tiendas</Nav.Link>
                          <Nav.Link href="#action4">Características</Nav.Link>
                          <Nav.Link href="#action5">Ayuda</Nav.Link>
            <NavDropdown title="Categoría" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Frutas">frutas</NavDropdown.Item>
                <NavDropdown.Item href="/Verduras">verduras</NavDropdown.Item>
                <NavDropdown.Item href="/Lacteos">lacteos</NavDropdown.Item>
                <NavDropdown.Item href="/Papa">papa</NavDropdown.Item>
                <NavDropdown.Item href="/Grano">granos</NavDropdown.Item>
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

<Carousel className='carusel'>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
        src={Frutas1}
        alt='First slider'
        />
        <Carousel.Caption>
            <h3>First slider label</h3>
            <p>nulla vitae elit libero, a pharetra augue mollis</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
        src={Frutas2}
        alt='Second slider'
        />
        <Carousel.Caption>
            <h3>Second slider</h3>
            <p>alexander anderson, conocido como polvo de angel, un asesino serial de vaticano</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
        src={Mercados8}
        alt='Third slider'
        />
        <Carousel.Caption>
            <h3>Third slider</h3>
            <p>Solo Leveling, anime del protagonista sung jinwoo, tambien conocido monarca de las sombras</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <div className='Texto'>
        <h3>No hay granos disponibles en la lista</h3>
        </div>
</>
    )
}

export default Grano;