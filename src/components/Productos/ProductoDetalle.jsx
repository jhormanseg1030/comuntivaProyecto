import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import logo from '../Imagenes/DonJuan.jpg';
import Footer_Abajo from '../Vendedor/Footer_Abajo';
import { obtenerProductos } from "../../api/productoApi";
import './ProductoDetalle.css';
import '../../styles/header.css';

export default function ProductoDetalle(){
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchOne = async () => {
      try {
        const all = await obtenerProductos();
        const found = all.find(p => String(p.id_pro) === String(id));
        setProducto(found || null);
      } catch (err) {
        console.error('[ProductoDetalle] error:', err);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };
    fetchOne();
  }, [id]);

  if (loading) return (
    <Container className="py-5"><p>Cargando producto...</p></Container>
  );
  
  if (!producto) return (
    <Container className="py-5"><p>Producto no encontrado.</p></Container>
  );

  const imgSrc = producto.imagen
    ? `http://localhost:8080/api/producto/imagen/${producto.imagen}`
    : 'https://via.placeholder.com/600x400?text=Sin+Imagen';

  const nombre = producto.nombre_Producto || producto.nom || 'Sin nombre';
  const valor = producto.valor ?? 0;
  const descripcion = producto.descripcion || 'Sin descripción';
  const cantidad_stock = producto.cantidad || 100;

  const handleAnadirCarrito = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existing = cart.find(item => String(item.id_pro) === String(producto.id_pro));

    if(existing){
      existing.cantidad = Math.min((existing.cantidad || 0) + cantidad, producto.cantidad || 9999);
    }else{
      cart.push({
        id_pro: producto.id_pro,
        nombre,
        precio: valor,
        cantidad,
        imagen: producto.imagen ? `http://localhost:8080/api/producto/imagen/${producto.imagen}` : null
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('card_updated'));

    setCantidad(1);
    console.log('Producto añadido al carrito',{id: producto.id_pro, cantidad});
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src={logo} alt="Logo" className="nav-brand"/>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action5">
                <h4>Don Juan</h4>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              <Button variant="outline-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </Button>
            </Form>
            <div className='contenedor_bot'>
              <Link to="/carrito" style={{ textDecoration: 'none', color: 'black' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="cart" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                </svg>
              </Link>
              <Link to="/Perfil" style={{ textDecoration: 'none', color: 'black' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='Img-Prod'>
        <Row className='w-100'>
          <Col xs={6} md={6} className="text-center">
            <Image className='Img-Big' src={imgSrc} rounded onError={(e)=>{e.target.src='https://via.placeholder.com/600x400?text=Sin+Imagen'}} />
            <div className='botones'>
              <Button onClick={handleAnadirCarrito} variant="success" className='Pri-boton'>
                🛒 Añadir al carro
              </Button>
              <Link to="/Pago"><Button variant="dark" className='Seg-boton'>⚡ Comprar ahora</Button></Link>
            </div>
          </Col>

          <Col xs={6} md={6} className='descrip'>
            <h4>{nombre}</h4>
            <Link to='/TiendaDonJuan'>← Volver a Tienda</Link>
            
            <div className="rating-estrellas">
              <h5>
                ★★★★★
                <span className="rating-count"> (4.8/5)</span>
              </h5>
            </div>

            <div className="precio-section">
              <h3 className="precio-principal">${Number(valor).toLocaleString()}</h3>
              <p className="precio-oferta">Producto fresco de calidad</p>
            </div>

            <hr className="my-3" />

            <p className="desc-producto">{descripcion}</p>

            <div className="cantidad-seccion">
              <label>Cantidad: </label>
              <input 
                type="number" 
                className="cantidad-input"
                min="1" 
                max={cantidad_stock}
                value={cantidad}
                onChange={(e) => setCantidad(parseInt(e.target.value) || 1)}
              />
              <span className="stock-info">({cantidad_stock} disponibles)</span>
            </div>

            <hr className="my-3" />

            <h5 className="info-titulo">ℹ️ Información Adicional</h5>
            <p className="info-text">{descripcion} Cosechado a mano en su punto exacto de maduración. 100% orgánico, libre de químicos y fertilizantes artificiales.</p>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <h5 className='Detalles'>Detalles del Producto</h5>
        <div className='Det'>
          <div className='Ref'>
            <h5 className='title'>Referencia</h5>
            <h6>{producto.referencia || 'SIN REF'}</h6>
          </div>

          <div className='Ref'>
            <h5 className='title'>Tipo de producto</h5>
            <h6>{producto.tipo || producto.categoria || 'Producto campesino'}</h6>
          </div>

          <div className='Ref'>
            <h5 className='title'>Número de piezas</h5>
            <h6>{producto.piezas || '1'}</h6>
          </div>

          <div className='Ref'>
            <h5 className='title'>Stock disponible</h5>
            <h6>{cantidad_stock} unidades</h6>
          </div>
        </div>
      </Container>

      <hr />
      <Footer_Abajo/>
    </>
  );
}