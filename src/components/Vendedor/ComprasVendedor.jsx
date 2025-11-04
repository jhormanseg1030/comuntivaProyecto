import { useEffect, useState } from 'react';
import { obtenerMisCompras } from '../../api/ventasApi';

function ComprasVendedor() {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarCompras();
    const interval = setInterval(cargarCompras, 30000);
    return () => clearInterval(interval);
  }, []);

  const cargarCompras = async () => {
    setLoading(true);
    try {
      const data = await obtenerMisCompras();
      setCompras(data);
    } catch (err) {
      console.error('Error al cargar compras', err);
      setCompras([]);
    }
    setLoading(false);
  };

  return (
    <div className="reportes-container">
      <div className="report-header">
        <h1 className="report-title" style={{ color: '#28a745' }}>Mis Compras</h1>
      </div>
      <div className="report-table-wrapper">
        {loading ? (
          <p>Cargando compras...</p>
        ) : compras.length === 0 ? (
          <p>No hay compras registradas.</p>
        ) : (
          <table className="report-table">
            <thead>
              <tr style={{ background: '#28a745', color: 'white' }}>
                <th>ID</th>
                <th>Producto</th>
                <th>Vendedor</th>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((c, index) => (
                <tr key={c.id_compra + '-' + c.id_producto + '-' + index}>
                  <td>{c.id_compra}</td>
                  <td>{c.producto_nombre}</td>
                  <td>{c.vendedor_nombre}</td>
                  <td>{c.fecha ? new Date(c.fecha).toLocaleString() : '-'}</td>
                  <td>{c.cantidad}</td>
                  <td style={{ color: '#28a745', fontWeight: 'bold' }}>
                    ${c.total ? c.total.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : '0'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ComprasVendedor;
