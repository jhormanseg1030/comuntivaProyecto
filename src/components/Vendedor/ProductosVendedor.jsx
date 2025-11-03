import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { obtenerUnidad } from '../../api/unidad_medidaApi';
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from '../../api/productoApi';
import Alert from 'react-bootstrap/Alert';

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
        const data = await obtenerProductos();
        setProductos(data);
      } catch (err) {
        setError('No se pudieron cargar los productos. Verifica tu conexión o sesión.');
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
      // ✅ Crear objeto JSON en vez de FormData
      const productoData = {
        nombre_Producto: nombreProducto,
        valor: parseFloat(valor),
        cantidad: parseInt(cantidad),
        descripcion: descripcion,
        id_medida: parseInt(unidadId),
        categoria: categoriaNueva,
        imagen: productImage ? productImage.name : null // Solo guardar el nombre del archivo
      };
      
      console.log("📤 Enviando producto:", productoData);
      
      // ✅ Usar crearProducto (JSON) en vez de crearProductoConImagen (FormData)
      const resp = await crearProducto(productoData);
      
      // Recargar productos desde backend
      const nuevos = await obtenerProductos();
      setProductos(nuevos);
      setSuccess('Producto creado correctamente');
      setTimeout(() => setSuccess(null), 3000);
      setShowForm(false);
      
      // Limpiar formulario
      setNombreProducto('');
      setValor('');
      setCantidad('');
      setDescripcion('');
      setUnidadId('');
      setCategoriaNueva('');
      setProductImage(null);
      setImagePreview(null);
      fileInputRef.current.value = '';
    } catch (error) {
      console.error('Error completo:', error);
      setError('Error al crear producto: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este producto?')) return;
    try {
      await eliminarProducto(id);
      setProductos((p) => p.filter((x) => (x.id || x.id_producto) !== id));
      setSuccess('Producto eliminado correctamente');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Error al eliminar producto. Verifica tu sesión.');
    }
  };

  const handleCreate = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Debes iniciar sesión para crear productos.');
      return;
    }
    try {
      const nuevo = { nombre_Producto: 'Nuevo producto', valor: 0, cantidad: 0, descripcion: '', id_tienda: 1, id_medida: 1 };
      const resp = await crearProducto(nuevo);
      setProductos((p) => [resp, ...p]);
      setSuccess('Producto creado');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Error al crear producto. Verifica tu sesión o conexión.');
    }
  };

  const handleUpdate = async (id) => {
    try {
      const actualizado = { nombre_Producto: 'Actualizado', valor: 10, cantidad: 1, descripcion: 'Editado' };
      const resp = await actualizarProducto(id, actualizado);
      setProductos((p) => p.map((it) => ((it.id || it.id_producto) === id ? resp : it)));
      setSuccess('Producto actualizado');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error(err);
      setError('Error al actualizar producto');
    }
  };

  return (
    <>
      <h1>Productos</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <div style={{ marginBottom: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <input placeholder="Buscar..." value={query} onChange={(e)=>setQuery(e.target.value)} />
        <select value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
          {categoriasDisponibles.map(c => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>
        <button className="buttonPedi" onClick={()=>setShowForm(f=>!f)}>{showForm ? 'Cancelar' : 'Crear producto'}</button>
      </div>

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
        <p>Cargando productos...</p>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
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
              <tr key={p.id || p.id_producto}>
                <td>{p.id || p.id_producto}</td>
                <td>{p.nombre_Producto || p.nom}</td>
                <td>{p.valor}</td>
                <td>{p.cantidad}</td>
                <td>{p.categoria || p.categoriaNombre || '-'}</td>
                <td>
                  {p.imagen ? (
                    <img src={typeof p.imagen === 'string' && p.imagen.startsWith('http') ? p.imagen : `/uploads/${p.imagen}`} alt="img" style={{maxWidth:60, borderRadius:6}} />
                  ) : 'Sin imagen'}
                </td>
                <td>
                  <button className="btn btn-sm btn-primary" onClick={() => handleUpdate(p.id || p.id_producto)}>Editar</button>
                  {' '}
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id || p.id_producto)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ProductosVendedor;