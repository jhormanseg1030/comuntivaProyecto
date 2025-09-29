// src/components/FormularioPedido.jsx
import React, { useState } from 'react';
import { obtenerPedidos } from '../../../api/pedidosApi'; 
import './pedidosForm.css';

const FormularioPedido = () => {
  const [filtros, setFiltros] = useState({
    id: '',
    fecha: '',
    producto: '',
  });

  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFiltros({...filtros, [e.target.name]: e.target.value});
  };

  const handleBuscar = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Llama a la API con filtros
      const data = await obtenerPedidos(filtros);
      setResultados(data);
    } catch (error) {
      alert('Error al buscar pedidos: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Consulta de Pedidos</h2>
      <form onSubmit={handleBuscar}>
        <div className="form-group">
          <label>ID Pedido:</label>
          <input
            type="number"
            name="id"
            value={filtros.id}
            onChange={handleChange}
            placeholder="ID exacto"
          />
        </div>
        <div className="form-group">
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={filtros.fecha}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Producto:</label>
          <input
            type="text"
            name="producto"
            value={filtros.producto}
            onChange={handleChange}
            placeholder="Nombre producto"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      <div className="resultados">
        {resultados.length === 0 ? (
          <p>No se encontraron pedidos.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID Pedido</th>
                <th>Fecha</th>
                <th>Productos</th>
                <th>Total</th>
                {/* Agrega más columnas si quieres */}
              </tr>
            </thead>
            <tbody>
              {resultados.map((pedido) => (
                <tr key={pedido.id_pedido}>
                  <td>{pedido.id_pedido}</td>
                  <td>{pedido.fecha}</td>
                  <td>
                    {pedido.productos
                      ? pedido.productos.map((p) => p.nombre).join(', ')
                      : 'N/A'}
                  </td>
                  <td>{pedido.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FormularioPedido;