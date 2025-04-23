import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Imagenes/WhatsApp Image 2025-04-02 at 4.19.24 PM.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import Frutas1 from '../imagenes/Frutas1.jpg'
import Frutas2 from '../imagenes/Frutas2.jpg'
import Frutas3 from '../imagenes/Frutas3.jpeg'
import Mercados1 from '../imagenes/Mercados1.jpg'
import Mercados2 from '../imagenes/Mercados2.jpg'
import Mercados3 from '../imagenes/Mercados3.jpg'
import Mercados4 from '../imagenes/Mercados4.jpg'
import Mercados5 from '../imagenes/Mercados5.jpg'
import Mercados6 from '../imagenes/Mercados6.jpg'
import Mercados7 from '../imagenes/Mercados7.jpg'
import Mercados8 from '../imagenes/Mercados8.jpg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import './SegPrinci.css';
import { Link } from 'react-router-dom';
function Segprinci() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src={logo} alt="Logo" className="nav-brand"/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Quienes Somos</Nav.Link>
              <Nav.Link href="#action3">Tiendas</Nav.Link>
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
          <div className='contenedor_botones'>
     <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="33" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16" >
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
</svg>
</div>
<div>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Configuracion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
<div className="dropdown-menu">
  <a className="dropdown-item" href="#">Action</a>
  <a className="dropdown-item" href="#">Another action</a>
  <a className="dropdown-item" href="#">Something else here</a>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="#">Separated link</a>
</div>
</div>
</div>
</Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className='titulo'>
        <h2>Bienvenidos a comuctiva</h2>
      </div>

      <Carousel className='carousel-custom-width'>
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
          src={Frutas3}
          alt='Third slider'
          />
          <Carousel.Caption>
            <h3>Third slider</h3>
            <p>Solo Leveling, anime del protagonista sung jinwoo, tambien conocido monarca de las sombras</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <CardGroup className='confi'>
      <Card>
      <Link to='/TiendaDonJuan'><Card.Img variant="top" src={Mercados1} /></Link>
        <Card.Body>
          <Card.Title>Tienda de don juan</Card.Title>
          <Card.Text>
            bienvenido a mi tienda, donde encontraras los mejores productos del mercado, con buenos precios, y calidad en su maximo explendor, ven y mira mi tienda
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <Link to='/FincaBendicion'><Card.Img variant="top" src={Mercados2}  /></Link>
        <Card.Body>
          <Card.Title>Finca La Bendición</Card.Title>
          <Card.Text>
          Desde las montañas de Antioquia, traemos plátanos, yucas y aguacates cosechados al ritmo del sol. ¡Sabor campesino en cada bocado!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <Link to='/CosechasValle'><Card.Img variant= "top" src={Mercados3}/></Link>
        <Card.Body>
          <Card.Title>Cosechas del Valle</Card.Title>
          <Card.Text>
          Tomates, cebollas y pimientos rojos como el atardecer. Cultivados sin químicos, regados con agua pura de la cordillera.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <Link to='/VerdurasDonaRosa'><Card.Img variant= "top" src={Mercados4} /></Link>
        <Card.Body>
          <Card.Title>Verduras Doña Rosa</Card.Title>
          <Card.Text>
          Mangos jugosos, piñas dulces y papayas gigantes. Nuestra tierra fértil nos regala lo mejor. ¡Prueba la diferencia!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>


    <CardGroup className='confi'>  
    <Card>
        <Card.Img variant= "top" src={Mercados5} />
        <Card.Body>
          <Card.Title>Frutas Frescas El Campesino</Card.Title>
          <Card.Text>
          Lechugas crujientes, zanahorias dulces y espinacas tiernas. Doña Rosa las cosecha a mano, como lo hizo por 40 años.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant= "top" src={Mercados6} />
        <Card.Body>
          <Card.Title>Huerta Orgánica Los Andes</Card.Title>
          <Card.Text>
          Todo 100% orgánico: brócoli, coliflor y remolacha. Sin pesticidas, solo abono natural. ¡Salud que se ve y se siente!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant= "top" src={Mercados7} />
        <Card.Body>
          <Card.Title>Productos Don Lucho</Card.Title>
          <Card.Text>
          Plátano, ñame y guayabas de mi parcela familiar. Trabajada con mis propias manos. ¡Calidad de la buena!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant= "top" src={Mercados8} />
        <Card.Body>
          <Card.Title>Frutas de Altura</Card.Title>
          <Card.Text>
          Fresas, moras y uvas cultivadas en clima frío. Dulces como el esfuerzo de los campesinos que las siembran.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>

    <div className='Container'>
      <Link className='link' to="/Vende"> Registra tu tienda</Link>
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
}

export default Segprinci;