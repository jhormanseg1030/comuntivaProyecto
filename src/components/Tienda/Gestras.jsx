import React, { useState, useEffect } from 'react';
import './Gestras.css';
import logoConmutiva from '../imagenes/logo.jpg';

const Gestras = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [cotizaciones, setCotizaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vistaActiva, setVistaActiva] = useState('cotizador'); // 'cotizador', 'vehiculos', 'historial'

  // Estado para el cotizador
  const [datosEnvio, setDatosEnvio] = useState({
    producto: '',
    peso: '',
    origen: '',
    destino: '',
    distancia: '',
    urgencia: 'estandar'
  });

  // Configuración de vehículos
  const configVehiculos = {
    furgon: {
      nombre: 'Furgón',
      icono: '🚚',
      capacidadKg: 1500,
      tarifaBase: 80000,
      costoKm: 1200,
      maxDistancia: 300,
      descripcion: 'Ideal para cargas medianas y productos empaquetados'
    },
    van: {
      nombre: 'Van de Carga',
      icono: '🚐',
      capacidadKg: 3000,
      tarifaBase: 120000,
      costoKm: 1800,
      maxDistancia: 500,
      descripcion: 'Perfecto para grandes volúmenes y productos a granel'
    }
  };

  // Datos de ejemplo para vehículos
  const vehiculosData = [
    {
      id: 1,
      tipo: 'furgon',
      nombre: 'Furgón 001',
      placa: 'ABC123',
      conductor: 'Carlos Rodríguez',
      estado: 'disponible',
      capacidad: '1,500 kg',
      ubicacion: 'En base',
      viajesMes: 12,
      ingresosMes: 3200000,
      mantenimiento: false
    },
    {
      id: 2,
      tipo: 'furgon',
      nombre: 'Furgón 002',
      placa: 'DEF456',
      conductor: 'Ana Gómez',
      estado: 'en_ruta',
      capacidad: '1,500 kg',
      ubicacion: 'Ruta Bogotá-Medellín',
      viajesMes: 8,
      ingresosMes: 2100000,
      mantenimiento: false
    },
    {
      id: 3,
      tipo: 'van',
      nombre: 'Van 001',
      placa: 'GHI789',
      conductor: 'Miguel Torres',
      estado: 'disponible',
      capacidad: '3,000 kg',
      ubicacion: 'En base',
      viajesMes: 15,
      ingresosMes: 4500000,
      mantenimiento: false
    },
    {
      id: 4,
      tipo: 'van',
      nombre: 'Van 002',
      placa: 'JKL012',
      conductor: 'Laura Martínez',
      estado: 'mantenimiento',
      capacidad: '3,000 kg',
      ubicacion: 'Taller mecánico',
      viajesMes: 10,
      ingresosMes: 2800000,
      mantenimiento: true
    }
  ];

  // Datos de ejemplo para historial de cotizaciones
  const cotizacionesData = [
    {
      id: 1,
      fecha: '2024-01-15',
      producto: 'Tomates',
      peso: 1200,
      vehiculo: 'furgon',
      origen: 'Bogotá',
      destino: 'Medellín',
      distancia: 250,
      total: 514794,
      estado: 'completado'
    },
    {
      id: 2,
      fecha: '2024-01-14',
      producto: 'Zanahorias',
      peso: 2800,
      vehiculo: 'van',
      origen: 'Bogotá',
      destino: 'Cali',
      distancia: 480,
      total: 1785809,
      estado: 'en_proceso'
    },
    {
      id: 3,
      fecha: '2024-01-13',
      producto: 'Lechugas',
      peso: 800,
      vehiculo: 'furgon',
      origen: 'Bogotá',
      destino: 'Cartagena',
      distancia: 1100,
      total: 0,
      estado: 'rechazado'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setVehiculos(vehiculosData);
      setCotizaciones(cotizacionesData);
      setLoading(false);
    }, 1000);
  }, []);

  // Función para recomendar vehículo (sin volumen)
  const recomendarVehiculo = (peso, distancia) => {
    if (peso <= configVehiculos.furgon.capacidadKg && 
        distancia <= configVehiculos.furgon.maxDistancia) {
      return 'furgon';
    } else if (peso <= configVehiculos.van.capacidadKg && 
               distancia <= configVehiculos.van.maxDistancia) {
      return 'van';
    } else {
      return null;
    }
  };

  // Función para calcular flete (sin volumen)
  const calcularFlete = (vehiculoTipo, distancia, peso, urgencia) => {
    const vehiculo = configVehiculos[vehiculoTipo];
    if (!vehiculo) return null;

    const costoDistancia = distancia * vehiculo.costoKm;
    const seguro = (vehiculo.tarifaBase + costoDistancia) * 0.02;
    const peajes = calcularPeajes(distancia);
    const costoUrgencia = calcularCostoUrgencia(urgencia, costoDistancia);
    const factorCarga = peso > vehiculo.capacidadKg * 0.8 ? 1.2 : 1;

    const subtotal = (vehiculo.tarifaBase + costoDistancia + seguro + peajes + costoUrgencia) * factorCarga;
    const iva = subtotal * 0.19;
    const total = subtotal + iva;

    return {
      base: vehiculo.tarifaBase,
      distancia: costoDistancia,
      seguro,
      peajes,
      urgencia: costoUrgencia,
      factorCarga,
      subtotal,
      iva,
      total: Math.round(total)
    };
  };

  // Funciones auxiliares
  const calcularPeajes = (distancia) => {
    return Math.round(distancia * 180); // $180 por km estimado en peajes
  };

  const calcularCostoUrgencia = (urgencia, costoDistancia) => {
    switch(urgencia) {
      case 'urgente': return costoDistancia * 0.5;
      case 'express': return costoDistancia * 1.0;
      default: return 0;
    }
  };

  // Calcular cotización actual (sin volumen)
  const vehiculoRecomendado = recomendarVehiculo(
    parseInt(datosEnvio.peso) || 0,
    parseInt(datosEnvio.distancia) || 0
  );

  const cotizacionActual = vehiculoRecomendado ? 
    calcularFlete(
      vehiculoRecomendado,
      parseInt(datosEnvio.distancia) || 0,
      parseInt(datosEnvio.peso) || 0,
      datosEnvio.urgencia
    ) : null;

  const handleInputChange = (field, value) => {
    setDatosEnvio(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const confirmarEnvio = () => {
    if (cotizacionActual && vehiculoRecomendado) {
      const nuevaCotizacion = {
        id: cotizaciones.length + 1,
        fecha: new Date().toISOString().split('T')[0],
        producto: datosEnvio.producto,
        peso: parseInt(datosEnvio.peso),
        vehiculo: vehiculoRecomendado,
        origen: datosEnvio.origen,
        destino: datosEnvio.destino,
        distancia: parseInt(datosEnvio.distancia),
        total: cotizacionActual.total,
        estado: 'pendiente'
      };
      
      setCotizaciones(prev => [nuevaCotizacion, ...prev]);
      alert('✅ Cotización confirmada y agregada al historial');
      
      // Reset form
      setDatosEnvio({
        producto: '',
        peso: '',
        origen: '',
        destino: '',
        distancia: '',
        urgencia: 'estandar'
      });
    }
  };

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
            <p>Gestión de fletes con Furgón y Van de Carga</p>
          </div>
        </div>
      </div>

      {/* Navegación */}
      <div className="navegacion-principal">
        <button 
          className={`nav-btn ${vistaActiva === 'cotizador' ? 'active' : ''}`}
          onClick={() => setVistaActiva('cotizador')}
        >
          🧮 Cotizador
        </button>
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

      {/* Stats Grid */}
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

      {/* Contenido Principal */}
      <div className="dashboard-main">
        
        {/* VISTA COTIZADOR */}
        {vistaActiva === 'cotizador' && (
          <div className="cotizador-section">
            <div className="seccion-header">
              <h2>🧮 Cotizador de Fletes</h2>
              <p>Calcula el costo de transporte para tus productos agrícolas</p>
            </div>

            <div className="cotizador-grid">
              {/* Formulario de Datos */}
              <div className="formulario-cotizador">
                <h3>📋 Datos del Envío</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Producto Agrícola:</label>
                    <input 
                      type="text" 
                      value={datosEnvio.producto}
                      onChange={(e) => handleInputChange('producto', e.target.value)}
                      placeholder="Ej: Tomates, Zanahorias..."
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Peso (kg):</label>
                    <input 
                      type="number" 
                      value={datosEnvio.peso}
                      onChange={(e) => handleInputChange('peso', e.target.value)}
                      placeholder="Peso en kilogramos"
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Origen:</label>
                    <input 
                      type="text" 
                      value={datosEnvio.origen}
                      onChange={(e) => handleInputChange('origen', e.target.value)}
                      placeholder="Ciudad de origen"
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Destino:</label>
                    <input 
                      type="text" 
                      value={datosEnvio.destino}
                      onChange={(e) => handleInputChange('destino', e.target.value)}
                      placeholder="Ciudad de destino"
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Distancia (km):</label>
                    <input 
                      type="number" 
                      value={datosEnvio.distancia}
                      onChange={(e) => handleInputChange('distancia', e.target.value)}
                      placeholder="Distancia en kilómetros"
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group full-width">
                    <label>Nivel de Urgencia:</label>
                    <div className="urgencia-options">
                      <label className="urgencia-option">
                        <input 
                          type="radio" 
                          value="estandar"
                          checked={datosEnvio.urgencia === 'estandar'}
                          onChange={(e) => handleInputChange('urgencia', e.target.value)}
                        />
                        <span>Estándar (3-5 días)</span>
                      </label>
                      <label className="urgencia-option">
                        <input 
                          type="radio" 
                          value="urgente"
                          checked={datosEnvio.urgencia === 'urgente'}
                          onChange={(e) => handleInputChange('urgencia', e.target.value)}
                        />
                        <span>Urgente (24-48h) +50%</span>
                      </label>
                      <label className="urgencia-option">
                        <input 
                          type="radio" 
                          value="express"
                          checked={datosEnvio.urgencia === 'express'}
                          onChange={(e) => handleInputChange('urgencia', e.target.value)}
                        />
                        <span>Express (mismo día) +100%</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resultado de Cotización */}
              <div className="resultado-cotizacion">
                <h3>💡 Recomendación del Sistema</h3>
                
                {vehiculoRecomendado ? (
                  <div className="recomendacion-vehiculo">
                    <div className="vehiculo-recomendado">
                      <div className="vehiculo-icono">
                        {configVehiculos[vehiculoRecomendado].icono}
                      </div>
                      <div className="vehiculo-info">
                        <h4>{configVehiculos[vehiculoRecomendado].nombre}</h4>
                        <p>{configVehiculos[vehiculoRecomendado].descripcion}</p>
                        <div className="capacidad-info">
                          <span>Capacidad: {configVehiculos[vehiculoRecomendado].capacidadKg} kg</span>
                        </div>
                      </div>
                    </div>

                    {/* Desglose de Costos */}
                    {cotizacionActual && (
                      <div className="desglose-costos">
                        <h4>💰 Desglose de Costos</h4>
                        <div className="costos-lista">
                          <div className="costo-item">
                            <span>Tarifa Base:</span>
                            <span>{formatCurrency(cotizacionActual.base)}</span>
                          </div>
                          <div className="costo-item">
                            <span>Por Distancia ({datosEnvio.distancia}km):</span>
                            <span>{formatCurrency(cotizacionActual.distancia)}</span>
                          </div>
                          <div className="costo-item">
                            <span>Seguro (2%):</span>
                            <span>{formatCurrency(cotizacionActual.seguro)}</span>
                          </div>
                          <div className="costo-item">
                            <span>Peajes Estimados:</span>
                            <span>{formatCurrency(cotizacionActual.peajes)}</span>
                          </div>
                          {cotizacionActual.urgencia > 0 && (
                            <div className="costo-item">
                              <span>Servicio {datosEnvio.urgencia}:</span>
                              <span>{formatCurrency(cotizacionActual.urgencia)}</span>
                            </div>
                          )}
                          {cotizacionActual.factorCarga > 1 && (
                            <div className="costo-item">
                              <span>Recargo carga pesada:</span>
                              <span>+20%</span>
                            </div>
                          )}
                          <div className="costo-item subtotal">
                            <span>Subtotal:</span>
                            <span>{formatCurrency(cotizacionActual.subtotal)}</span>
                          </div>
                          <div className="costo-item">
                            <span>IVA (19%):</span>
                            <span>{formatCurrency(cotizacionActual.iva)}</span>
                          </div>
                          <div className="costo-item total">
                            <span>TOTAL:</span>
                            <span>{formatCurrency(cotizacionActual.total)}</span>
                          </div>
                        </div>

                        <button 
                          className="btn btn-success btn-confirmar"
                          onClick={confirmarEnvio}
                        >
                          ✅ Confirmar Envío
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="sin-recomendacion">
                    <p>⚠️ Complete los datos del envío para obtener una cotización</p>
                    {datosEnvio.peso > 0 && datosEnvio.distancia > 0 && (
                      <p className="error">
                        No hay vehículo disponible para estos parámetros. 
                        Considere dividir la carga o usar otro medio de transporte.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* VISTA VEHÍCULOS */}
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
              {vehiculos.map(vehiculo => (
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
                    <button className="btn btn-sm btn-track">
                      📍 Rastrear
                    </button>
                    <button className="btn btn-sm btn-edit">
                      ✏️ Editar
                    </button>
                    {vehiculo.mantenimiento && (
                      <button className="btn btn-sm btn-warning">
                        🔧 Mantenimiento
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA HISTORIAL */}
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
                  {cotizaciones.map(cotizacion => (
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
                        <span className={`badge estado-${getEstadoCotizacionColor(cotizacion.estado)}`}>
                          {cotizacion.estado}
                        </span>
                      </td>
                      <td>
                        <div className="acciones-cotizacion">
                          <button className="btn btn-sm btn-info">
                            👁️ Ver
                          </button>
                          <button className="btn btn-sm btn-warning">
                            ✏️ Editar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gestras;