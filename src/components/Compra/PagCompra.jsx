import Container from 'react-bootstrap/Container';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Imagenes/WhatsApp Image 2025-04-02 at 4.19.24 PM.jpeg';
function PagCompra() {
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
                <NavDropdown.Item href="#action6">frutas</NavDropdown.Item>
                <NavDropdown.Item href="#action7">verduras</NavDropdown.Item>
                <NavDropdown.Item href="#action8">lacteos</NavDropdown.Item>
                <NavDropdown.Item href="#action9">papa</NavDropdown.Item>
                <NavDropdown.Item href="#action10">granos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
          <div className='contenedor_botones'>
    <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16" >
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
</svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
<div className="dropdown-menu">
  <a className="dropdown-item" href="#">Action</a>
  <a className="dropdown-item" href="#">Another action</a>
  <a className="dropdown-item" href="#">Something else here</a>
  <div className="dropdown-divider"></div>
  <a className="dropdown-item" href="#">Separated link</a>
</div>
</div>
</div>
        </Container>
      </Navbar>
      
    </>
    )
}

export default PagCompra;
