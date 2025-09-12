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
import Footer_Abajo from '../Vendedor/Footer_Abajo';

function HomeCli() {
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
                <Link to="Frutas"><NavDropdown.Item href="#action6">frutas</NavDropdown.Item></Link>
                <Link to="Verduras"><NavDropdown.Item href="#action7">verduras</NavDropdown.Item></Link>
                <Link to="Lacteos"><NavDropdown.Item href="#action8">lacteos</NavDropdown.Item></Link>
                <Link to="Papa"><NavDropdown.Item href="#action9">papa</NavDropdown.Item></Link>
                <Link to="Grano"><NavDropdown.Item href="#action10">granos</NavDropdown.Item></Link>
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
          <img className='d-block w-100 carousel-img-full'
          src={Frutas1}
          alt='First slider'
          />
          
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
      <Link to='/TiendaDonJuan'><Card.Img variant="top" src={Mercados1} /></Link>
        <Card.Body>
          <Card.Title>Sucursal Sur</Card.Title>
          <Card.Text>
          Ubicada en el corazón del sur bogotano, esta sucursal refleja la calidez y la tradición de una zona llena de historia y comunidad. 
          Aquí encontrarás productos frescos y accesibles, ideales para las familias que buscan calidad sin complicaciones.          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <Link to='/FincaBendicion'><Card.Img variant="top" src={Mercados2}  /></Link>
        <Card.Body>
          <Card.Title>Sucursal Norte</Card.Title>
          <Card.Text>
          En la vibrante y sofisticada zona norte, nuestra sucursal ofrece productos que reflejan la diversidad y el dinamismo de esta región.
          Desde ingredientes campesinos hasta opciones exclusivas, es el lugar perfecto para quienes valoran sabor y calidad.          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <Link to='/CosechasValle'><Card.Img variant= "top" src={Mercados3}/></Link>
        <Card.Body>
          <Card.Title>Sucursal Zona Centro </Card.Title>
          <Card.Text>
        En el centro histórico y cultural de la ciudad, esta sucursal combina tradición y modernidad.
        Ofrecemos productos cultivados con esmero, que mantienen viva la conexión con nuestras raíces y con la naturaleza que rodea la capital.          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
      <Link to='/VerdurasDonaRosa'><Card.Img variant= "top" src={Mercados4} /></Link>
        <Card.Body>
          <Card.Title>Sucursal Zona Occidente y Suroccidente</Card.Title>
          <Card.Text>
          Situada en una zona industrial y en crecimiento, esta sucursal se destaca por su variedad y frescura.
          La tierra fértil y el esfuerzo de su gente se reflejan en cada fruta y vegetal que llega hasta aquí, listos para ser parte de tu mesa.          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <Footer_Abajo/>
    </>
  );
}

export default HomeCli;



