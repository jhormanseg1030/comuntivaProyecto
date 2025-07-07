import './carro.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../Imagenes/logo.jpg';
import { useState } from 'react';
import Pinea from '../imagenes/Pinea.jpg';

function Carrito() {
    const [cart, setCart] = useState({
        items: [],
        total: 0
    });

    const [quantity, setQuantity] = useState(1);
    const productPrice = 2500;

    const handleQuantityChange = (e) => {
        const newQuantity = Math.max(1, Math.min(20, Number(e.target.value) || 1));
        setQuantity(newQuantity);
        
        if (cart.items.length > 0) {
            setCart({
                items: [{
                    ...cart.items[0],
                    quantity: newQuantity
                }],
                total: productPrice * newQuantity
            });
        }
    };

    const toggleCartItem = () => {
        if (cart.items.length > 0) {
            setCart({
                items: [],
                total: 0
            });
        } else {
            const newItem = {
                id: 1,
                name: "Piña Golden Premium",
                price: productPrice,
                quantity: quantity,
                image: Pinea
            };
            
            setCart({
                items: [newItem],
                total: productPrice * quantity
            });
        }
    };

    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
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
                    <h2>Productos Frescos</h2>
                    
                    <div className="product-item">
                        <img src={Pinea} alt="Piña fresca" className="product-image" />
                        
                        <div className="product-content">
                            <div className="product-tag">Fresco</div>
                            <h3 className="product-title">Piña Golden Premium</h3>
                            
                            <div className="product-price-container">
                                <span className="product-price">$2.500/kg</span>
                            </div>
                            
                            <div className="product-info">
                                <div className="product-shipping">Disponible: 20 unidades</div>
                                <div className="product-seller">Proveedor: Finca Los Dulces Frutos</div>
                            </div>
                            
                            <div className="product-selection">
                                <Form.Check 
                                    type="checkbox"
                                    label="Agregar al carrito"
                                    checked={cart.items.length > 0}
                                    onChange={toggleCartItem}
                                />
                                <Form.Control
                                    type="number"
                                    min="1"
                                    max="20"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    className="quantity-input mt-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`cart-container ${cart.items.length > 0 ? 'cart-with-items' : ''}`}>
                    <h2 className="cart-title">Tu Carrito</h2>
                    <div className="cart-items">
                        {cart.items.length > 0 ? (
                            cart.items.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-item-details">
                                        <h4>{item.name}</h4>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio unitario: ${item.price}</p>
                                        <p>Subtotal: ${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-cart-message">
                                <p>Tu carrito está vacío</p>
                            </div>
                        )}
                    </div>
                    
                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Envío:</span>
                            <span>$0</span>
                        </div>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>${subtotal}</span>
                        </div>
                        <button 
                            className={`checkout-button ${cart.items.length === 0 ? 'disabled' : ''}`} 
                            disabled={cart.items.length === 0}
                        >
                            Continuar compra
                        </button>
                    </div>
                    
                    <div className="info-sections">
                        <div className="info-section">
                            <h3 className="info-section-title">Entrega garantizada</h3>
                            <p className="info-section-text">
                                Productos frescos entregados en máximo 24 horas
                            </p>
                        </div>
                        <div className="info-section">
                            <h3 className="info-section-title">Métodos de pago</h3>
                            <p className="info-section-text">
                                Próximamente disponibles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carrito;