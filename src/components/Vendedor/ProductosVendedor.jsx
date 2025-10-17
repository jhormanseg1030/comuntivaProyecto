import React, { useEffect, useState } from 'react';
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from '../../api/productoApi';
import Alert from 'react-bootstrap/Alert';

function ProductosVendedor() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState('');

  const categoriasDisponibles = [
    { id: '', nombre: 'Todas' },
    { id: 'frutas', nombre: 'Frutas' },
    { id: 'verduras', nombre: 'Verduras' },
    { id: 'granos', nombre: 'Granos' },
  ];

  useEffect(() => {
    const load = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (err) {
        setError('No se pudieron cargar los productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar este producto?')) return;
    try {
      await eliminarProducto(id);
      setProductos((p) => p.filter((x) => (x.id || x.id_producto) !== id));
      setSuccess('Producto eliminado correctamente');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error(err);
      setError('Error al eliminar producto');
    }
  };

  const handleCreate = async () => {
    try {
      const nuevo = { nombre_Producto: 'Nuevo producto', valor: 0, cantidad: 0, descripcion: '', id_tienda: 1, id_medida: 1 };
      const resp = await crearProducto(nuevo);
      setProductos((p) => [resp, ...p]);
      setSuccess('Producto creado');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error(err);
      setError('Error al crear producto');
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
        <button className="buttonPedi" onClick={handleCreate}>Crear producto rápido</button>
      </div>
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