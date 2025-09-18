import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import Carousel from 'react-bootstrap/Carousel';
import lacte from '../imagenes/lacte.jpg';
import lacteo from '../imagenes/lacteo.jpg';
import Prolacte from '../imagenes/Prolacte.jpg';
import './Lacte.css';
import Footer_Abajo from '../Vendedor/Footer_Abajo';
function lacteos() {
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
        src={lacte}
        alt='First slider'
        />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
        src={lacteo}
        alt='Second slider'
        />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
        src={Prolacte}
        alt='Third slider'
        />
        </Carousel.Item>
    </Carousel>
    <div className='Texto'>
        <h3>No hay lacteos disponibles en el momento</h3>
    </div>
    <Footer_Abajo/>
</>
    )
}

export default lacteos;