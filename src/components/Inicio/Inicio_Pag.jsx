import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Cebollas from '../imagenes/Cebollas.jpg';
import Fresas from '../imagenes/Fresas.jpg';
import logo from '../Imagenes/logo.jpg';
import Mangos from '../imagenes/Mangos.jpg';
import Manzanas from '../imagenes/Manzanas.jpg';
import Naranjas from '../imagenes/Naranjas.jpg';
import Papas from '../imagenes/Papas.jpg';
import Papayas from '../imagenes/Papayas.jpg';
import Pinea from '../imagenes/Pinea.jpg';
import Platanos from '../imagenes/Platanos.jpg';
import Promocion1 from '../imagenes/Promocion1.png';
import Promocion2 from '../imagenes/Promocion2.png';
import Promocion3 from '../imagenes/Promocion3.png';
import Sandias from '../imagenes/Sandias.jpg';
import Tomates from '../imagenes/Tomates.jpg';
import Zanahorias from '../imagenes/Zanahorias.jpg';
import './Inicio_Pag.css';

function Inicio_Pag ()  {
  const productos = [
    { id: 1, nombre: "Tomates Frescos", precio: "$4000/LB", imagen: Tomates },
    { id: 2, nombre: "Manzanas", precio: "$6100/lb", imagen: Manzanas },
    { id: 3, nombre: "Zanahorias", precio: "$1800/Lb", imagen: Zanahorias },
    { id: 4, nombre: "Plátanos", precio: "$3000/Uni", imagen: Platanos },
    { id: 5, nombre: "Papayas", precio: "$3600/Uni", imagen: Papayas },
    { id: 6, nombre: "Naranjas ", precio: "$2000/lb", imagen: Naranjas },
    { id: 7, nombre: "Cebollas ", precio: "$1500/lb", imagen: Cebollas},
    { id: 8, nombre: "Sandias ", precio: "$6500/Uni", imagen: Sandias,},
    { id: 9, nombre: "Papas ", precio: "$60000/Bulto", imagen: Papas},
    { id: 10, nombre: "Piña ", precio: "$3000/Uni", imagen: Pinea, ruta:"/Productos"},
    { id: 11, nombre: "Fresas ", precio: "$6000/lb", imagen: Fresas },
    { id: 12, nombre: "Mangos ", precio: "$3000/lb", imagen: Mangos},
    ];

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
              <Nav.Link href="/Tienda">Tiendas</Nav.Link>
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

          <Carousel className='carousel-custom-width'>
        <Carousel.Item>
          <img className='d-block w-100 carousel-img-full' src={Promocion1} alt='First slider'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 carousel-img-full'
          src={Promocion2}
          alt='Second slider'
          />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
          src={Promocion3}
          alt='Third slider'
          />
        </Carousel.Item>
      </Carousel>

      <div className="productos-grid">    
        <h2 className="titulo">Productos Campesinos</h2>
        <div className="grid-cont">
          {productos.map((producto) => (
            <div key={producto.id} className="productos">
                <Link to={producto.ruta || "#"}>
              <div className="imagen-cont">
                <img src={producto.imagen} alt={producto.nombre} />
              </div>
                </Link>
              <div className="texto-producto">
                <h3>{producto.nombre}</h3>
                <p className="precio">{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
          <div className="footer-content">
              <img src={logo} alt="Logotipo" className="footer-logo" />
              <p>© 2025 Comuctiva. Todos los derechos reservados.</p>
              <div className="footer-links">
                  <a href="#!" className="footer-link">Política de Privacidad</a>
                  <span>|</span>
                  <a href="#!" className="footer-link">Términos de Servicio</a>
              </div>
          </div>
      </footer>
    </>
  );
};

export default Inicio_Pag;