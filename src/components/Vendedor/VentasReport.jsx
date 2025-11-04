import React, { useEffect, useState } from 'react';
import logo from '../imagenes/logo.jpg';
import { obtenerMisVentas } from '../../api/ventasApi';
import './ReportesVendedor.css';

const VentasReport = () => {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarVentas();
    const interval = setInterval(cargarVentas, 30000);
    return () => clearInterval(interval);
  }, []);

  const cargarVentas = async () => {
    setLoading(true);
    try {
      const data = await obtenerMisVentas();
      setVentas(data);
    } catch (error) {
      console.error('Error al cargar ventas:', error);
      setVentas([]);
    }
    setLoading(false);
  };

  return (
    <div className="reportes-container">
      <div className="report-header">
        <h1 className="report-title" style={{ color: '#28a745' }}>Mis Ventas</h1>
      </div>
      <div className="report-table-wrapper">
        {loading ? (
          <p>Cargando ventas...</p>
        ) : ventas.length === 0 ? (
          <p>No hay ventas registradas.</p>
        ) : (
          <table className="report-table">
            <thead>
              <tr style={{ background: '#28a745', color: 'white' }}>
                <th>ID</th>
                <th>Producto</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Cantidad</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((v, index) => (
                <tr key={v.id_compra + '-' + v.id_producto + '-' + index}>
                  <td>{v.id_compra}</td>
                  <td>{v.producto_nombre}</td>
                  <td>{v.cliente_nombre}</td>
                  <td>{v.fecha ? new Date(v.fecha).toLocaleString() : '-'}</td>
                  <td>{v.cantidad}</td>
                  <td style={{ color: '#28a745', fontWeight: 'bold' }}>
                    ${v.total ? v.total.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : '0'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default VentasReport;
