import React, { useState, useEffect } from 'react';
import './Gestras.css';
import logoConmutiva from '../imagenes/logo.jpg';

const Gestras = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [cotizaciones, setCotizaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vistaActiva, setVistaActiva] = useState('vehiculos'); 
  const [cotizacionSeleccionada, setCotizacionSeleccionada] = useState(null);
  const [mostrarDetalleCotizacion, setMostrarDetalleCotizacion] = useState(false);

  const configVehiculos = {
    furgon: {
      nombre: 'Furgón',
      icono: '🚚',
      capacidadKg: 1500,
      tarifaBase: 0,
      costoKm: 0,
      maxDistancia: 0,
      descripcion: 'Ideal para cargas medianas y productos empaquetados'
    },
    van: {
      nombre: 'Van de Carga',
      icono: '🚐',
      capacidadKg: 3000,
      tarifaBase: 0,
      costoKm: 0,
      maxDistancia: 0,
      descripcion: 'Perfecto para grandes volúmenes y productos a granel'
    }
  };

  const vehiculosData = [];
  const cotizacionesData = [];

  useEffect(() => {
    setTimeout(() => {
      setVehiculos(vehiculosData);
      setCotizaciones(cotizacionesData);
      setLoading(false);
    }, 1000);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getEstadoColor = (estado) => {
    switch(estado) {
      case 'disponible': return 'success';
      case 'en_ruta': return 'warning';
      case 'mantenimiento': return 'danger';
      default: return 'secondary';
    }
  };

  const getEstadoTexto = (estado) => {
    switch(estado) {
      case 'disponible': return 'Disponible';
      case 'en_ruta': return 'En Ruta';
      case 'mantenimiento': return 'Mantenimiento';
      default: return estado;
    }
  };

  const getEstadoCotizacionColor = (estado) => {
    switch(estado) {
      case 'completado': return 'success';
      case 'en_proceso': return 'warning';
      case 'pendiente': return 'info';
      case 'rechazado': return 'danger';
      default: return 'secondary';
    }
  };

  const leerCotizacion = (cotizacion) => {
    setCotizacionSeleccionada(cotizacion);
    setMostrarDetalleCotizacion(true);
  };

  const cerrarDetalleCotizacion = () => {
    setMostrarDetalleCotizacion(false);
    setCotizacionSeleccionada(null);
  };

  if (loading) {
    return (
      <div className="transportadora-loading">
        <div className="loading-spinner"></div>
        <p>Cargando sistema de transporte...</p>
      </div>
    );
  }

  return (
    <div className="transportadora-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <img src={logoConmutiva} alt="Conmutiva" className="header-logo" />
          <div className="header-info">
            <h1>🚚 Sistema de Fletes y Transporte</h1>
          </div>
        </div>
      </div>
      <div className="navegacion-principal">
        <button 
          className={`nav-btn ${vistaActiva === 'vehiculos' ? 'active' : ''}`}
          onClick={() => setVistaActiva('vehiculos')}
        >
          🚚 Vehículos
        </button>
        <button 
          className={`nav-btn ${vistaActiva === 'historial' ? 'active' : ''}`}
          onClick={() => setVistaActiva('historial')}
        >
          📋 Historial
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🚚</div>
          <div className="stat-info">
            <h3>{vehiculos.filter(v => v.tipo === 'furgon').length}</h3>
            <p>Furgones</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🚐</div>
          <div className="stat-info">
            <h3>{vehiculos.filter(v => v.tipo === 'van').length}</h3>
            <p>Vans</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <h3>{formatCurrency(vehiculos.reduce((sum, v) => sum + v.ingresosMes, 0))}</h3>
            <p>Ingresos Mensuales</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-info">
            <h3>{cotizaciones.length}</h3>
            <p>Cotizaciones</p>
          </div>
        </div>
      </div>

      <div className="dashboard-main">
        {vistaActiva === 'vehiculos' && (
          <div className="vehiculos-section">
            <div className="seccion-header">
              <h2>🚚 Flota de Transporte</h2>
              <div className="header-stats">
                <span className="stat-badge total">{vehiculos.length} total</span>
                <span className="stat-badge disponible">
                  {vehiculos.filter(v => v.estado === 'disponible').length} disponibles
                </span>
                <span className="stat-badge ruta">
                  {vehiculos.filter(v => v.estado === 'en_ruta').length} en ruta
                </span>
              </div>
            </div>

            <div className="vehiculos-grid">
              {vehiculos.length === 0 ? (
                <div className="no-data-message">
                  <p>No hay vehículos registrados</p>
                </div>
              ) : (
                vehiculos.map(vehiculo => (
                  <div key={vehiculo.id} className={`vehiculo-card ${vehiculo.estado}`}>
                    <div className="vehiculo-header">
                      <div className="vehiculo-icono-tipo">
                        <div className="vehiculo-icono">
                          {configVehiculos[vehiculo.tipo].icono}
                        </div>
                        <div className="vehiculo-tipo">
                          {configVehiculos[vehiculo.tipo].nombre}
                        </div>
                      </div>
                      <div className={`estado-badge ${getEstadoColor(vehiculo.estado)}`}>
                        {getEstadoTexto(vehiculo.estado)}
                      </div>
                    </div>
                    
                    <div className="vehiculo-info">
                      <h4>{vehiculo.nombre}</h4>
                      <p className="vehiculo-placa">{vehiculo.placa}</p>
                    </div>

                    <div className="vehiculo-detalles">
                      <div className="detalle-fila">
                        <span className="detalle-label">Conductor:</span>
                        <span className="detalle-value">{vehiculo.conductor}</span>
                      </div>
                      <div className="detalle-fila">
                        <span className="detalle-label">Capacidad:</span>
                        <span className="detalle-value">{vehiculo.capacidad}</span>
                      </div>
                      <div className="detalle-fila">
                        <span className="detalle-label">Viajes/Mes:</span>
                        <span className="detalle-value">{vehiculo.viajesMes}</span>
                      </div>
                      <div className="detalle-fila">
                        <span className="detalle-label">Ingresos:</span>
                        <span className="detalle-value">{formatCurrency(vehiculo.ingresosMes)}</span>
                      </div>
                      <div className="detalle-fila">
                        <span className="detalle-label">Ubicación:</span>
                        <span className="detalle-value ubicacion">{vehiculo.ubicacion}</span>
                      </div>
                    </div>
                    
                    <div className="vehiculo-acciones">
                      {vehiculo.mantenimiento && (
                        <button className="btn btn-sm btn-warning">
                          🔧 En Mantenimiento
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
        {vistaActiva === 'historial' && (
          <div className="historial-section">
            <div className="seccion-header">
              <h2>📋 Historial de Cotizaciones</h2>
              <div className="header-stats">
                <span className="stat-badge total">{cotizaciones.length} total</span>
                <span className="stat-badge completado">
                  {cotizaciones.filter(c => c.estado === 'completado').length} completados
                </span>
                <span className="stat-badge proceso">
                  {cotizaciones.filter(c => c.estado === 'en_proceso').length} en proceso
                </span>
              </div>
            </div>

            <div className="tabla-cotizaciones-container">
              <div className="tabla-cotizaciones">
                <table className="table table-striped table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Fecha</th>
                      <th>Producto</th>
                      <th>Vehículo</th>
                      <th>Ruta</th>
                      <th>Distancia</th>
                      <th>Total</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cotizaciones.length === 0 ? (
                      <tr>
                        <td colSpan="8" style={{textAlign: 'center', padding: '20px', color: '#6c757d'}}>
                          No hay cotizaciones registradas
                        </td>
                      </tr>
                    ) : (
                      cotizaciones.map(cotizacion => (
                        <tr key={cotizacion.id}>
                          <td>{cotizacion.fecha}</td>
                          <td>
                            <strong>{cotizacion.producto}</strong>
                            <br />
                            <small>{cotizacion.peso} kg</small>
                          </td>
                          <td>
                            <span className="badge vehiculo-badge">
                              {configVehiculos[cotizacion.vehiculo]?.icono} {configVehiculos[cotizacion.vehiculo]?.nombre}
                            </span>
                          </td>
                          <td>
                            {cotizacion.origen} → {cotizacion.destino}
                          </td>
                          <td>{cotizacion.distancia} km</td>
                          <td className="fw-bold text-success">
                            {cotizacion.total > 0 ? formatCurrency(cotizacion.total) : 'N/A'}
                          </td>
                          <td>
                            <span className={`badge badge-estado estado-${getEstadoCotizacionColor(cotizacion.estado)}`}>
                              {cotizacion.estado}
                            </span>
                          </td>
                          <td>
                            <div className="acciones-cotizacion">
                              <button 
                                className="btn btn-sm btn-info"
                                onClick={() => leerCotizacion(cotizacion)}
                              >
                                👁️ Leer
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      {mostrarDetalleCotizacion && cotizacionSeleccionada && (
        <div className="modal-overlay" onClick={cerrarDetalleCotizacion}>
          <div className="modal-content cotizacion-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📋 Detalle de Cotización #{cotizacionSeleccionada.id}</h3>
              <button className="btn-close" onClick={cerrarDetalleCotizacion}>×</button>
            </div>
            <div className="modal-body">
              <div className="cotizacion-detalle">
                <div className="detalle-seccion">
                  <h4>Información General</h4>
                  <div className="detalle-grid">
                    <div className="detalle-item">
                      <span className="detalle-label">Fecha:</span>
                      <span className="detalle-value">{cotizacionSeleccionada.fecha}</span>
                    </div>
                    <div className="detalle-item">
                      <span className="detalle-label">Producto:</span>
                      <span className="detalle-value">{cotizacionSeleccionada.producto}</span>
                    </div>
                    <div className="detalle-item">
                      <span className="detalle-label">Peso:</span>
                      <span className="detalle-value">{cotizacionSeleccionada.peso} kg</span>
                    </div>
                    <div className="detalle-item">
                      <span className="detalle-label">Vehículo:</span>
                      <span className="detalle-value">
                        {configVehiculos[cotizacionSeleccionada.vehiculo]?.icono} 
                        {configVehiculos[cotizacionSeleccionada.vehiculo]?.nombre}
                      </span>
                    </div>
                    <div className="detalle-item">
                      <span className="detalle-label">Ruta:</span>
                      <span className="detalle-value">
                        {cotizacionSeleccionada.origen} → {cotizacionSeleccionada.destino}
                      </span>
                    </div>
                    <div className="detalle-item">
                      <span className="detalle-label">Distancia:</span>
                      <span className="detalle-value">{cotizacionSeleccionada.distancia} km</span>
                    </div>
                    <div className="detalle-item">
                      <span className="detalle-label">Estado:</span>
                      <span className={`badge badge-estado estado-${getEstadoCotizacionColor(cotizacionSeleccionada.estado)}`}>
                        {cotizacionSeleccionada.estado}
                      </span>
                    </div>
                  </div>
                </div>

                {cotizacionSeleccionada.estado !== 'rechazado' ? (
                  <div className="detalle-seccion">
                    <h4>💰 Desglose de Costos</h4>
                    <div className="costos-lista">
                      <div className="costo-item">
                        <span>Tarifa Base:</span>
                        <span>{formatCurrency(cotizacionSeleccionada.detalles.base)}</span>
                      </div>
                      <div className="costo-item">
                        <span>Por Distancia:</span>
                        <span>{formatCurrency(cotizacionSeleccionada.detalles.distancia)}</span>
                      </div>
                      <div className="costo-item">
                        <span>Seguro (2%):</span>
                        <span>{formatCurrency(cotizacionSeleccionada.detalles.seguro)}</span>
                      </div>
                      <div className="costo-item">
                        <span>Peajes Estimados:</span>
                        <span>{formatCurrency(cotizacionSeleccionada.detalles.peajes)}</span>
                      </div>
                      {cotizacionSeleccionada.detalles.urgencia > 0 && (
                        <div className="costo-item">
                          <span>Servicio Urgente:</span>
                          <span>{formatCurrency(cotizacionSeleccionada.detalles.urgencia)}</span>
                        </div>
                      )}
                      {cotizacionSeleccionada.detalles.factorCarga > 1 && (
                        <div className="costo-item">
                          <span>Recargo carga pesada:</span>
                          <span>+20%</span>
                        </div>
                      )}
                      <div className="costo-item subtotal">
                        <span>Subtotal:</span>
                        <span>{formatCurrency(cotizacionSeleccionada.detalles.subtotal)}</span>
                      </div>
                      <div className="costo-item">
                        <span>IVA (19%):</span>
                        <span>{formatCurrency(cotizacionSeleccionada.detalles.iva)}</span>
                      </div>
                      <div className="costo-item total">
                        <span>TOTAL:</span>
                        <span className="texto-total">{formatCurrency(cotizacionSeleccionada.total)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="detalle-seccion">
                    <h4>❌ Motivo de Rechazo</h4>
                    <div className="motivo-rechazo">
                      <p>{cotizacionSeleccionada.detalles.motivo}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={cerrarDetalleCotizacion}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gestras;