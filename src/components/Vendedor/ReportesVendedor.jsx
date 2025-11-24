import React, { useEffect, useState } from 'react';
import { obtenerProductosVendedor } from '../../api/productoApi';
import { obtenerPedidos } from '../../api/pedidosApi';
import { obtenerMisVentas } from '../../api/ventasApi';
import { generarHTMLPDF } from './reportesPdfTemplate';
import { generarHTMLExcel } from './reportesExcelTemplate';
import logoComuctiva from '../imagenes/Conmutiva.jpeg';
import './ReportesVendedor.css';

function ReportesVendedor() {
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tipoReporte, setTipoReporte] = useState('productos');

  // Cargar datos automáticamente de la API
  useEffect(() => {
    cargarDatos();
    // Actualizar datos cada 30 segundos
    const interval = setInterval(cargarDatos, 30000);
    return () => clearInterval(interval);
  }, []);

  const cargarDatos = async () => {
    setLoading(true);
    try {
      const [prodData, pedData, ventasData] = await Promise.all([
        obtenerProductosVendedor().catch(() => []),
        obtenerPedidos().catch(() => []),
        obtenerMisVentas().catch(() => [])
      ]);
      setProductos(prodData);
      setPedidos(pedData);
      setVentas(ventasData);
    } catch (err) {
      console.error('Error al cargar datos:', err);
    } finally {
      setLoading(false);
    }
  };

  const exportarExcel = () => {
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    
    let contenidoHTML = '';
    let titulo = '';
    
    if (tipoReporte === 'productos') {
      titulo = 'Reporte de Productos';
      contenidoHTML = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Valor</th>
              <th>Cantidad</th>
              <th>Categoría</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            ${productos.map(p => `
              <tr>
                <td>${p.id || p.id_producto}</td>
                <td>${p.nombre_Producto || p.nom}</td>
                <td>$${(p.valor || 0).toLocaleString()}</td>
                <td>${p.cantidad}</td>
                <td>${p.categoria || '-'}</td>
                <td>${p.descripcion || '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (tipoReporte === 'pedidos') {
      titulo = 'Reporte de Pedidos';
      contenidoHTML = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${pedidos.map(p => `
              <tr>
                <td>${p.id || p.id_pedido}</td>
                <td>${p.cliente || p.nombreCliente || '-'}</td>
                <td>${p.fecha || p.createdAt || '-'}</td>
                <td>$${(p.total || p.valor || 0).toLocaleString()}</td>
                <td>${p.estado || 'Pendiente'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (tipoReporte === 'ventas') {
      titulo = 'Reporte de Ventas';
      contenidoHTML = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${ventas.map(v => `
              <tr>
                <td>${v.id || v.id_compra}</td>
                <td>${v.cliente_nombre || v.cliente || '-'}</td>
                <td>${v.producto_nombre || v.producto || '-'}</td>
                <td>${v.cantidad || '-'}</td>
                <td>$${(v.total || v.valor || 0).toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (tipoReporte === 'completo') {
      titulo = 'Reporte Completo - Productos, Pedidos y Ventas';
      
      contenidoHTML += `<h2>Productos</h2>`;
      contenidoHTML += `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Valor</th>
              <th>Cantidad</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            ${productos.map(p => `
              <tr>
                <td>${p.id || p.id_producto}</td>
                <td>${p.nombre_Producto || p.nom}</td>
                <td>$${(p.valor || 0).toLocaleString()}</td>
                <td>${p.cantidad}</td>
                <td>${p.categoria || '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      
      contenidoHTML += `<h2>Pedidos</h2>`;
      contenidoHTML += `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${pedidos.map(p => `
              <tr>
                <td>${p.id || p.id_pedido}</td>
                <td>${p.cliente || p.nombreCliente || '-'}</td>
                <td>${p.fecha || p.createdAt || '-'}</td>
                <td>$${(p.total || p.valor || 0).toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      
      contenidoHTML += `<h2>Ventas</h2>`;
      contenidoHTML += `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${ventas.map(v => `
              <tr>
                <td>${v.id || v.id_compra}</td>
                <td>${v.cliente_nombre || v.cliente || '-'}</td>
                <td>${v.producto_nombre || v.producto || '-'}</td>
                <td>${v.cantidad || '-'}</td>
                <td>$${(v.total || v.valor || 0).toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }
    
    const htmlContent = generarHTMLExcel(titulo, contenidoHTML, fecha, hora);

    const bom = '\uFEFF';
    const blob = new Blob([bom + htmlContent], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `COMUCTIVA_Reporte_${tipoReporte}_${new Date().toISOString().split('T')[0]}.xls`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const generarPDF = () => {
    const ventana = window.open('', '_blank');
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    
    let contenidoTabla = '';
    let titulo = '';
    
    if (tipoReporte === 'productos') {
      titulo = 'Reporte de Productos';
      contenidoTabla = `
        <tr style="background-color: #28a745; color: white;">
          <th style="padding: 10px; border: 1px solid #ddd;">ID</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Nombre</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Valor</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Cantidad</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Categoría</th>
        </tr>
        ${productos.map((p, index) => `
          <tr style="background-color: ${index % 2 === 0 ? '#f8f9fa' : 'white'};">
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.id || p.id_producto}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${p.nombre_Producto || p.nom}</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">$${(p.valor || 0).toLocaleString()}</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.cantidad}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${p.categoria || '-'}</td>
          </tr>
        `).join('')}
      `;
    } else if (tipoReporte === 'pedidos') {
      titulo = 'Reporte de Pedidos';
      contenidoTabla = `
        <tr style="background-color: #28a745; color: white;">
          <th style="padding: 10px; border: 1px solid #ddd;">ID</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Cliente</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Fecha</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
        </tr>
        ${pedidos.map((p, index) => `
          <tr style="background-color: ${index % 2 === 0 ? '#f8f9fa' : 'white'};">
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.id || p.id_pedido}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${p.cliente || p.nombreCliente || '-'}</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.fecha || p.createdAt || '-'}</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">$${(p.total || p.valor || 0).toLocaleString()}</td>
          </tr>
        `).join('')}
      `;
    } else if (tipoReporte === 'ventas') {
      titulo = 'Reporte de Ventas';
      contenidoTabla = `
        <tr style="background-color: #28a745; color: white;">
          <th style="padding: 10px; border: 1px solid #ddd;">ID</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Cliente</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Producto</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Cantidad</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
        </tr>
        ${ventas.map((v, index) => `
          <tr style="background-color: ${index % 2 === 0 ? '#f8f9fa' : 'white'};">
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${v.id || v.id_compra}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${v.cliente_nombre || v.cliente || '-'}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${v.producto_nombre || v.producto || '-'}</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${v.cantidad || '-'}</td>
            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">$${(v.total || v.valor || 0).toLocaleString()}</td>
          </tr>
        `).join('')}
      `;
    } else if (tipoReporte === 'completo') {
      titulo = 'Reporte Completo - Productos, Pedidos y Ventas';
      contenidoTabla = `
        <h2 style="color: #28a745; margin-top: 30px; border-bottom: 2px solid #28a745; padding-bottom: 10px;">Productos</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 30px;">
          <tr style="background-color: #28a745; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">ID</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Nombre</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Valor</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Cantidad</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Categoría</th>
          </tr>
          ${productos.map((p, index) => `
            <tr style="background-color: ${index % 2 === 0 ? '#f8f9fa' : 'white'};">
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.id || p.id_producto}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${p.nombre_Producto || p.nom}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">$${(p.valor || 0).toLocaleString()}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.cantidad}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${p.categoria || '-'}</td>
            </tr>
          `).join('')}
        </table>

        <h2 style="color: #28a745; margin-top: 30px; border-bottom: 2px solid #28a745; padding-bottom: 10px;">Pedidos</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 30px;">
          <tr style="background-color: #28a745; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">ID</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Cliente</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Fecha</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
          </tr>
          ${pedidos.map((p, index) => `
            <tr style="background-color: ${index % 2 === 0 ? '#f8f9fa' : 'white'};">
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.id || p.id_pedido}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${p.cliente || p.nombreCliente || '-'}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${p.fecha || p.createdAt || '-'}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">$${(p.total || p.valor || 0).toLocaleString()}</td>
            </tr>
          `).join('')}
        </table>

        <h2 style="color: #28a745; margin-top: 30px; border-bottom: 2px solid #28a745; padding-bottom: 10px;">Ventas</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background-color: #28a745; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">ID</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Cliente</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Producto</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Cantidad</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
          </tr>
          ${ventas.map((v, index) => `
            <tr style="background-color: ${index % 2 === 0 ? '#f8f9fa' : 'white'};">
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${v.id || v.id_compra}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${v.cliente_nombre || v.cliente || '-'}</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${v.producto_nombre || v.producto || '-'}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${v.cantidad || '-'}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">$${(v.total || v.valor || 0).toLocaleString()}</td>
            </tr>
          `).join('')}
        </table>
      `;
    }

    const htmlCompleto = generarHTMLPDF(
      titulo, 
      tipoReporte === 'completo' ? contenidoTabla : `<table>${contenidoTabla}</table>`,
      fecha,
      hora,
      logoComuctiva
    );
    
    ventana.document.write(htmlCompleto);
    ventana.document.close();
  };

  return (
    <div className="reportes-container">
      <h1>📊 Reportes COMUCTIVA</h1>
      
      <div className="reportes-controls">
        <div className="tipo-reporte">
          <label>Tipo de Reporte:</label>
          <select value={tipoReporte} onChange={(e) => setTipoReporte(e.target.value)} className="form-select">
            <option value="productos">Productos</option>
            <option value="pedidos">Pedidos</option>
            <option value="ventas">Ventas</option>
            <option value="completo">Reporte Completo (Todo)</option>
          </select>
        </div>
        
        <div className="acciones-reportes">
          <button className="btn-reporte btn-excel" onClick={exportarExcel} disabled={loading}>
            📊 Exportar a Excel
          </button>
          <button className="btn-reporte btn-pdf" onClick={generarPDF} disabled={loading}>
            📄 Generar PDF
          </button>
          <button className="btn-reporte btn-refresh" onClick={cargarDatos} disabled={loading}>
            🔄 Actualizar Datos
          </button>
        </div>
      </div>

      {loading ? (
        <p className="loading">Cargando datos...</p>
      ) : (
        <div className="preview-reporte">
          <h3>Vista Previa - {tipoReporte === 'completo' ? 'Reporte Completo' : tipoReporte.charAt(0).toUpperCase() + tipoReporte.slice(1)}</h3>
          {tipoReporte === 'completo' ? (
            <>
              <h4 style={{color: '#28a745', marginTop: '20px'}}>Productos</h4>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Valor</th>
                    <th>Cantidad</th>
                    <th>Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map(p => (
                    <tr key={p.id || p.id_producto}>
                      <td>{p.id || p.id_producto}</td>
                      <td>{p.nombre_Producto || p.nom}</td>
                      <td>${(p.valor || 0).toLocaleString()}</td>
                      <td>{p.cantidad}</td>
                      <td>{p.categoria || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <h4 style={{color: '#28a745', marginTop: '30px'}}>Pedidos</h4>
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
                  {pedidos.map(p => (
                    <tr key={p.id || p.id_pedido}>
                      <td>{p.id || p.id_pedido}</td>
                      <td>{p.cliente || p.nombreCliente || '-'}</td>
                      <td>{p.fecha || p.createdAt || '-'}</td>
                      <td>${(p.total || p.valor || 0).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <h4 style={{color: '#28a745', marginTop: '30px'}}>Ventas</h4>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {ventas.map(v => (
                    <tr key={v.id || v.id_compra}>
                      <td>{v.id || v.id_compra}</td>
                      <td>{v.cliente_nombre || v.cliente || '-'}</td>
                      <td>{v.producto_nombre || v.producto || '-'}</td>
                      <td>{v.cantidad || '-'}</td>
                      <td>${(v.total || v.valor || 0).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
          <table className="table table-hover">
            <thead>
              {tipoReporte === 'productos' && (
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Valor</th>
                  <th>Cantidad</th>
                  <th>Categoría</th>
                </tr>
              )}
              {tipoReporte === 'pedidos' && (
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Total</th>
                </tr>
              )}
              {tipoReporte === 'ventas' && (
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              )}
            </thead>
            <tbody>
              {tipoReporte === 'productos' && productos.map(p => (
                <tr key={p.id || p.id_producto}>
                  <td>{p.id || p.id_producto}</td>
                  <td>{p.nombre_Producto || p.nom}</td>
                  <td>${(p.valor || 0).toLocaleString()}</td>
                  <td>{p.cantidad}</td>
                  <td>{p.categoria || '-'}</td>
                </tr>
              ))}
              {tipoReporte === 'pedidos' && pedidos.map(p => (
                <tr key={p.id || p.id_pedido}>
                  <td>{p.id || p.id_pedido}</td>
                  <td>{p.cliente || p.nombreCliente || '-'}</td>
                  <td>{p.fecha || p.createdAt || '-'}</td>
                  <td>${(p.total || p.valor || 0).toLocaleString()}</td>
                </tr>
              ))}
              {tipoReporte === 'ventas' && ventas.map(v => (
                <tr key={v.id || v.id_compra}>
                  <td>{v.id || v.id_compra}</td>
                  <td>{v.cliente_nombre || v.cliente || '-'}</td>
                  <td>{v.producto_nombre || v.producto || '-'}</td>
                  <td>{v.cantidad || '-'}</td>
                  <td>${(v.total || v.valor || 0).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
          {tipoReporte === 'productos' && productos.length === 0 && <p className="no-data">No hay productos para mostrar</p>}
          {tipoReporte === 'pedidos' && pedidos.length === 0 && <p className="no-data">No hay pedidos para mostrar</p>}
          {tipoReporte === 'ventas' && ventas.length === 0 && <p className="no-data">No hay ventas para mostrar</p>}
        </div>
      )}
    </div>
  );
}

export default ReportesVendedor;
