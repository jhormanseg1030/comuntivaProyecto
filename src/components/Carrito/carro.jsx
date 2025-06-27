import './carro.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';

function Carrito () {
    return(
        <>
              <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src={logo} alt="Logo" className="nav-brand"/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className='h' href="#action1">Inicio</Nav.Link>
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
          <Link className='link1' to= "/Login"> Iniciar Sesión</Link>
        </Container>
      </Navbar>

         <main className="cuerpo-carrito">
        {/* Sección de items */}
        <section className="seccion-items">
          <h2>Tu Carrito</h2>
          
          <div className="controles-carrito">
            <label>
              <input type="checkbox" />
              Seleccionar todo
            </label>
          </div>

         
          <div className="item-carrito">
            <input type="checkbox" />
            <div className="info-item">
              <h3>Nombre del producto</h3>
              <p>Variante/Color</p>
              <div className="precios">
                <span className="precio-actual">$XX.XX</span>
                <span className="precio-original">$XX.XX</span>
              </div>
              <p>Envío: $XX.XX</p>
              <p>Tienda: Nombre tienda</p>
            </div>
          </div>
        </section>

       
        <aside className="resumen-compra">
          <h3>Resumen</h3>
          <div className="total">
            <p>Total: $XXX.XX</p>
          </div>
          <button className="boton-pagar">Pagar</button>
          
          <div className="opciones-extra">
            <label>
              <input type="checkbox" />
              Opción de envío
            </label>
            <ul className="beneficios">
              <li>✔ Beneficio 1</li>
              <li>✔ Beneficio 2</li>
            </ul>
          </div>
        </aside>
      </main>
    </>
    )
}
export default Carrito