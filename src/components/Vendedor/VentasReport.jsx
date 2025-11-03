import React, { useEffect, useState, useContext } from 'react';
import logo from '../imagenes/logo.jpg';
import { obtenerCompras } from '../../api/compraApi';
import { UserContext } from '../../context/UserContext';
import './ReportesVendedor.css';

const VentasReport = () => {
  const { user } = useContext(UserContext);
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
      // Filtrar compras por vendedor autenticado
      const compras = await obtenerCompras();
      const ventasFiltradas = compras.filter(c => c.id_vendedor === user.id);
      setVentas(ventasFiltradas);
    } catch (error) {
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
              {ventas.map(v => (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.producto_nombre || v.producto || '-'}</td>
                  <td>{v.cliente_nombre || v.cliente || '-'}</td>
                  <td>{v.fecha || '-'}</td>
                  <td>{v.cantidad || '-'}</td>
                  <td style={{ color: '#28a745', fontWeight: 'bold' }}>${v.valor ? v.valor.toLocaleString() : '-'}</td>
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
