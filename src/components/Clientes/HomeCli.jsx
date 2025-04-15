import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Imagenes/WhatsApp Image 2025-04-02 at 4.19.24 PM.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import Frutas from '../imagenes/Frutas.jpg'
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
import './HomeCliente.css';
function HomeCli() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src={logo} alt="Logo" className="nav-brand" style={{ width: '50px', marginRight: '10px' }} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='titulo'>
        <h2>Bienvenidos a comuctiva</h2>
      </div>

      <Carousel className='carousel-custom-width'>
        <Carousel.Item>
          <img className='d-block w-100 carousel-img-full'
          src={Frutas}
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
        <Card.Img className='configuracion' variant="top" src={Mercados1}/>
        <Card.Body>
          <Card.Title>Tienda de don juan</Card.Title>
          <Card.Text>
            bienvenido a mi tienda, donde encontraras los mejores productos del mercado, con buenos precios, y calidad en su maximo explendor, ven y mira mi tienda
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={Mercados2}  />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant= "top" src={Mercados3}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant= "top" src={Mercados4} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>


    <CardGroup className='confi'>  
    <Card>
        <Card.Img variant= "top" src={Mercados5} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant= "top" src={Mercados6} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant= "top" src={Mercados7} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant= "top" src={Mercados8} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>

    <div className='boton'>
    <button type='button' className='btn btn-info'> Registra tu empresa</button>
    </div>
    
    </>
  );
}

export default HomeCli;

