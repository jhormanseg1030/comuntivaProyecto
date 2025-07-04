import './quienSom.css';
import logo from '../Imagenes/logo.jpg';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuienesSomos() {
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
              <Link to = "/"><Nav.Link href="#action3">Tiendas</Nav.Link></Link>
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
    <div className='img1'>
    <div className="div2">
      <div className="div0">
        <h1>Quiénes Somos</h1>
        <p>
          En <strong>COMUCTIVA</strong> trabajamos para conectar directamente a campesinos y consumidores finales.
        Queremos eliminar intermediarios y promover productos sostenibles, auténticos y de calidad, fortaleciendo la economía 
        local y generando oportunidades para las comunidades rurales.
        </p>
      </div>

      <section className="section">
        <h2>Nuestro Propósito</h2>
        <p>
        Impulsar el desarrollo rural y el comercio justo, brindando una plataforma que visibiliza el trabajo de los campesinos
        y acerca sus productos frescos y locales a más personas de forma transparente y directa.
        </p>
      </section>

      <section className="section qs-grid">
        <div className="qs-card">
          <h3>Misión</h3>
          <p>
            Facilitar un canal digital seguro, accesible y transparente que fortalezca la economía de los campesinos,
            permitiéndoles ofrecer sus productos de manera justa y directa.
          </p>
        </div>
        <div className="qs-card">
          <h3>Visión</h3>
          <p>
            Desarrollar una solución digital funcional y accesible que facilite la comercialización directa de productos campesinos,
            fomentando el comercio justo y sirviendo como ejemplo de innovación y compromiso social desde la formación en el SENA.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Valores</h2>
        <ul className="lista">
          <li>Transparencia</li>
          <li>Comercio Justo</li>
          <li>Sostenibilidad</li>
          <li>Inclusión</li>
          <li>Calidad</li>
          <li>Crompromiso</li>
        </ul>
      </section>

      
       <section className="section">
        <h2>Problemática</h2>
        <p>
        Muchos campesinos enfrentan barreras tecnológicas, baja visibilidad y dificultad para acceder a mercados justos.
        Esto limita sus ingresos, perpetúa desigualdades económicas y afecta el crecimiento de sus comunidades.
        </p>
        </section>
        
        <section className="section">
        <h2>Justificación</h2>
        <p>
        COMUCTIVA nace como respuesta a la falta de transparencia y equidad que viven los campesinos en el mercado actual.
        Buscamos ofrecerles un canal directo para mejorar sus ingresos, dignificar su trabajo y motivar a las nuevas generaciones a seguir cultivando la tierra.
        </p>
        </section>
        
    </div>
    </div>
    </>
  );
}

export default QuienesSomos;
