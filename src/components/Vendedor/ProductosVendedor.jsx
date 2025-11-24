import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { obtenerUnidad } from '../../api/unidad_medidaApi';
import { obtenerProductosVendedor, crearProducto, actualizarProductoVendedor, eliminarProducto } from '../../api/productoApi';
import Alert from 'react-bootstrap/Alert';
import './ProductosVendedor.css';

function ProductosVendedor() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [unidades, setUnidades] = useState([]);
  const [unidadId, setUnidadId] = useState('');
  const [categoriaNueva, setCategoriaNueva] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [valor, setValor] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const fileInputRef = React.useRef();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState('');
  const [noToken, setNoToken] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const categoriasDisponibles = [
    { id: '', nombre: 'Todas' },
    { id: 'frutas', nombre: 'Frutas' },
    { id: 'verduras', nombre: 'Verduras' },
    { id: 'hortalizas', nombre: 'Hortalizas' },
    { id: 'granos', nombre: 'Granos' },
  ];

  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setNoToken(true);
        setLoading(false);
        return;
      }
      try {
        // Obtener solo los productos del vendedor autenticado
        const data = await obtenerProductosVendedor();
        console.log('📦 Productos cargados del vendedor:', data);
        console.log('🔍 Primer producto (estructura):', data[0]);
        setProductos(data);
      } catch (err) {
        setError('No se pudieron cargar tus productos. Verifica tu conexión o sesión.');
        console.error('Error al cargar productos del vendedor:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('La imagen no debe exceder los 2MB');
        fileInputRef.current.value = '';
        return;
      }
      if (!file.type.match('image.*')) {
        alert('Por favor seleccione un archivo de imagen (JPG, PNG)');
        fileInputRef.current.value = '';
        return;
      }
      setProductImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
  setError(null);

  try {
    const formData = new FormData();
    formData.append("nombre_Producto", nombreProducto);
    formData.append("valor", parseFloat(valor));
    formData.append("cantidad", parseInt(cantidad));
    formData.append("descripcion", descripcion);
    formData.append("id_medida", parseInt(unidadId));
    formData.append("categoria", categoriaNueva);
    if (productImage) {
      formData.append("imagen", productImage);
    }

    const resp = await crearProducto(formData); // Asegúrate de que `crearProducto` acepte FormData
    // Recargar solo los productos del vendedor autenticado
    const nuevos = await obtenerProductosVendedor();
    setProductos(nuevos);
    setSuccess("Producto creado correctamente");
    setTimeout(() => setSuccess(null), 3000);
    setShowForm(false);

    // Resetear campos
    setNombreProducto("");
    setValor("");
    setCantidad("");
    setDescripcion("");
    setUnidadId("");
    setCategoriaNueva("");
    setProductImage(null);
    setImagePreview(null);
    fileInputRef.current.value = "";
  } catch (error) {
    console.error("Error completo:", error);
    setError("Error al crear producto: " + error.message);
  } finally {
    setIsSubmitting(false);
  }
};

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este producto?')) return;
    try {
      await eliminarProducto(id);
      setProductos((p) => p.filter((x) => (x.id_pro || x.id_producto || x.id) !== id));
      setSuccess('Producto eliminado correctamente');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Error al eliminar producto. Verifica tu sesión.');
    }
  };

  const handleUpdate = async (id) => {
    console.log('🔍 Buscando producto con ID:', id);
    console.log('📋 Lista de productos:', productos);
    
    const producto = productos.find(p => {
      const productId = p.id_pro || p.id_producto || p.id;
      console.log(`Comparando: ${productId} === ${id}`, productId === id);
      return productId === id;
    });
    
    if (!producto) {
      console.error('❌ Producto no encontrado con ID:', id);
      setError('No se encontró el producto a editar');
      return;
    }
    
    console.log('📝 Producto encontrado:', producto);
    
    // Obtener el ID real del producto
    const idReal = producto.id_pro || producto.id_producto || producto.id;
    console.log('🆔 ID real del producto:', idReal);
    
    if (!idReal) {
      console.error('❌ El producto no tiene ID válido');
      setError('El producto no tiene un ID válido');
      return;
    }
    
    // Establecer los valores del producto a editar
    const productoConId = {
      ...producto,
      idReal: idReal
    };
    
    setEditingProduct(productoConId);
    setNombreProducto(producto.nombre_Producto || producto.nom || '');
    setValor(producto.valor || '');
    setCantidad(producto.cantidad || '');
    setDescripcion(producto.descripcion || producto.descrip || '');
    setUnidadId(producto.id_medida || producto.unidad_medida?.id_Medida || '');
    setCategoriaNueva(producto.categoria || '');
    setImagePreview(producto.imagen ? `http://localhost:8080/api/producto/imagen/${producto.imagen}` : null);
    setShowEditForm(true);
    setShowForm(false);
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    console.log('🔄 Intentando actualizar producto...');
    console.log('Token existe:', !!localStorage.getItem('token'));

    try {
      // Primero obtener el ID del producto
      const idProducto = editingProduct.idReal || editingProduct.id_pro || editingProduct.id_producto || editingProduct.id;
      
      if (!idProducto) {
        throw new Error('No se pudo obtener el ID del producto');
      }
      
      const productoActualizado = {
        id_producto: idProducto, // ✅ Requerido por el backend
        nombre_Producto: nombreProducto,
        valor: parseFloat(valor),
        cantidad: parseInt(cantidad),
        descripcion: descripcion,
        id_medida: parseInt(unidadId),
        categoria: categoriaNueva,
        estado: editingProduct.estado || 'pendiente' // Mantener el estado actual
      };

      console.log('📦 Datos a enviar:', productoActualizado);
      console.log('🆔 ID del producto a actualizar:', idProducto);

      const resp = await actualizarProductoVendedor(idProducto, productoActualizado);
      
      console.log('✅ Producto actualizado, recargando lista...');
      // Recargar productos del vendedor
      const nuevos = await obtenerProductosVendedor();
      setProductos(nuevos);
      
      setSuccess('Producto actualizado correctamente');
      setTimeout(() => setSuccess(null), 3000);
      setShowEditForm(false);
      setEditingProduct(null);
      
      // Limpiar formulario
      setNombreProducto('');
      setValor('');
      setCantidad('');
      setDescripcion('');
      setUnidadId('');
      setCategoriaNueva('');
      setProductImage(null);
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('❌ Error completo:', error);
      
      let mensajeError = 'Error al actualizar producto: ';
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        mensajeError = '❌ No se pudo conectar con el servidor. Verifica que el backend esté corriendo en http://localhost:8080';
      } else if (error.message.includes('401')) {
        mensajeError = 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.';
      } else if (error.message.includes('403')) {
        mensajeError = 'No tienes permisos para actualizar este producto.';
      } else if (error.message.includes('500')) {
        mensajeError = 'Error del servidor. Verifica que el campo descripción no sea muy largo.';
      } else {
        mensajeError += error.message;
      }
      
      setError(mensajeError);
    } finally {
      setIsSubmitting(false);
    }
  };

