import React, { useState, useRef, useEffect } from 'react';
import './Producto.css';
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

  const [productosPendientes, setProductosPendientes] = useState([]);
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

    const fetchProductosPendientes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/api/producto/pendientes', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) throw new Error('Error al cargar productos pendientes');
        const data = await response.json();
        // Filtrar solo los productos con estado 'pendiente'
        const soloPendientes = Array.isArray(data) ? data.filter(p => p.estado === 'pendiente') : [];
        setProductosPendientes(soloPendientes);
      } catch (err) {
        console.error("Error al cargar productos pendientes", err);
      }
    };

    fetchUnidades();
    fetchProductosPendientes();
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
    try {
      setIsSubmitting(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/producto/aprobar/${productoId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Error al aprobar el producto');
  setProductosPendientes(prev => prev.filter(p => p.id_pro !== productoId && p.estado === 'pendiente'));
      cerrarDetalleModal();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      alert('Error al aprobar el producto');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRechazarProducto = async (productoId) => {
    try {
      setIsSubmitting(true);
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/producto/rechazar/${productoId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Error al rechazar el producto');
  setProductosPendientes(prev => prev.filter(p => p.id_pro !== productoId && p.estado === 'pendiente'));
      cerrarDetalleModal();
      setShowRejected(true);
      setTimeout(() => setShowRejected(false), 3000);
    } catch (err) {
      alert('Error al rechazar el producto');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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
              <small className="text-muted">Solo se muestran productos pendientes de aprobación</small>
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
                      <tr key={producto.id_pro}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img 
                              src={producto.imagen} 
                              alt={producto.nombre_Producto || producto.nomprod || 'Producto'}
                              className="producto-thumb me-3"
                            />
                            <div>
                              <div className="producto-nombre">{producto.nombre_Producto && producto.nombre_Producto.trim() !== '' ? producto.nombre_Producto : (producto.nomprod && producto.nomprod.trim() !== '' ? producto.nomprod : 'Sin nombre')}</div>
                              <small className="text-muted">
                                {(producto.descripcion || producto.descrip)?.substring(0, 50)}...
                              </small>
                            </div>
                          </div>
                        </td>
                        <td>{producto.nombreVendedor || 'N/A'}</td>
                        <td>${producto.valor}</td>
                        <td>{producto.fecha_creacion || '-'}</td>
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
                              onClick={() => handleAprobarProducto(producto.id_pro)}
                              className="me-2"
                            >
                              ✅ Aprobar
                            </Button>
                            <Button 
                              variant="outline-danger" 
                              size="sm"
                              onClick={() => handleRechazarProducto(producto.id_pro)}
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
                  <h5>🔍 Revisión de Producto: {productoSeleccionado.nomprod}</h5>
                  <button type="button" className="btn-close" onClick={cerrarDetalleModal}></button>
                </div>
                <div className="modal-body">
                  <Row>
                    <Col md={6}>
                      <div className="product-image-large mb-3">
                        <img 
                          src={productoSeleccionado.imagen} 
                          alt={productoSeleccionado.nomprod}
                          className="img-fluid rounded"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="product-info-section">
                        <h6>📋 Información del Producto</h6>
                        <p><strong>Nombre:</strong> {productoSeleccionado.nombre_Producto || productoSeleccionado.nomprod}</p>
                        <p><strong>Descripción:</strong> {productoSeleccionado.descripcion || productoSeleccionado.descrip}</p>
                        <p><strong>Precio:</strong> ${productoSeleccionado.valor}</p>
                        <p><strong>Cantidad disponible:</strong> {productoSeleccionado.cantidad || productoSeleccionado.cant}</p>
                        <p><strong>Categoría:</strong> {productoSeleccionado.categoria}</p>
                        <p><strong>Unidad de medida:</strong> {unidades.find(u => u.id_medida === productoSeleccionado.id_medida)?.nombre || productoSeleccionado.id_medida || '-'}</p>
                        <p><strong>Estado:</strong> {productoSeleccionado.estado}</p>
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
                    onClick={() => handleRechazarProducto(productoSeleccionado.id_pro)}
                  >
                    ❌ Rechazar
                  </Button>
                  <Button 
                    variant="success"
                    onClick={() => handleAprobarProducto(productoSeleccionado.id_pro)}
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