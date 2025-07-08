import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import banano from '../imagenes/banano.jpg';
import Fresas from '../imagenes/Fresas.jpg';
import logo from '../Imagenes/logo.jpg';
import Pinea from '../imagenes/Pinea.jpg';
import './carro.css';

function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const [quantities, setQuantities] = useState({
        "Piña Golden Premium": 1,
        "Banano Orgánico": 1,
        "Fresas Frescas": 1
    });

    const [selectedProducts, setSelectedProducts] = useState({
        "Piña Golden Premium": false,
        "Banano Orgánico": false,
        "Fresas Frescas": false
    });

    const toggleProductSelection = (nombre) => {
        setSelectedProducts({
            ...selectedProducts,
            [nombre]: !selectedProducts[nombre]
        });
    };

    const agregarAlCarrito = (nombre, precio) => {
        const cantidad = quantities[nombre] || 1;
        const productoExistente = carrito.find(item => item.nombre === nombre);
        
        if (productoExistente) {
            setCarrito(carrito.map(item =>
                item.nombre === nombre 
                    ? {...item, cantidad: item.cantidad + cantidad} 
                    : item
            ));
        } else {
            setCarrito([...carrito, { 
                nombre, 
                precio, 
                cantidad,
                imagen: nombre === "Piña Golden Premium" ? Pinea : 
                    nombre === "Banano Orgánico" ? banano : Fresas
            }]);
        }
    };

    const eliminarDelCarrito = (nombre) => {
        setCarrito(carrito.filter(item => item.nombre !== nombre));
        setSelectedProducts({
            ...selectedProducts,
            [nombre]: false
        });
    };

    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    const updateQuantity = (nombre, newQuantity) => {
        setQuantities({
            ...quantities,
            [nombre]: Math.max(1, Math.min(20, newQuantity))
        });
    };

    const agregarSeleccionados = () => {
        Object.keys(selectedProducts).forEach(nombre => {
            if (selectedProducts[nombre]) {
                const precio = nombre === "Piña Golden Premium" ? 2500 : 
                              nombre === "Banano Orgánico" ? 1800 : 3200;
                agregarAlCarrito(nombre, precio);
            }
        });
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
                <Container fluid>
                    <img src={logo} alt="Logo" className="nav-brand"/>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link className='h' href="#action1">Inicio</Nav.Link>
                            <Nav.Link href="#action2">Quienes Somos</Nav.Link>
                            <Link to="/Login"><Nav.Link href="#action3">Tiendas</Nav.Link></Link>
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
                    <Link className='link1' to="/Login"> Iniciar Sesión </Link>
                </Container>
            </Navbar>

            <div className="page-container">
                <div className="main-content">
                    <h1 className="titulo-principal">Productos Frescos</h1>
                    
                    <div className="productos-grid1">
                    
                        <div
                            className={`producto-card ${selectedProducts["Piña Golden Premium"] ? 'selected' : ''}`}
                            onClick={() => toggleProductSelection("Piña Golden Premium")}
                        >
                            <div className="producto-imagen-container">
                                <img src={Pinea} alt="Piña Golden Premium" className="producto-imagen" />
                            </div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Piña Golden Premium</h3>
                                <p className="producto-precio">$2.500/kg</p>
                                
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Piña Golden Premium", quantities["Piña Golden Premium"] - 1)
                                            }}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{quantities["Piña Golden Premium"]}</span>
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Piña Golden Premium", quantities["Piña Golden Premium"] + 1)
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div 
                            className={`producto-card ${selectedProducts["Banano Orgánico"] ? 'selected' : ''}`}
                            onClick={() => toggleProductSelection("Banano Orgánico")}
                        >
                            <div className="producto-imagen-container">
                                <img src={banano} alt="Banano Orgánico" className="producto-imagen" />
                            </div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Banano Orgánico</h3>
                                <p className="producto-precio">$1.800/kg</p>
                                
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Banano Orgánico", quantities["Banano Orgánico"] - 1)
                                            }}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{quantities["Banano Orgánico"]}</span>
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Banano Orgánico", quantities["Banano Orgánico"] + 1)
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div 
                            className={`producto-card ${selectedProducts["Fresas Frescas"] ? 'selected' : ''}`}
                            onClick={() => toggleProductSelection("Fresas Frescas")}
                        >
                            <div className="producto-imagen-container">
                                <img src={Fresas} alt="Fresas Frescas" className="producto-imagen" />
                            </div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Fresas Frescas</h3>
                                <p className="producto-precio">$3.200/kg</p>
                                
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Fresas Frescas", quantities["Fresas Frescas"] - 1)
                                            }}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{quantities["Fresas Frescas"]}</span>
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Fresas Frescas", quantities["Fresas Frescas"] + 1)
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="add-selected-container">
                        <button 
                            className="add-selected-btn"
                            onClick={agregarSeleccionados}
                            disabled={!Object.values(selectedProducts).some(val => val)}
                        >
                            Agregar seleccionados al carrito
                        </button>
                    </div>
                </div>

                <div className="cart-sidebar">
                    <h2 className="cart-title">Tu Carrito <span className="cart-count">({carrito.reduce((sum, item) => sum + item.cantidad, 0)})</span></h2>
                    <div className="cart-items">
                        {carrito.length === 0 ? (
                            <p className="empty-cart">Tu carrito está vacío</p>
                        ) : (
                            carrito.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
                                    <div className="cart-item-info">
                                        <h4>{item.nombre}</h4>
                                        <p>{item.cantidad} × ${item.precio}</p>
                                        <div className="cart-item-actions">
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => updateQuantity(item.nombre, quantities[item.nombre] - 1)}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{item.cantidad}</span>
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => updateQuantity(item.nombre, quantities[item.nombre] + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button 
                                            className="remove-item"
                                            onClick={() => eliminarDelCarrito(item.nombre)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                        
                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Envío:</span>
                            <span>$0</span>
                        </div>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${calcularTotal()}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>${calcularTotal()}</span>
                        </div>
                    </div>
                        
                    <Link to="/Pago"><button
                        className={`checkout-btn ${carrito.length === 0 ? 'disabled' : ''}`} 
                        disabled={carrito.length === 0}
                    >
                        Continuar compra
                    </button></Link>
                </div>
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

export default Carrito;