import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Zanahoria from '../Imagenes/zanahoria.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Mercados8 from '../imagenes/Mercados8.jpg';
import Tomates from '../imagenes/Tomates.jpg'
import Platanos from '../imagenes/Platanos.jpg'
import './Verdu.css';
import Footer_Abajo from '../Vendedor/Footer_Abajo';
function Verduras() {
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
          src={Mercados8}
          alt='First slider'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 carousel-img-full'
          src={Platanos}
          alt='Second slider'
          />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
          src={Tomates}
          alt='Third slider'
          />
        </Carousel.Item>
      </Carousel>
        
        <Container className='Unopro'>
             <Col xs={12} md={4}>
            <div className="producto-car">
              <div className="nuevo">Nuevo</div>
              <Image className="ImagPro" src={Zanahoria}/>
        <p className="descri">Zanahoria 1000 gr</p>
        <p><span className="pre">$ 2.400</span></p>
      </div>
      </Col>

          <Col xs={12} md={4}>
            <div className="producto-car">
              <div className="nuevo">Nuevo</div>
              <Image className="ImagPro" src={Tomates}/>
        <p className="descri">Tomates frescos libra</p>
        <p><span className="pre">$4.000</span></p>
      </div>
      </Col>
       <Col xs={12} md={4}>
            <div className="producto-car">
              <div className="nuevo">Nuevo</div>
              <Image className="ImagPro" src={Platanos}/>
        <p className="descri">Platanos Und</p>
        <p><span className="pre">$3.000</span></p>
      </div>
      </Col>
   
      </Container>
       
    <Footer_Abajo/>
    </>
    )
}

export default Verduras;