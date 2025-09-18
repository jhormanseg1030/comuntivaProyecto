import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Arandanos from '../imagenes/Arandanos.jpeg';
import Banano from '../imagenes/banano.jpg';
import Bultopapa from '../imagenes/bulto-papa.jpg';
import Camp from '../imagenes/camp.jpg';
import Camp2 from '../imagenes/camp2.webp';
import logo from '../imagenes/DonJuan.jpg';
import Frutas from '../Imagenes/Fruits.jpeg';
import Frutas3 from '../Imagenes/Frutas3.jpeg';
import papa from '../imagenes/papa.jpeg';
import Papaya from '../imagenes/Papaya.jpg';
import Pinea from '../imagenes/Pinea.jpg';
import Productos from '../imagenes/verd.png';
import Zanahoria from '../Imagenes/zanahoria.jpg';
import './Estilos.css';
import ModalProduc from './ModalProduc';
import Footer_Abajo from '../Vendedor/Footer_Abajo';


function HomeTienda() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img src={logo} alt="Logo" className="nav-brand"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action5">
              <h4>Sucursal Sur</h4>
              </Nav.Link>
              </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></Button>
          </Form>


          <div className='contenedor_bot'>
            <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="cart" viewBox="0 0 16 16" >
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
</svg>
</div>


<div>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
</div>
</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        <Carousel className='carousel-custom-width'>
            <Carousel.Item>
              <img className='d-block w-100 carousel-img-full'
              src={Frutas3}
              alt='First slider'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100 carousel-img-full'
              src={Productos}
              alt='Second slider'
              />
            </Carousel.Item>
            <Carousel.Item>
            <img className='d-block w-100 carousel-img-full'
              src={Frutas}
              alt='Third slider'
              />
            </Carousel.Item>
          </Carousel>


          <Container className='layers'>
          <Row>
        <Col className='gr1'>
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>Sucursal</h5>
        <h6>Ubicada en el corazón del sur bogotano, esta sucursal refleja la calidez y la tradición de una zona llena de historia y comunidad. 
          Aquí encontrarás productos frescos y accesibles, ideales para las familias que buscan calidad sin complicaciones.</h6>
        </Col>


        <Col className='gr2'>
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
</svg>Calidad de Productos</h5>
        <h6>Productos frescos, 100% naturales y sin químicos, cosechados con técnicas sostenibles.
        Del campo directo a tu hogar, con sabor y calidad.</h6>
        </Col>


        <Col className='gr3'>
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-info-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>Contactanos</h5>
        <h6>+57 311 456 7890 | sucursalSur@campo.co</h6>
        <h6>Bogotá, Cundinamarca | IG: @comuctiva</h6>
        </Col>
      </Row>
    </Container>
    <hr className="hrHome"/>

    <Container className='img4'>
      <Row>
          <Col xs={12} md={4}>
          <Image className='imag1' src={papa} rounded/>
        </Col>
        <Col xs={12} md={4}>
          <Image className='imag1' src={Camp} rounded />
        </Col>
        <Col xs={12} md={4}>
          <Image className='imag1' src={Camp2} rounded/>
        </Col>
        </Row>
        </Container>
        <hr />
        <h4 className='textHome'>Recién Llegados</h4>

          <Container>
          <Row>
            <Col xs={12} md={4}>
            <div className="producto-card">
              <div className="nuevo">Nuevo</div>
              <div className="desct">-40% OFF</div>
              <div className="btnCarro">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="VenCar" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
</div>
              <Image className="ImagProd" src={Arandanos}/>
        <p className="descrip">Arandanos</p>
        <p><span className="oferta">$ 6.000</span> <span className="Precio">$ 10.000</span></p>
      </div>
      </Col>

      <Col xs={12} md={4}>
            <div className="producto-card">
              <div className="nuevo">Nuevo</div>
              <div className="btnCarro">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="VenCar" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
</div>
              <Image className="ImagProd" src={Zanahoria}/>
        <p className="descrip">Zanahoria 1000 gr</p>
        <p><span className="pre">$ 2.400</span></p>
      </div>
      </Col>

      <Col xs={12} md={4}>
            <div className="producto-card">
              <div className="nuevo">Nuevo</div>
              <div className="btnCarro">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="VenCar" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
</div>
              <Image className="ImagProd" src={Papaya}/>
        <p className="descrip">Papaya 1 und</p>
        <p><span className="pre">$ 7.300</span></p>
      </div>
      </Col>
      </Row>
      </Container>
      

      <hr className="hrHome"/>
      <h4 className='textHome'>Productos Destacados</h4>
      <Container>
          <Row>
            <Col xs={12} md={4}>
            <div className="producto-card">
              <div className="popular">Popular</div>
              <div className="agotado">Agotado</div>
              <div className="btnCarro">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="VenCar" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
</div>
              <Image className="ImagProd" src={Bultopapa}/>
        <p className="descrip">Papa Pastusa</p>
        <p><span className="pre">$ 30.000</span></p>
      </div>
      </Col>

      <Col xs={12} md={4}>
            <div className="producto-card">
              <div className="popular">Popular</div>
              <div className="desct">-30% OFF</div>
              <div className="btnCarro">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="VenCar" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
</div>
<div className ='btnCarro'>
<Button className= "btModal" variant="link" onClick={handleShow}> </Button>
</div>
<Link to='/Productos'><Image className="ImagProd" src={Pinea}/></Link>
              <p className="descrip">Piña 1und</p>
        <p><span className="oferta">$ 3.654</span> <span className="Precio">$ 5.220</span></p>
      </div>
      </Col>

      <Col xs={12} md={4}>
            <div className="producto-card">
              <div className="popular">Popular</div>
              <div className="btnCarro">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="VenCar" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
</div>
              <Image className="ImagProd" src={Banano}/>
        <p className="descrip">Banano Criollo 1und</p>
        <p><span className="pre">$ 700</span></p>
      </div>
      </Col>
      </Row>
      </Container>
      
    <Footer_Abajo/>

            <ModalProduc show={show} handleClose={handleClose} ></ModalProduc>

    </>
    );
}


export default HomeTienda;