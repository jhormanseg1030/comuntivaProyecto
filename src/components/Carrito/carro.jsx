import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import banano from '../imagenes/banano.jpg';
import Fresas from '../imagenes/Fresas.jpg';
import logo from '../Imagenes/logo.jpg';
import Pinea from '../imagenes/Pinea.jpg';
import Arandanos from '../imagenes/Arandanos.jpeg';
import Mangos from '../imagenes/Mangos.jpg';
import './carro.css';
import '../../styles/header.css';

function Carrito() {
    // helper para leer carrito desde localStorage
    const getStoredCart = () => {
        try { return JSON.parse(localStorage.getItem('cart')) || []; }
        catch (e) { return []; }
    };

    const [carrito, setCarrito] = useState(getStoredCart);
    // cantidades para los cards de selección (productos fijos en la UI)
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

    // Persistir carrito en localStorage cada vez que cambia
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(carrito));
    }, [carrito]);

    // Escuchar eventos externos (ProductoDetalle u otra pestaña)
    useEffect(() => {
        const handler = () => setCarrito(getStoredCart());
        window.addEventListener('cart_updated', handler);
        window.addEventListener('storage', handler);
        return () => {
            window.removeEventListener('cart_updated', handler);
            window.removeEventListener('storage', handler);
        };
    }, []);

    const toggleProductSelection = (nombre) => {
        setSelectedProducts({
            ...selectedProducts,
            [nombre]: !selectedProducts[nombre]
        });
    };

    // helper para obtener key única por item (usa id_pro si existe)
    const getItemKey = (item) => {
        if (!item) return null;
        return item.id_pro ? `id_${item.id_pro}` : `name_${item.nombre}`;
    };

    // agregar un item (usado por cards fijos). También se sincroniza con localStorage y dispara evento.
    const agregarAlCarrito = (nombre, precio, extra = {}) => {
        // buscar por id_pro en extra, si no usar nombre
        const keyToMatch = extra.id_pro ? `id_${extra.id_pro}` : `name_${nombre}`;
        const idx = carrito.findIndex(it => getItemKey(it) === keyToMatch);

        const cantidadAgregar = quantities[nombre] || 1;

        if (idx !== -1) {
            const newCart = carrito.map((item, i) =>
                i === idx ? { ...item, cantidad: Math.min((item.cantidad || 0) + cantidadAgregar, extra.cantidad || 9999) } : item
            );
            setCarrito(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        } else {
            const imagen = extra.imagen || (
                nombre === "Piña Golden Premium" ? Pinea :
                nombre === "Banano Orgánico" ? banano :
                nombre === "Fresas Frescas" ? Fresas :
                nombre === "Arándanos Premium" ? Arandanos : Mangos
            );

            const newItem = {
                id_pro: extra.id_pro,
                nombre,
                precio,
                cantidad: cantidadAgregar,
                imagen,
            };
            const newCart = [...carrito, newItem];
            setCarrito(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        }

        // reset cantidad card
        setQuantities({
            ...quantities,
            [nombre]: 1
        });

        // notificar a otros listeners
        window.dispatchEvent(new Event('cart_updated'));
    };

    // Eliminar item por key (soporta id_pro y nombre)
    const eliminarDelCarrito = (keyLike) => {
        const newCart = carrito.filter(item => getItemKey(item) !== keyLike);
        setCarrito(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    // calcular subtotal y total
    const calcularSubtotal = () => {
        return carrito.reduce((total, item) => total + ((item.precio || 0) * (item.cantidad || 0)), 0);
    };

    const calcularTotal = () => {
        return Math.max(0, calcularSubtotal() - (descuentoAplicado || 0));
    };

    // actualizar control de cantidad en cards (no en carrito)
    const updateQuantity = (nombre, newQuantity) => {
        setQuantities({
            ...quantities,
            [nombre]: Math.max(1, Math.min(9999, newQuantity))
        });
    };

    // agregar todos los seleccionados (cards) al carrito
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

    // actualizar cantidad dentro del carrito (identifica por key)
    const updateCartQuantity = (keyLike, change) => {
        const newCart = carrito.map(item => {
            if (getItemKey(item) === keyLike) {
                const nueva = Math.max(1, (item.cantidad || 1) + change);
                return { ...item, cantidad: nueva };
            }
            return item;
        });
        setCarrito(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    // aplicar cupón
    const aplicarCupon = () => {
        const cuponesValidos = {
            'DESCUENTO10': 0.1,
            'FRUTAS20': 0.2,
            'VERANO15': 0.15
        };

        const factor = cuponesValidos[cupon.toUpperCase()];
        if (factor) {
            const descuento = calcularSubtotal() * factor;
            setDescuentoAplicado(Math.round(descuento));
            setCuponValido(true);
        } else {
            setDescuentoAplicado(0);
            setCuponValido(false);
            alert('Cupón no válido');
        }
    };

    // helper para render: obtiene key para cada item actual
    const keyForItem = (item) => getItemKey(item);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
                <Container fluid>
                    <img src={logo} alt="Logo" className="nav-brand"/>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link className='h' href="/">Inicio</Nav.Link>
                            <Nav.Link href="/Quienes somos">Quienes Somos</Nav.Link>
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
                    <Dropdown drop="start">
                        <Dropdown.Toggle variant="success" id="dropdown-basic" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Perfil">Perfil</Dropdown.Item>
                            <Dropdown.Item href="/action2">Configuracion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>

            <div className="page-container">
                <div className="main-content">
                    <h1 className="titulo-principal">El carrito de los productos frescos </h1>

                    <div className="productos-grid1">
                        {/* Cards fijos para selección rápida (puedes quitar si no los usas) */}
                        <div className={`producto-card ${selectedProducts["Piña Golden Premium"] ? 'selected' : ''}`} onClick={() => toggleProductSelection("Piña Golden Premium")}>
                            <div className="producto-imagen-container"><img src={Pinea} alt="Piña Golden Premium" className="producto-imagen" /></div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Piña Golden Premium</h3>
                                <p className="producto-precio">$2.500/kg</p>
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Piña Golden Premium", quantities["Piña Golden Premium"] - 1); }}>-</button>
                                        <span className="quantity">{quantities["Piña Golden Premium"]}</span>
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Piña Golden Premium", quantities["Piña Golden Premium"] + 1); }}>+</button>
                                    </div>
                                    <button className="add-to-cart-btn" onClick={(e)=>{ e.stopPropagation(); agregarAlCarrito("Piña Golden Premium", 2500); }}>Agregar</button>
                                </div>
                            </div>
                        </div>

                        {/* ...otros cards (Banano, Fresas, Arandanos, Mangos) similares... */}
                        <div className={`producto-card ${selectedProducts["Banano Orgánico"] ? 'selected' : ''}`} onClick={() => toggleProductSelection("Banano Orgánico")}>
                            <div className="producto-imagen-container"><img src={banano} alt="Banano Orgánico" className="producto-imagen" /></div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Banano Orgánico</h3>
                                <p className="producto-precio">$1.800/kg</p>
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Banano Orgánico", quantities["Banano Orgánico"] - 1); }}>-</button>
                                        <span className="quantity">{quantities["Banano Orgánico"]}</span>
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Banano Orgánico", quantities["Banano Orgánico"] + 1); }}>+</button>
                                    </div>
                                    <button className="add-to-cart-btn" onClick={(e)=>{ e.stopPropagation(); agregarAlCarrito("Banano Orgánico", 1800); }}>Agregar</button>
                                </div>
                            </div>
                        </div>

                        <div className={`producto-card ${selectedProducts["Fresas Frescas"] ? 'selected' : ''}`} onClick={() => toggleProductSelection("Fresas Frescas")}>
                            <div className="producto-imagen-container"><img src={Fresas} alt="Fresas Frescas" className="producto-imagen" /></div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Fresas Frescas</h3>
                                <p className="producto-precio">$3.200/kg</p>
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Fresas Frescas", quantities["Fresas Frescas"] - 1); }}>-</button>
                                        <span className="quantity">{quantities["Fresas Frescas"]}</span>
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Fresas Frescas", quantities["Fresas Frescas"] + 1); }}>+</button>
                                    </div>
                                    <button className="add-to-cart-btn" onClick={(e)=>{ e.stopPropagation(); agregarAlCarrito("Fresas Frescas", 3200); }}>Agregar</button>
                                </div>
                            </div>
                        </div>

                        <div className={`producto-card ${selectedProducts["Arándanos Premium"] ? 'selected' : ''}`} onClick={() => toggleProductSelection("Arándanos Premium")}>
                            <div className="producto-imagen-container"><img src={Arandanos} alt="Arándanos Premium" className="producto-imagen" /></div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Arándanos Premium</h3>
                                <p className="producto-precio">$4.200/kg</p>
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Arándanos Premium", quantities["Arándanos Premium"] - 1); }}>-</button>
                                        <span className="quantity">{quantities["Arándanos Premium"]}</span>
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Arándanos Premium", quantities["Arándanos Premium"] + 1); }}>+</button>
                                    </div>
                                    <button className="add-to-cart-btn" onClick={(e)=>{ e.stopPropagation(); agregarAlCarrito("Arándanos Premium", 4200); }}>Agregar</button>
                                </div>
                            </div>
                        </div>

                        <div className={`producto-card ${selectedProducts["Mangos Maduros"] ? 'selected' : ''}`} onClick={() => toggleProductSelection("Mangos Maduros")}>
                            <div className="producto-imagen-container"><img src={Mangos} alt="Mangos Maduros" className="producto-imagen" /></div>
                            <div className="producto-info">
                                <h3 className="producto-nombre">Mangos Maduros</h3>
                                <p className="producto-precio">$2.800/kg</p>
                                <div className="producto-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Mangos Maduros", quantities["Mangos Maduros"] - 1); }}>-</button>
                                        <span className="quantity">{quantities["Mangos Maduros"]}</span>
                                        <button className="quantity-btn" onClick={(e)=>{ e.stopPropagation(); updateQuantity("Mangos Maduros", quantities["Mangos Maduros"] + 1); }}>+</button>
                                    </div>
                                    <button className="add-to-cart-btn" onClick={(e)=>{ e.stopPropagation(); agregarAlCarrito("Mangos Maduros", 2800); }}>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="add-selected-container">
                        <button className="add-selected-btn" onClick={agregarSeleccionados} disabled={!Object.values(selectedProducts).some(v => v)}>Agregar seleccionados al carrito</button>
                    </div>
                </div>

                <div className="exito-summary-container">
                    <h2 className="cart-title">Tu Carrito <span className="cart-count">({carrito.reduce((sum, item) => sum + (item.cantidad || 0), 0)})</span></h2>

                    <div className="cart-items">
                        {carrito.length === 0 ? (
                            <p className="empty-cart">Tu carrito está vacío</p>
                        ) : (
                            carrito.map((item, index) => {
                                const key = keyForItem(item);
                                return (
                                    <div key={key || index} className="cart-item">
                                        <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
                                        <div className="cart-item-info">
                                            <h4>{item.nombre || `Producto ${item.id_pro || index}`}</h4>
                                            <p>{item.cantidad} × ${Number(item.precio || 0).toLocaleString()}</p>
                                            <div className="cart-item-actions">
                                                <button className="quantity-btn" onClick={() => updateCartQuantity(key, -1)}>-</button>
                                                <span className="quantity">{item.cantidad}</span>
                                                <button className="quantity-btn" onClick={() => updateCartQuantity(key, 1)}>+</button>
                                            </div>
                                            <button className="remove-item" onClick={() => eliminarDelCarrito(key)}>🗑️ Eliminar</button>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <div className="exito-coupon-section">
                        <h3 className="exito-section-title">Ingresar cupón de descuento</h3>
                        <div className="exito-coupon-input-group">
                            <input type="text" maxLength="40" placeholder="Cupón de descuento" className="exito-coupon-input" value={cupon} onChange={(e) => setCupon(e.target.value)} />
                            <button className="exito-coupon-btn" onClick={aplicarCupon} disabled={!cupon.trim()}>Aplicar</button>
                        </div>
                    </div>

                    <div className="exito-summary-details">
                        <div className="exito-summary-row"><span>Subtotal:</span><span>${calcularSubtotal().toLocaleString()}</span></div>
                        {descuentoAplicado > 0 && (<div className="exito-summary-row discount"><span>Descuento:</span><span>-${descuentoAplicado.toLocaleString()}</span></div>)}
                        <div className="exito-summary-row total"><span>Total a pagar:</span><span className="exito-total-amount">${calcularTotal().toLocaleString()}</span></div>
                    </div>

                    <Link to="/Pago"><button className={`custom-pay-button ${carrito.length === 0 ? 'disabled' : ''}`} disabled={carrito.length === 0}><div className="custom-pay-button__int"><span className="custom-pay-button__span">Ir a pagar</span></div></button></Link>

                    <div className="exito-continue-shopping"><Link to="/Segunda"><button className="exito-continue-btn">Seguir comprando</button></Link></div>
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