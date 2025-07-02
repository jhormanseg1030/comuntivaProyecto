import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Frutas1 from '../imagenes/Frutas1.jpg';
import Frutas2 from '../imagenes/Frutas2.jpg';
import Frutas3 from '../imagenes/Frutas3.jpeg';
import logo from '../Imagenes/logo.jpg';
import Mercados1 from '../imagenes/Mercados1.jpg';
import Mercados2 from '../imagenes/Mercados2.jpg';
import Mercados3 from '../imagenes/Mercados3.jpg';
import Mercados4 from '../imagenes/Mercados4.jpg';
import Mercados5 from '../imagenes/Mercados5.jpg';
import Mercados6 from '../imagenes/Mercados6.jpg';
import Mercados7 from '../imagenes/Mercados7.jpg';
import Mercados8 from '../imagenes/Mercados8.jpg';
import './HomeCliente.css';
function HomeCli() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src={logo} alt="Logo" className="nav-brand"/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className='h' href="#action1">Inicio</Nav.Link>

              <Nav.Link href="/Quienes somos">Quienes Somos</Nav.Link>
              <Link to = "/HomeCli"><Nav.Link href="#action3">Tiendas</Nav.Link></Link>
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
      
      <div className='titulo'>
        <h2>Bienvenidos a comuctiva</h2>
      </div>

      <Carousel className='carousel-custom-width'>
        <Carousel.Item>
          <img className='d-block w-100 carousel-img-full' src={Frutas1} alt='First slider'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 carousel-img-full'
          src={Frutas2}
          alt='Second slider'
          />
        </Carousel.Item>
        <Carousel.Item>
        <img className='d-block w-100 carousel-img-full'
          src={Frutas3}
          alt='Third slider'
          />
        </Carousel.Item>
      </Carousel>
      
      <CardGroup className='confi'>
      <Card>
        <Link to='/TiendaDonJuan'><Card.Img variant= "top" src={Mercados1} /></Link>
        <Card.Body>
          <Card.Title>Don Juan</Card.Title>
          <Card.Text>
            bienvenido a mi tienda, donde encontraras los mejores productos del mercado, con buenos precios, y calidad en su maximo explendor, ven y mira mi tienda
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Link to='/FincaBendicion'><Card.Img variant= "top" src={Mercados2}  /></Link>
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
        <Link to='/FrutasElCampesino'><Card.Img variant= "top" src={Mercados5} /></Link>
        <Card.Body>
          <Card.Title>Frutas Frescas El Campesino</Card.Title>
          <Card.Text>
          Lechugas crujientes, zanahorias dulces y espinacas tiernas. Doña Rosa las cosecha a mano, como lo hizo por 40 años.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Link to='/HuertaOrganica'><Card.Img variant= "top" src={Mercados6} /></Link>
        <Card.Body>
          <Card.Title>Huerta Orgánica Los Andes</Card.Title>
          <Card.Text>
          Todo 100% orgánico: brócoli, coliflor y remolacha. Sin pesticidas, solo abono natural. ¡Salud que se ve y se siente!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Link to='/ProductosDonLucho'><Card.Img variant= "top" src={Mercados7} /></Link>
        <Card.Body>
          <Card.Title>Productos Don Lucho</Card.Title>
          <Card.Text>
          Plátano, ñame y guayabas de mi parcela familiar. Trabajada con mis propias manos. ¡Calidad de la buena!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Link to='/FrutasAltura'><Card.Img variant= "top" src={Mercados8} /></Link>
        <Card.Body>
          <Card.Title>Frutas de Altura</Card.Title>
          <Card.Text>
          Fresas, moras y uvas cultivadas en clima frío. Dulces como el esfuerzo de los campesinos que las siembran.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>

    <div className='Container'>
      <Link className='link'> Registra tu tienda</Link>
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

export default HomeCli;