return (
    <>
      <h1>Mis Productos</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <div style={{ marginBottom: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <input placeholder="Buscar..." value={query} onChange={(e)=>setQuery(e.target.value)} />
        <select value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
          {categoriasDisponibles.map(c => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>
        <button className="buttonPedi" onClick={()=>{setShowForm(f=>!f); setShowEditForm(false); setEditingProduct(null);}}>{showForm ? 'Cancelar' : 'Crear producto'}</button>
      </div>

      {showEditForm && editingProduct && (
        <Container className="mb-4">
          <h3>Editar Producto</h3>
          <Form onSubmit={handleUpdateSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="edit_nombre_Producto">
                  <Form.Label>Nombre del Producto</Form.Label>
                  <Form.Control type="text" value={nombreProducto} onChange={e=>setNombreProducto(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="edit_valor">
                  <Form.Label>Valor</Form.Label>
                  <Form.Control type="number" value={valor} onChange={e=>setValor(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="edit_cantidad">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control type="number" value={cantidad} onChange={e=>setCantidad(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="edit_descripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={2} value={descripcion} onChange={e=>setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="edit_id_medida">
                  <Form.Label>Unidad de Medida</Form.Label>
                  <Form.Select value={unidadId} onChange={e=>setUnidadId(e.target.value)} required>
                    <option value="">Seleccione una unidad</option>
                    {unidades.map((u) => (
                      <option key={u.id_Medida} value={u.id_Medida}>{u.tip_Medida}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="edit_categoria">
                  <Form.Label>Categoría</Form.Label>
                  <Form.Select value={categoriaNueva} onChange={e=>setCategoriaNueva(e.target.value)} required>
                    <option value="">Seleccione una categoría</option>
                    <option value="frutas">Frutas</option>
                    <option value="verduras">Verduras</option>
                    <option value="granos">Granos</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="edit_imagen" className="mb-3">
                  <Form.Label>Imagen actual del producto</Form.Label>
                  <div style={{marginTop:8, marginBottom:16}}>
                    {imagePreview && (
                      <img src={imagePreview} alt="Vista previa" style={{maxWidth:180, borderRadius:8}} />
                    )}
                  </div>
                  <p style={{fontSize:12, color: '#666'}}>Nota: La actualización de imagen se implementará próximamente</p>
                </Form.Group>
                <div style={{display: 'flex', gap: 8}}>
                  <Button variant="success" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Actualizando...' : 'Actualizar Producto'}
                  </Button>
                  <Button variant="secondary" onClick={()=>{setShowEditForm(false); setEditingProduct(null);}}>
                    Cancelar
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      )}

      {showForm && (
        <Container className="mb-4">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="nombre_Producto">
                  <Form.Label>Nombre del Producto</Form.Label>
                  <Form.Control type="text" value={nombreProducto} onChange={e=>setNombreProducto(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="valor">
                  <Form.Label>Valor</Form.Label>
                  <Form.Control type="number" value={valor} onChange={e=>setValor(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cantidad">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control type="number" value={cantidad} onChange={e=>setCantidad(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="descripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={2} value={descripcion} onChange={e=>setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="id_medida">
                  <Form.Label>Unidad de Medida</Form.Label>
                  <Form.Select value={unidadId} onChange={e=>setUnidadId(e.target.value)} required>
                    <option value="">Seleccione una unidad</option>
                    {unidades.map((u) => (
                      <option key={u.id_Medida} value={u.id_Medida}>{u.tip_Medida}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="categoria">
                  <Form.Label>Categoría</Form.Label>
                  <Form.Select value={categoriaNueva} onChange={e=>setCategoriaNueva(e.target.value)} required>
                    <option value="">Seleccione una categoría</option>
                    <option value="frutas">Frutas</option>
                    <option value="verduras">Verduras</option>
                    <option value="granos">Granos</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formImagenProducto" className="mb-3">
                  <Form.Label>Subir imagen del producto</Form.Label>
                  <Form.Control type="file" accept="image/jpeg, image/png" onChange={handleImageChange} ref={fileInputRef} />
                  <div style={{marginTop:8}}>
                    {imagePreview ? (
                      <img src={imagePreview} alt="Vista previa" style={{maxWidth:180, borderRadius:8}} />
                    ) : (
                      <span>Imagen del producto</span>
                    )}
                  </div>
                  <p style={{fontSize:12}}>Formatos aceptados: JPG, PNG (Max. 2MB)</p>
                </Form.Group>
                <Button variant="success" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Guardando...' : 'Guardar Producto'}
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
      {loading ? (
        <p>Cargando tus productos...</p>
      ) : productos.length === 0 ? (
        <p>No tienes productos creados aún. Haz clic en "Crear producto" para agregar tu primer producto.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-hover" style={{ minWidth: '100%' }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Valor</th>
                <th>Cantidad</th>
                <th>Categoría</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos
                .filter(p => (query? (p.nombre_Producto || p.nom || '').toLowerCase().includes(query.toLowerCase()): true))
                .filter(p => (categoria ? (p.categoria === categoria || p.categoriaNombre === categoria) : true))
                .map((p) => (
                <tr key={p.id_pro || p.id_producto || p.id}>
                  <td>{p.nombre_Producto || p.nom}</td>
                  <td>{p.valor}</td>
                  <td>{p.cantidad}</td>
                  <td>{p.categoria || p.categoriaNombre || '-'}</td>
                  {/* ✅ CELDA DE IMAGEN CON ALTURA FIJA PARA EVITAR PARPADEOS */}
                  <td>
                    <div style={{ 
                      width: 70, 
                      height: 70, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#f5f5f5',
                      borderRadius: 6,
                      overflow: 'hidden'
                    }}>
                      {p.imagen ? (
                        <img 
                          src={`http://localhost:8080/api/producto/imagen/${p.imagen}`} 
                          alt={p.nombre_Producto || p.nom}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                          onError={(e) => {
                            console.log("Error cargando imagen:", e.target.src);
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <span style={{ fontSize: 12, color: '#999' }}>Sin imagen</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary" onClick={() => {
                      console.log('🖱️ Click en Editar. Producto completo:', p);
                      console.log('🆔 IDs disponibles:', {
                        id_pro: p.id_pro,
                        id: p.id,
                        id_producto: p.id_producto,
                        idReal: p.id_pro || p.id_producto || p.id
                      });
                      handleUpdate(p.id_pro || p.id_producto || p.id);
                    }}>Editar</button>
                    {' '}
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id_pro || p.id_producto || p.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ProductosVendedor;