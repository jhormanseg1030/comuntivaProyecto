import React, { useEffect, useState } from 'react';
import { obtenerPedidos } from '../../api/pedidosApi';

function PedidosVendedor() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await obtenerPedidos();
        setPedidos(data);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los pedidos.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <>
      <h1>Pedidos</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? <p>Cargando...</p> : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {pedidos && pedidos.length ? pedidos.map(p => (
              <tr key={p.id || p.id_pedido}>
                <td>{p.id || p.id_pedido}</td>
                <td>{p.cliente || p.nombreCliente || '-'}</td>
                <td>{p.fecha || p.createdAt || '-'}</td>
                <td>{p.total || p.valor || 0}</td>
              </tr>
            )) : <tr><td colSpan={4}>No hay pedidos</td></tr>}
          </tbody>
        </table>
      )}
    </>
  );
}

export default PedidosVendedor;