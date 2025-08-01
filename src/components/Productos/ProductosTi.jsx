import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import logo from '../imagenes/DonJuan.jpg';
import ImgP from '../imagenes/ImgP.jfif';
import ImgP2 from '../imagenes/ImgP2.jpg';
import ImgP3 from '../imagenes/ImgP3.webp';
import Pinea from '../imagenes/Pinea.jpg';
import './Productos.css';

function ProductosTi() {
    return(
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <img src={logo} alt="Logo" className="nav-brand"/>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0"  navbarScroll>
                    <Nav.Link href="#action5">
                        <h4>Don Juan</h4>
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
      
      <Container className='Img-Prod'>
      <Row className='w-100'>
        <Col xs={2} className="Mini-Imag">
          <Image className='Imagen mb-3' src={ImgP} rounded />
          <Image className='Imagen mb-3' src={ImgP2} rounded />
          <Image className='Imagen mb-3' src={ImgP3} rounded />
          <Image className='Imagen mb-3' src={Pinea} rounded />
        </Col>

        <Col xs={10} md={6} className="text-center">
          <Image className='Img-Big' src={Pinea} rounded />
          <div className='botones'>
            <Link to="/carrito"><Button variant="success" className='Pri-boton'>Añadir al carro</Button></Link>
            <Link to= "/Pago"><Button variant="dark" className='Seg-boton'>Comprar ahora</Button></Link>
          </div>
        </Col>

        <Col xs={4} className='descrip'>
        <h4>Piña 1und</h4>
        <Link to='/TiendaDonJuan'>Volver a Tienda</Link>
        <h5>4.0<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
</h5>
<div className="desct-pro"><h5>-30% OFF</h5></div>
<div><span className="ofer">$ 3.654</span> <span className="Prec">$ 5.220</span></div>
<h4>Pago de envío/Gratis</h4>
<hr />
<h5>Deliciosa piña proveniente del Valle del Cauca, 100% Colombiana. Perfecta para tus jugos, ensaladas y postres.</h5>
<hr />
<h5>Esta fruta es cosechada a mano en su punto exacto de maduración, lo que garantiza su sabor intenso, su textura firme y su frescura natural.

La piña de Don Juan es 100% orgánica, libre de químicos y fertilizantes artificiales. Se cultiva de forma sostenible, respetando los ciclos naturales de la tierra y cuidando el medio ambiente.
Ideal para jugos, ensaladas, postres o para disfrutar sola.</h5>
        </Col>
      </Row>
    </Container>
    <hr />
    
    <h5 className='Detalles'>Detalles del Producto</h5>
    <div className='Det'>
    <div className='Ref'>
      <h5 className='title'>Referencia</h5>
      <h6>SIN REF</h6>
    </div>

    <div className='Ref'>
      <h5 className='title'>Tipo de producto</h5>
      <h6>Fruta nacional</h6>
    </div>

    <div className='Ref'>
      <h5 className='title'>Número de piezas</h5>
      <h6>1</h6>
    </div>
    </div>
    <footer className="footer">
                    <div className="footer-content">
                        <img src={logo} alt="Logotipo" className="footer-logo" />
                        <p>© 2025 Don Juan. Todos los derechos reservados.</p>
                        <div className="footer-links">
                            <a href="#!" className="footer-link">Política de Privacidad</a>
                            <span>|</span>
                            <a href="#!" className="footer-link">Términos de Servicio</a>
                        </div>
                    </div>
                </footer>
    </>
    )
}

export default ProductosTi;