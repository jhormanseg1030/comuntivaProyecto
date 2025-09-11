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
import Arandanos from '../imagenes/Arandanos.jpeg';
import Mangos from '../imagenes/Mangos.jpg';
import './carro.css';

function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const [quantities, setQuantities] = useState({
        "Piña Golden Premium": 1,
        "Banano Orgánico": 1,
        "Fresas Frescas": 1,
        "Arándanos Premium": 1,
        "Mangos Maduros": 1
    });

    const [selectedProducts, setSelectedProducts] = useState({
        "Piña Golden Premium": false,
        "Banano Orgánico": false,
        "Fresas Frescas": false,
        "Arándanos Premium": false,
        "Mangos Maduros": false
    });

    const [cupon, setCupon] = useState('');
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);
    const [cuponValido, setCuponValido] = useState(false);

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
                    nombre === "Banano Orgánico" ? banano : 
                    nombre === "Fresas Frescas" ? Fresas :
                    nombre === "Arándanos Premium" ? Arandanos : Mangos
            }]);
        }
        
        setQuantities({
            ...quantities,
            [nombre]: 1
        });
    };

    const eliminarDelCarrito = (nombre) => {
        setCarrito(carrito.filter(item => item.nombre !== nombre));
        setSelectedProducts({
            ...selectedProducts,
            [nombre]: false
        });
    };

    const calcularSubtotal = () => {
        return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    const calcularTotal = () => {
        return calcularSubtotal() - descuentoAplicado;
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
                            nombre === "Banano Orgánico" ? 1800 : 
                            nombre === "Fresas Frescas" ? 3200 :
                            nombre === "Arándanos Premium" ? 4200 : 2800;
                agregarAlCarrito(nombre, precio);
            }
        });
    };

    const updateCartQuantity = (nombre, change) => {
        setCarrito(carrito.map(item =>
            item.nombre === nombre
                ? {...item, cantidad: Math.max(1, item.cantidad + change)}
                : item
        ));
    };

    const aplicarCupon = () => {
        
        const cuponesValidos = {
            'DESCUENTO10': 0.1, 
            'FRUTAS20': 0.2,    
            'VERANO15': 0.15    
        };
        
        if (cuponesValidos[cupon.toUpperCase()]) {
            const descuento = calcularSubtotal() * cuponesValidos[cupon.toUpperCase()];
            setDescuentoAplicado(descuento);
            setCuponValido(true);
        } else {
            setDescuentoAplicado(0);
            setCuponValido(false);
            alert('Cupón no válido');
        }
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
                    <h1 className="titulo-principal">El carrito de los productos frescos </h1>
                    
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
                                    <button 
                                        className="add-to-cart-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            agregarAlCarrito("Piña Golden Premium", 2500);
                                        }}
                                    >
                                        Agregar
                                    </button>
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
                                    <button 
                                        className="add-to-cart-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            agregarAlCarrito("Banano Orgánico", 1800);
                                        }}
                                    >
                                        Agregar
                                    </button>
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
                                    <button 
                                        className="add-to-cart-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            agregarAlCarrito("Fresas Frescas", 3200);
                                        }}
                                    >
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div 
                            className={`producto-card ${selectedProducts["Arándanos Premium"] ? 'selected' : ''}`}
                            onClick={() => toggleProductSelection("Arándanos Premium")}
                        >
                            <div className="producto-imagen-container">
                                <img src={Arandanos} alt="Arándanos Premium" className="producto-imagen" />
                            </div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Arándanos Premium</h3>
                                <p className="producto-precio">$4.200/kg</p>
                                
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Arándanos Premium", quantities["Arándanos Premium"] - 1)
                                            }}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{quantities["Arándanos Premium"]}</span>
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Arándanos Premium", quantities["Arándanos Premium"] + 1)
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button 
                                        className="add-to-cart-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            agregarAlCarrito("Arándanos Premium", 4200);
                                        }}
                                    >
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div 
                            className={`producto-card ${selectedProducts["Mangos Maduros"] ? 'selected' : ''}`}
                            onClick={() => toggleProductSelection("Mangos Maduros")}
                        >
                            <div className="producto-imagen-container">
                                <img src={Mangos} alt="Mangos Maduros" className="producto-imagen" />
                            </div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Mangos Maduros</h3>
                                <p className="producto-precio">$2.800/kg</p>
                                
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Mangos Maduros", quantities["Mangos Maduros"] - 1)
                                            }}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{quantities["Mangos Maduros"]}</span>
                                        <button 
                                            className="quantity-btn" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateQuantity("Mangos Maduros", quantities["Mangos Maduros"] + 1)
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button 
                                        className="add-to-cart-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            agregarAlCarrito("Mangos Maduros", 2800);
                                        }}
                                    >
                                        Agregar
                                    </button>
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

                <div className="exito-summary-container">
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
                                        <p>{item.cantidad} × ${item.precio.toLocaleString()}</p>
                                        <div className="cart-item-actions">
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => updateCartQuantity(item.nombre, -1)}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{item.cantidad}</span>
                                            
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => updateCartQuantity(item.nombre, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button 
                                            className="remove-item"
                                            onClick={() => eliminarDelCarrito(item.nombre)}
                                        >
                                            🗑️ Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="exito-coupon-section">
                        <h3 className="exito-section-title">Ingresar cupón de descuento</h3>
                        <div className="exito-coupon-input-group">
                            <input 
                                type="text" 
                                maxLength="40"
                                placeholder="Cupón de descuento" 
                                className="exito-coupon-input"
                                value={cupon}
                                onChange={(e) => setCupon(e.target.value)}
                            />
                            <button 
                                className="exito-coupon-btn"
                                onClick={aplicarCupon}
                                disabled={!cupon.trim()}
                            >
                                Aplicar
                            </button>
                        </div>
                    </div>

                    <div className="exito-invoice-section">
                        <p className="exito-invoice-text">
                            Recibe tu factura electrónica <span className="exito-invoice-link">ingresando aquí</span>
                        </p>
                    </div>

                    <div className="exito-summary-details">
                        <div className="exito-summary-row">
                            <span>Subtotal:</span>
                            <span>${calcularSubtotal().toLocaleString()}</span>
                        </div>
                        
                        {descuentoAplicado > 0 && (
                            <div className="exito-summary-row discount">
                                <span>Descuento en productos:</span>
                                <span>-${descuentoAplicado.toLocaleString()}</span>
                            </div>
                        )}
                        
                        <div className="exito-summary-row total">
                            <span>Total a pagar:</span>
                            <span className="exito-total-amount">${calcularTotal().toLocaleString()}</span>
                        </div>
                    </div>

                    <Link to="/Pago">
                        <button 
                            className={`custom-pay-button ${carrito.length === 0 ? 'disabled' : ''}`}
                            disabled={carrito.length === 0}
                        >
                            <div className="custom-pay-button__int">
                                <span className="custom-pay-button__span">Ir a pagar</span>
                            </div>
                        </button>
                    </Link>

                    <div className="exito-continue-shopping">
                        <button className="exito-continue-btn">
                            Seguir comprando
                        </button>
                    </div>
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