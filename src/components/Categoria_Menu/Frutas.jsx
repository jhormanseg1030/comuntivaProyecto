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
import Banano from '../imagenes/banano.jpg'
import Papaya from '../imagenes/Papaya.jpg'
import Pinea from '../imagenes/Pinea.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Frutas1 from '../imagenes/Frutas1.jpg'
import Frutas2 from '../imagenes/Frutas2.jpg'
import Mercados8 from '../imagenes/Mercados8.jpg';
import Sandias from '../imagenes/Sandias.jpg';
import Naranjas from '../imagenes/Naranjas.jpg';
import Manzanas from '../imagenes/Manzanas.jpg';
import './Frutas.css';
import Footer_Abajo from '../Vendedor/Footer_Abajo';
function Frutas() {
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
        
        <Container className='Unon'>
          <div className='rousito'>
      <Col xs={12} md={4}>
            <div className="producto">
              <div className="nuevo">Nuevo</div>
              <Image className="ImagProd" src={Papaya}/>
        <p className="descrip">Papaya 1 und</p>
        <p><span className="pre">$ 7.300</span></p>
      </div>
      </Col>
      <Col xs={12} md={4}>
            <div className="producto">
              <div className="nuevo">Nuevo</div>
              <Image className="ImagProd" src={Manzanas}/>
        <p className="descrip">Manzana 1 und"</p>
        <p><span className="pre">$ 7.300</span></p>
      </div>
      </Col>

      <Col xs={12} md={4}>
            <div className="producto">
              <div className="nuevo">Nuevo</div>
              <Image className="ImagProd" src={Sandias}/>
        <p className="descrip">Sandia 1 und</p>
        <p><span className="pre">$ 2.300</span></p>
      </div>
      </Col>
      </div>
      <div className='rousito'>
      <Col xs={12} md={4}>
            <div className="producto">
              <div className="popular">Popular</div>
              <div className="desct">-30% OFF</div>
              <Link to='/Productos'><Image className="ImagProd" src={Pinea}/></Link>
              <p className="descrip">Piña 1und</p>
        <p><span className="oferta">$ 3.654</span> <span className="Precio">$ 5.220</span></p>
      </div>
      </Col>

      <Col xs={12} md={4}>
            <div className="producto">
              <div className="nuevo">Nuevo</div>
              <Image className="ImagProd" src={Naranjas}/>
        <p className="descrip">Naranja 1 und</p>
        <p><span className="pre">$ 6.000</span></p>
      </div>
      </Col>

      <Col xs={12} md={4}>
            <div className="producto">
              <div className="popular">Popular</div>
              <Image className="ImagProd" src={Banano}/>
        <p className="descrip">Banano Criollo 1und</p>
        <p><span className="pre">$ 700</span></p>
      </div>
      
      </Col>
      </div>
      </Container>

    <Footer_Abajo/>
    </>
    )
}

export default Frutas;