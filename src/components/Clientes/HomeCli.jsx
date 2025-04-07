import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../imagenes/WhatsApp Image 2025-04-02 at 4.19.24 PM.jpeg';

function HomeCli() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       <img src={logo} alt="Logo" className="nav-brand"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Quienes somos</Nav.Link>
            <Nav.Link href="#action3">Tiendas</Nav.Link>
            <Nav.Link href="#action4">Caracteristicas</Nav.Link>
            <Nav.Link href="#action5">Ayuda</Nav.Link>
            <NavDropdown title="Categoria" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action6">...</NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                ...
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">
                ...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default HomeCli;
