import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { obtenerUnidad } from '../../api/unidad_medidaApi';

function ProductoTienda() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRejected, setShowRejected] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [unidades, setUnidades] = useState([]);
  const [unidadId, setUnidadId] = useState('');
  const [tiendaId, setTiendaId] = useState('');

  const [productosPendientes, setProductosPendientes] = useState([
    {
      id: 1,
      nombre_Producto: "Tomates Orgánicos",
      descripcion: "Tomates frescos cultivados orgánicamente sin pesticidas",
      valor: 2.50,
      cantidad: 100,
      imagen: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      vendedor: { nombre: "Juan Pérez" },
      fecha_creacion: "2023-11-15",
      estado: "pendiente",
      unidad_medida: "kg"
    },
    {
      id: 2,
      nombre_Producto: "Zanahorias Frescas",
      descripcion: "Zanahorias recién cosechadas del campo",
      valor: 1.80,
      cantidad: 150,
      imagen: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      vendedor: { nombre: "María García" },
      fecha_creacion: "2023-11-14",
      estado: "pendiente",
      unidad_medida: "kg"
    },
    {
      id: 3,
      nombre_Producto: "Lechuga Hidropónica",
      descripcion: "Lechuga cultivada con sistema hidropónico",
      valor: 3.20,
      cantidad: 80,
      imagen: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      vendedor: { nombre: "Carlos López" },
      fecha_creacion: "2023-11-13",
      estado: "pendiente",
      unidad_medida: "unidad"
    }
  ]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showDetalleModal, setShowDetalleModal] = useState(false);

  const formRef = useRef();
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchUnidades = async () => {
      try {
        const data = await obtenerUnidad();
        setUnidades(data);
      } catch (err) {
        console.error("Error al cargar unidades", err);
      }
    };

    fetchUnidades();
  }, []);

  const abrirDetalleProducto = (producto) => {
    setProductoSeleccionado(producto);
    setShowDetalleModal(true);
  };

  const cerrarDetalleModal = () => {
    setShowDetalleModal(false);
    setProductoSeleccionado(null);
  };

  const handleAprobarProducto = async (productoId) => {
    console.log('Aprobando producto:', productoId);
    
    const productosActualizados = productosPendientes.filter(p => p.id !== productoId);
    setProductosPendientes(productosActualizados);
    cerrarDetalleModal();
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    console.log('✅ Producto aprobado correctamente');
  };

  const handleRechazarProducto = async (productoId) => {
    console.log('Rechazando producto:', productoId);
    
    const productosActualizados = productosPendientes.filter(p => p.id !== productoId);
    setProductosPendientes(productosActualizados);
    cerrarDetalleModal();
    
    setShowRejected(true);
    setTimeout(() => setShowRejected(false), 3000);
    
    console.log('❌ Producto rechazado correctamente');
  };

  return (
    <>
      <h1>Panel de Administración - Productos</h1>
      <div className="contenido-dinamico">
        <div className="inicio-container">
          <p>Gestión y revisión de productos agrícolas</p>
          {showSuccess && (
            <Alert variant="success" className="mb-3">
              ✅ Producto aprobado correctamente
            </Alert>
          )}
          {showRejected && (
            <Alert variant="danger" className="mb-3">
              ❌ Producto rechazado correctamente
            </Alert>
          )}

          <Card className="productos-container">
            <Card.Header className="bg-light">
              <h5 className="mb-0">📦 Productos Pendientes de Revisión</h5>
              <small className="text-muted">Estos son datos de ejemplo para probar la funcionalidad</small>
            </Card.Header>
            <Card.Body>
              {productosPendientes.length === 0 ? (
                <p className="text-center text-muted">🎉 No hay productos pendientes de revisión</p>
              ) : (
                <Table responsive striped hover>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Vendedor</th>
                      <th>Precio</th>
                      <th>Fecha</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productosPendientes.map((producto) => (
                      <tr key={producto.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src={producto.imagen} 
                              alt={producto.nombre_Producto}
                              className="producto-thumb me-3"
                            />
                            <div>
                              <div className="fw-bold">{producto.nombre_Producto}</div>
                              <small className="text-muted">
                                {producto.descripcion?.substring(0, 50)}...
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>{producto.vendedor?.nombre || 'N/A'}</td>
                        <td>${producto.valor}</td>
                        <td>{producto.fecha_creacion}</td>
                        <td>
                          <Badge bg="warning">⏳ Pendiente</Badge>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <Button 
                              variant="outline-primary" 
                              size="sm"
                              onClick={() => abrirDetalleProducto(producto)}
                              className="me-2"
                            >
                              👁️ Revisar
                            </Button>
                            <Button 
                              variant="outline-success" 
                              size="sm"
                              onClick={() => handleAprobarProducto(producto.id)}
                              className="me-2"
                            >
                              ✅ Aprobar
                            </Button>
                            <Button 
                              variant="outline-danger" 
                              size="sm"
                              onClick={() => handleRechazarProducto(producto.id)}
                            >
                              ❌ Rechazar
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>

          {showDetalleModal && productoSeleccionado && (
            <div className="modal-overlay" onClick={cerrarDetalleModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h5>🔍 Revisión de Producto: {productoSeleccionado.nombre_Producto}</h5>
                  <button type="button" className="btn-close" onClick={cerrarDetalleModal}></button>
                </div>
                <div className="modal-body">
                  <Row>
                    <Col md={6}>
                      <div className="product-image-large mb-3">
                        <img 
                          src={productoSeleccionado.imagen} 
                          alt={productoSeleccionado.nombre_Producto}
                          className="img-fluid rounded"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="product-info-section">
                        <h6>📋 Información del Producto</h6>
                        <p><strong>Descripción:</strong> {productoSeleccionado.descripcion}</p>
                        <p><strong>Precio:</strong> ${productoSeleccionado.valor} por {productoSeleccionado.unidad_medida}</p>
                        <p><strong>Cantidad disponible:</strong> {productoSeleccionado.cantidad} {productoSeleccionado.unidad_medida}</p>
                        <p><strong>Vendedor:</strong> {productoSeleccionado.vendedor?.nombre || 'N/A'}</p>
                        <p><strong>Fecha de publicación:</strong> {productoSeleccionado.fecha_creacion}</p>
                      </div>
                      
                      <hr />
                      
                      <h6>✅ Verificación de Imágenes</h6>
                      <Form>
                        <Form.Check 
                          type="checkbox"
                          label="Las imágenes muestran un producto agrícola real"
                          className="mb-2"
                        />
                        <Form.Check 
                          type="checkbox"
                          label="El producto parece estar en buen estado"
                          className="mb-2"
                        />
                        <Form.Check 
                          type="checkbox"
                          label="Las imágenes coinciden con la descripción"
                          className="mb-2"
                        />
                        <Form.Check 
                          type="checkbox"
                          label="La calidad de la imagen es aceptable"
                          className="mb-2"
                        />
                      </Form>
                    </Col>
                  </Row>
                </div>
                <div className="modal-footer">
                  <Button variant="secondary" onClick={cerrarDetalleModal}>
                    Cerrar
                  </Button>
                  <Button 
                    variant="danger"
                    onClick={() => handleRechazarProducto(productoSeleccionado.id)}
                  >
                    ❌ Rechazar
                  </Button>
                  <Button 
                    variant="success"
                    onClick={() => handleAprobarProducto(productoSeleccionado.id)}
                  >
                    ✅ Aprobar Producto
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductoTienda;