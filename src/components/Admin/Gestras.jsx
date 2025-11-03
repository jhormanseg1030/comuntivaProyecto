import React, { useState, useEffect } from 'react';
import './Gestras.css';
import logoConmutiva from '../imagenes/logo.jpg';
import { obtenerVehiculos, obtenerCotizaciones, obtenerConfigFletes } from '../../api/transportApi';
import ModalConexionFallida from '../ModalConexionFallida';

const Gestras = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [cotizaciones, setCotizaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarModalError, setMostrarModalError] = useState(false);
  const [vistaActiva, setVistaActiva] = useState('vehiculos'); 
  const [cotizacionSeleccionada, setCotizacionSeleccionada] = useState(null);
  const [mostrarDetalleCotizacion, setMostrarDetalleCotizacion] = useState(false);

  const [configVehiculos, setConfigVehiculos] = useState({
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
  });

  // Cargar datos desde el backend
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        setError(null);

        // Cargar configuración de fletes
        const config = await obtenerConfigFletes();
        if (config && config.vehiculos) {
          setConfigVehiculos({
            furgon: {
              nombre: 'Furgón',
              icono: '🚚',
              capacidadKg: config.vehiculos.FURGON?.capacidadKg || 1500,
              tarifaBase: config.vehiculos.FURGON?.tarifaBase || 0,
              costoKm: config.vehiculos.FURGON?.costoPorKm || 0,
              maxDistancia: config.vehiculos.FURGON?.maxDistancia || 0,
              descripcion: config.vehiculos.FURGON?.descripcion || 'Ideal para cargas medianas'
            },
            van: {
              nombre: 'Van de Carga',
              icono: '🚐',
              capacidadKg: config.vehiculos.VAN?.capacidadKg || 3000,
              tarifaBase: config.vehiculos.VAN?.tarifaBase || 0,
              costoKm: config.vehiculos.VAN?.costoPorKm || 0,
              maxDistancia: config.vehiculos.VAN?.maxDistancia || 0,
              descripcion: config.vehiculos.VAN?.descripcion || 'Perfecto para grandes volúmenes'
            }
          });
        }

        // Cargar vehículos
        const vehiculosData = await obtenerVehiculos();
        setVehiculos(vehiculosData || []);

        // Cargar cotizaciones
        const cotizacionesData = await obtenerCotizaciones();
        setCotizaciones(cotizacionesData || []);

      } catch (err) {
        console.error('Error al cargar datos:', err);
        setError(err.message);
        
        // Si es error de autenticación, mostrar modal
        if (err.message.includes('No autorizado') || err.message.includes('autorización')) {
          setMostrarModalError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Mapear tipos de vehículo del backend (mayúsculas) a configuración local (minúsculas)
  const mapearTipoVehiculo = (tipo) => {
    if (!tipo) return 'furgon';
    return tipo.toLowerCase();
  };

  // Mapear estados del backend (mayúsculas) a formato UI (minúsculas con guión bajo)
  const mapearEstadoVehiculo = (estado) => {
    if (!estado) return 'disponible';
    const mapping = {
      'DISPONIBLE': 'disponible',
      'EN_RUTA': 'en_ruta',
      'MANTENIMIENTO': 'mantenimiento'
    };
    return mapping[estado] || estado.toLowerCase();
  };

  const mapearEstadoCotizacion = (estado) => {
    if (!estado) return 'pendiente';
    const mapping = {
      'PENDIENTE': 'pendiente',
      'EN_PROCESO': 'en_proceso',
      'COMPLETADO': 'completado',
      'RECHAZADO': 'rechazado'
    };
    return mapping[estado] || estado.toLowerCase();
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
            <h3>{vehiculos.filter(v => mapearTipoVehiculo(v.tipo) === 'furgon').length}</h3>
            <p>Furgones</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🚐</div>
          <div className="stat-info">
            <h3>{vehiculos.filter(v => mapearTipoVehiculo(v.tipo) === 'van').length}</h3>
            <p>Vans</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <h3>{formatCurrency(vehiculos.reduce((sum, v) => sum + (v.ingresosMes || 0), 0))}</h3>
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
                  {vehiculos.filter(v => mapearEstadoVehiculo(v.estado) === 'disponible').length} disponibles
                </span>
                <span className="stat-badge ruta">
                  {vehiculos.filter(v => mapearEstadoVehiculo(v.estado) === 'en_ruta').length} en ruta
                </span>
              </div>
            </div>

            <div className="vehiculos-grid">
              {vehiculos.length === 0 ? (
                <div className="no-data-message">
                  <p>No hay vehículos registrados</p>
                </div>
              ) : (
                vehiculos.map(vehiculo => {
                  const tipoVehiculo = mapearTipoVehiculo(vehiculo.tipo);
                  const estadoVehiculo = mapearEstadoVehiculo(vehiculo.estado);
                  
                  return (
                    <div key={vehiculo.id} className={`vehiculo-card ${estadoVehiculo}`}>
                      <div className="vehiculo-header">
                        <div className="vehiculo-icono-tipo">
                          <div className="vehiculo-icono">
                            {configVehiculos[tipoVehiculo].icono}
                          </div>
                          <div className="vehiculo-tipo">
                            {configVehiculos[tipoVehiculo].nombre}
                          </div>
                        </div>
                        <div className={`estado-badge ${getEstadoColor(estadoVehiculo)}`}>
                          {getEstadoTexto(estadoVehiculo)}
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
                          <span className="detalle-value">{vehiculo.capacidadKg} kg</span>
                        </div>
                        <div className="detalle-fila">
                          <span className="detalle-label">Viajes/Mes:</span>
                          <span className="detalle-value">{vehiculo.viajesMes || 0}</span>
                        </div>
                        <div className="detalle-fila">
                          <span className="detalle-label">Ingresos:</span>
                          <span className="detalle-value">{formatCurrency(vehiculo.ingresosMes || 0)}</span>
                        </div>
                        <div className="detalle-fila">
                          <span className="detalle-label">Ubicación:</span>
                          <span className="detalle-value ubicacion">{vehiculo.ubicacion || 'N/A'}</span>
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
                  );
                })
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
                  {cotizaciones.filter(c => mapearEstadoCotizacion(c.estado) === 'completado').length} completados
                </span>
                <span className="stat-badge proceso">
                  {cotizaciones.filter(c => mapearEstadoCotizacion(c.estado) === 'en_proceso').length} en proceso
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
                      cotizaciones.map(cotizacion => {
                        const tipoVehiculo = mapearTipoVehiculo(cotizacion.tipoVehiculo);
                        const estadoCotizacion = mapearEstadoCotizacion(cotizacion.estado);
                        const fechaFormateada = cotizacion.fecha ? new Date(cotizacion.fecha).toLocaleDateString('es-CO') : 'N/A';
                        
                        return (
                          <tr key={cotizacion.id}>
                            <td>{fechaFormateada}</td>
                            <td>
                              <strong>{cotizacion.producto}</strong>
                              <br />
                              <small>{cotizacion.pesoKg} kg</small>
                            </td>
                            <td>
                              <span className="badge vehiculo-badge">
                                {configVehiculos[tipoVehiculo]?.icono} {configVehiculos[tipoVehiculo]?.nombre}
                              </span>
                            </td>
                            <td>
                              {cotizacion.origen} → {cotizacion.destino}
                            </td>
                            <td>{cotizacion.distanciaKm} km</td>
                            <td className="fw-bold text-success">
                              {cotizacion.total > 0 ? formatCurrency(cotizacion.total) : 'N/A'}
                            </td>
                            <td>
                              <span className={`badge badge-estado estado-${getEstadoCotizacionColor(estadoCotizacion)}`}>
                                {estadoCotizacion.replace('_', ' ')}
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
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      {mostrarDetalleCotizacion && cotizacionSeleccionada && (() => {
        const tipoVehiculo = mapearTipoVehiculo(cotizacionSeleccionada.tipoVehiculo);
        const estadoCotizacion = mapearEstadoCotizacion(cotizacionSeleccionada.estado);
        const fechaFormateada = cotizacionSeleccionada.fecha ? 
          new Date(cotizacionSeleccionada.fecha).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }) : 'N/A';

        return (
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
                        <span className="detalle-value">{fechaFormateada}</span>
                      </div>
                      <div className="detalle-item">
                        <span className="detalle-label">Producto:</span>
                        <span className="detalle-value">{cotizacionSeleccionada.producto}</span>
                      </div>
                      <div className="detalle-item">
                        <span className="detalle-label">Peso:</span>
                        <span className="detalle-value">{cotizacionSeleccionada.pesoKg} kg</span>
                      </div>
                      <div className="detalle-item">
                        <span className="detalle-label">Vehículo:</span>
                        <span className="detalle-value">
                          {configVehiculos[tipoVehiculo]?.icono} 
                          {configVehiculos[tipoVehiculo]?.nombre}
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
                        <span className="detalle-value">{cotizacionSeleccionada.distanciaKm} km</span>
                      </div>
                      <div className="detalle-item">
                        <span className="detalle-label">Estado:</span>
                        <span className={`badge badge-estado estado-${getEstadoCotizacionColor(estadoCotizacion)}`}>
                          {estadoCotizacion.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {estadoCotizacion !== 'rechazado' && cotizacionSeleccionada.detalles ? (
                    <div className="detalle-seccion">
                      <h4>💰 Desglose de Costos</h4>
                      <div className="costos-lista">
                        <div className="costo-item">
                          <span>Tarifa Base:</span>
                          <span>{formatCurrency(cotizacionSeleccionada.detalles.base || 0)}</span>
                        </div>
                        <div className="costo-item">
                          <span>Por Distancia:</span>
                          <span>{formatCurrency(cotizacionSeleccionada.detalles.distancia || 0)}</span>
                        </div>
                        <div className="costo-item">
                          <span>Seguro (2%):</span>
                          <span>{formatCurrency(cotizacionSeleccionada.detalles.seguro || 0)}</span>
                        </div>
                        <div className="costo-item">
                          <span>Peajes Estimados:</span>
                          <span>{formatCurrency(cotizacionSeleccionada.detalles.peajes || 0)}</span>
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
                            <span>+{((cotizacionSeleccionada.detalles.factorCarga - 1) * 100).toFixed(0)}%</span>
                          </div>
                        )}
                        <div className="costo-item subtotal">
                          <span>Subtotal:</span>
                          <span>{formatCurrency(cotizacionSeleccionada.detalles.subtotal || 0)}</span>
                        </div>
                        <div className="costo-item">
                          <span>IVA (19%):</span>
                          <span>{formatCurrency(cotizacionSeleccionada.detalles.iva || 0)}</span>
                        </div>
                        <div className="costo-item total">
                          <span>TOTAL:</span>
                          <span className="texto-total">{formatCurrency(cotizacionSeleccionada.total || 0)}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="detalle-seccion">
                      <h4>❌ Motivo de Rechazo</h4>
                      <div className="motivo-rechazo">
                        <p>{cotizacionSeleccionada.motivoRechazo || 'No especificado'}</p>
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
        );
      })()}

      {mostrarModalError && (
        <ModalConexionFallida 
          onClose={() => setMostrarModalError(false)}
        />
      )}
    </div>
  );
};

export default Gestras;