import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import Carousel from 'react-bootstrap/Carousel';
import frijol from '../imagenes/frijol.jpeg';
import maiz from '../imagenes/maiz.jpg';
import cafe from '../imagenes/cafe.jpg';
import './Gran.css';
import '../../styles/header.css';
import Footer_Abajo from '../Vendedor/Footer_Abajo';
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
           <div className='mor'>
        <Dropdown drop="start">
        
        <Dropdown.Item href="/carrito"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16" >
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
</svg></Dropdown.Item>
    
</Dropdown>
 </div>

<Dropdown drop="start">
  
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
        
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="/Perfil">Perfil</Dropdown.Item>
        <Dropdown.Item href="/action2">Configuracion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Container>
    </Navbar>

<Carousel className='carusel'>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
        src={cafe}
        alt='First slider'
        />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
        src={maiz}
        alt='Second slider'
        />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
        src={frijol}
        alt='Third slider'
        />
        </Carousel.Item>
    </Carousel>
    <div className='Texto'>
        <h3>No hay granos disponibles en la lista</h3>
        </div>
        <Footer_Abajo/>
</>
    )
}

export default Grano;