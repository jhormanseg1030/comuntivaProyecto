import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import Promocion1 from '../imagenes/Promocion1.png';
import apoya from '../imagenes/apoya.jpeg';
import unidos from '../imagenes/unidos.jpeg';
import LisProduc from '../Productos/LisProduc';
import './Inicio_Pag.css';
import Footer_Abajo from '../Vendedor/Footer_Abajo';

function Inicio_Pag ()  {


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src={logo} alt="Logo" className="nav-brand"/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className='h' href="/">Inicio</Nav.Link>
              <Nav.Link href="/Quienes somos">Quienes Somos</Nav.Link>
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

        <Carousel className='carousel-custom-width'>
        <Carousel.Item>
          <img className='d-block '
          src={Promocion1}
          alt='First slider'
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block'
          src={apoya}
          alt='Second slider'
          />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block'
          src={unidos}
          alt='Third slider'
          />
        </Carousel.Item>
      </Carousel>

    <LisProduc/>
      
      <Footer_Abajo/>
    </>
  );
};

export default Inicio_Pag;