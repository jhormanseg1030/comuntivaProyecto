import React, { useState, useEffect } from 'react';
import './Gestras.css';
import logoConmutiva from '../imagenes/logo.jpg';

const Gestras = () => {
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('todas');
  const [vehiculos, setVehiculos] = useState([]);
  const [domiciliosActivos, setDomiciliosActivos] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const vehiculosData = [
    {
      id: 1,
      tipo: 'furgon',
      nombre: 'Furgón Norte 01',
      placa: 'ABC123',
      sucursal: 'Sucursal Norte',
      conductor: 'Carlos Rodríguez',
      estado: 'disponible',
      capacidad: '500 kg',
      ubicacion: 'En sucursal',
      mantenimiento: false
    },
    {
      id: 2,
      tipo: 'moto',
      nombre: 'Moto Sur 01',
      placa: 'DEF456',
      sucursal: 'Sucursal Sur',
      conductor: 'Ana Gómez',
      estado: 'en_ruta',
      capacidad: '50 kg',
      ubicacion: 'En reparto - Calle 100',
      mantenimiento: false
    },
    {
      id: 3,
      tipo: 'bicicleta',
      nombre: 'Bici Centro 01',
      placa: '-',
      sucursal: 'Sucursal Centro',
      conductor: 'Miguel Torres',
      estado: 'disponible',
      capacidad: '20 kg',
      ubicacion: 'En sucursal',
      mantenimiento: false
    },
    {
      id: 4,
      tipo: 'furgon',
      nombre: 'Furgón Sur 01',
      placa: 'GHI789',
      sucursal: 'Sucursal Sur',
      conductor: 'Laura Martínez',
      estado: 'mantenimiento',
      capacidad: '500 kg',
      ubicacion: 'Taller mecánico',
      mantenimiento: true
    },
    {
      id: 5,
      tipo: 'moto',
      nombre: 'Moto Norte 02',
      placa: 'JKL012',
      sucursal: 'Sucursal Norte',
      conductor: 'Pedro López',
      estado: 'disponible',
      capacidad: '50 kg',
      ubicacion: 'En sucursal',
      mantenimiento: false
    },
    {
      id: 6,
      tipo: 'bicicleta',
      nombre: 'Bici Sur 02',
      placa: '-',
      sucursal: 'Sucursal Sur',
      conductor: 'Sofia Ramírez',
      estado: 'en_ruta',
      capacidad: '20 kg',
      ubicacion: 'En reparto - Carrera 45',
      mantenimiento: false
    }
  ];

 
  const domiciliosData = [
    {
      id: 1,
      pedido: 'PED-001',
      sucursal: 'Sucursal Norte',
      vehiculo: 'Moto Norte 02',
      conductor: 'Pedro López',
      destino: 'Carrera 45 # 12-34',
      estado: 'en_camino',
      tiempoEstimado: '15 min',
      cliente: 'María González',
      telefono: '3001234567'
    },
    {
      id: 2,
      pedido: 'PED-002',
      sucursal: 'Sucursal Sur',
      vehiculo: 'Bici Sur 02',
      conductor: 'Sofia Ramírez',
      destino: 'Calle 100 # 45-67',
      estado: 'preparando',
      tiempoEstimado: '5 min',
      cliente: 'Carlos Mendoza',
      telefono: '3109876543'
    },
    {
      id: 3,
      pedido: 'PED-003',
      sucursal: 'Sucursal Centro',
      vehiculo: 'Bici Centro 01',
      conductor: 'Miguel Torres',
      destino: 'Avenida 68 # 23-45',
      estado: 'en_camino',
      tiempoEstimado: '8 min',
      cliente: 'Ana Rodríguez',
      telefono: '3205558888'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setVehiculos(vehiculosData);
      setDomiciliosActivos(domiciliosData);
      setLoading(false);
    }, 1000);
  }, []);

  const filtrarVehiculos = sucursalSeleccionada === 'todas' 
    ? vehiculos 
    : vehiculos.filter(v => v.sucursal === sucursalSeleccionada);

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

  const getIconoVehiculo = (tipo) => {
    switch(tipo) {
      case 'furgon': return '🚚';
      case 'moto': return '🏍️';
      case 'bicicleta': return '🚲';
      default: return '🚗';
    }
  };

  const getTipoTexto = (tipo) => {
    switch(tipo) {
      case 'furgon': return 'Furgón';
      case 'moto': return 'Moto';
      case 'bicicleta': return 'Bicicleta';
      default: return tipo;
    }
  };

  if (loading) {
    return (
      <div className="transportadora-loading">
        <div className="loading-spinner"></div>
        <p>Cargando información de transporte...</p>
      </div>
    );
  }

  return (
    <div className="transportadora-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <img src={logoConmutiva} alt="Conmutiva" className="header-logo" />
          <div className="header-info">
            <h1>🚚 Gestión de Transporte</h1>
            <p>Control de flota y domicilios en tiempo real</p>
          </div>
        </div>
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
          <div className="stat-icon">🏍️</div>
          <div className="stat-info">
            <h3>{vehiculos.filter(v => v.tipo === 'moto').length}</h3>
            <p>Motos</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🚲</div>
          <div className="stat-info">
            <h3>{vehiculos.filter(v => v.tipo === 'bicicleta').length}</h3>
            <p>Bicicletas</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-info">
            <h3>{domiciliosActivos.length}</h3>
            <p>Domicilios Activos</p>
          </div>
        </div>
      </div>

      {/* Filtro de Sucursal - Se mantiene igual */}
      <div className="filtro-section">
        <div className="filtro-content">
          <label><strong>Filtrar por Sucursal:</strong></label>
          <select 
            value={sucursalSeleccionada} 
            onChange={(e) => setSucursalSeleccionada(e.target.value)}
            className="sucursal-select"
          >
            <option value="todas">Todas las Sucursales</option>
            <option value="Sucursal Norte">Sucursal Norte</option>
            <option value="Sucursal Sur">Sucursal Sur</option>
            <option value="Sucursal Centro">Sucursal Centro</option>
          </select>
        </div>
      </div>

      <div className="dashboard-main">
        
        <div className="vehiculos-section">
          <div className="seccion-header">
            <h2>🛞 Flota de Vehículos</h2>
            <div className="header-stats">
              <span className="stat-badge total">{filtrarVehiculos.length} total</span>
              <span className="stat-badge disponible">
                {filtrarVehiculos.filter(v => v.estado === 'disponible').length} disponibles
              </span>
              <span className="stat-badge ruta">
                {filtrarVehiculos.filter(v => v.estado === 'en_ruta').length} en ruta
              </span>
            </div>
          </div>

          <div className="vehiculos-grid">
            {filtrarVehiculos.map(vehiculo => (
              <div key={vehiculo.id} className={`vehiculo-card ${vehiculo.estado}`}>
                <div className="vehiculo-header">
                  <div className="vehiculo-icono-tipo">
                    <div className="vehiculo-icono">
                      {getIconoVehiculo(vehiculo.tipo)}
                    </div>
                    <div className="vehiculo-tipo">
                      {getTipoTexto(vehiculo.tipo)}
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
                    <span className="detalle-label">Sucursal:</span>
                    <span className="detalle-value">{vehiculo.sucursal}</span>
                  </div>
                  <div className="detalle-fila">
                    <span className="detalle-label">Conductor:</span>
                    <span className="detalle-value">{vehiculo.conductor}</span>
                  </div>
                  <div className="detalle-fila">
                    <span className="detalle-label">Capacidad:</span>
                    <span className="detalle-value">{vehiculo.capacidad}</span>
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

        <div className="domicilios-section">
          <div className="seccion-header">
            <h2>📦 Domicilios Activos</h2>
            <div className="header-stats">
              <span className="stat-badge total">{domiciliosActivos.length} activos</span>
              <span className="stat-badge camino">
                {domiciliosActivos.filter(d => d.estado === 'en_camino').length} en camino
              </span>
            </div>
          </div>

          <div className="domicilios-lista">
            {domiciliosActivos.map(domicilio => (
              <div key={domicilio.id} className="domicilio-card">
                <div className="domicilio-header">
                  <div className="domicilio-info-principal">
                    <div className="pedido-numero">{domicilio.pedido}</div>
                    <div className="sucursal-tag">{domicilio.sucursal}</div>
                  </div>
                  <div className={`estado-dom ${domicilio.estado}`}>
                    {domicilio.estado === 'en_camino' ? '🚚 En Camino' : '📋 Preparando'}
                  </div>
                </div>
                
                <div className="domicilio-detalles">
                  <div className="detalle-fila">
                    <span className="detalle-label">Cliente:</span>
                    <span className="detalle-value">{domicilio.cliente}</span>
                  </div>
                  <div className="detalle-fila">
                    <span className="detalle-label">Teléfono:</span>
                    <span className="detalle-value">{domicilio.telefono}</span>
                  </div>
                  <div className="detalle-fila">
                    <span className="detalle-label">Vehículo:</span>
                    <span className="detalle-value vehiculo">{domicilio.vehiculo}</span>
                  </div>
                  <div className="detalle-fila">
                    <span className="detalle-label">Conductor:</span>
                    <span className="detalle-value">{domicilio.conductor}</span>
                  </div>
                  <div className="detalle-fila">
                    <span className="detalle-label">Destino:</span>
                    <span className="detalle-value destino">{domicilio.destino}</span>
                  </div>
                  <div className="detalle-fila">
                    <span className="detalle-label">Tiempo estimado:</span>
                    <span className="detalle-value tiempo">{domicilio.tiempoEstimado}</span>
                  </div>
                </div>
                
                <div className="domicilio-acciones">
                  <button className="btn btn-sm btn-success">
                    ✅ Completar
                  </button>
                  <button className="btn btn-sm btn-call">
                    📞 Llamar
                  </button>
                  <button className="btn btn-sm btn-track">
                    🗺️ Ruta
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="acciones-rapidas">
            <h4>⚡ Acciones Rápidas</h4>
            <div className="acciones-grid">
              <button className="btn btn-primary">
                ➕ Agregar Vehículo
              </button>
              <button className="btn btn-success">
                📦 Nuevo Domicilio
              </button>
              <button className="btn btn-info">
                📊 Reportes
              </button>
              <button className="btn btn-warning">
                🔧 Mantenimiento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gestras;
