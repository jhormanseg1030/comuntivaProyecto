import React, { useState } from 'react';
import './GestVende.css';

const GestVende = () => {
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [filtroNivel, setFiltroNivel] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  const [vendedores, setVendedores] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan@email.com",
      permisos: "Vendedor Básico",
      estado: "Activo",
      calificacion: 4.8,
      productos: 15,
      ventas: 45,
      sanciones: 0,
      premios: ["🥉 Vendedor Destacado"],
      fechaRegistro: "2024-01-15"
    },
    {
      id: 2,
      nombre: "María González",
      email: "maria@email.com",
      permisos: "Vendedor Avanzado",
      estado: "Activo",
      calificacion: 4.2,
      productos: 32,
      ventas: 128,
      sanciones: 1,
      premios: ["🥈 Top Ventas"],
      fechaRegistro: "2024-01-10"
    },
    {
      id: 3,
      nombre: "Carlos López",
      email: "carlos@email.com",
      permisos: "Vendedor Básico",
      estado: "Suspendido",
      calificacion: 3.5,
      productos: 8,
      ventas: 12,
      sanciones: 3,
      premios: [],
      fechaRegistro: "2024-01-05"
    },
    {
      id: 4,
      nombre: "Ana Rodríguez",
      email: "ana@email.com",
      permisos: "Vendedor Premium",
      estado: "Activo",
      calificacion: 4.9,
      productos: 45,
      ventas: 210,
      sanciones: 0,
      premios: ["🥇 Vendedor del Mes", "💎 Certificado Calidad"],
      fechaRegistro: "2023-12-20"
    }
  ]);

  const aplicarSancion = (vendedorId) => {
    const vendedor = vendedores.find(v => v.id === vendedorId);
    if (vendedor) {
      const nuevasSanciones = vendedor.sanciones + 1;
      const nuevoEstado = nuevasSanciones >= 3 ? 'Suspendido' : vendedor.estado;
      
      setVendedores(prev => prev.map(v => 
        v.id === vendedorId 
          ? { ...v, sanciones: nuevasSanciones, estado: nuevoEstado }
          : v
      ));
      
      alert(`Sanción aplicada a ${vendedor.nombre}. Total sanciones: ${nuevasSanciones}`);
    }
  };

  const aplicarPremio = (vendedorId, tipoPremio) => {
    const vendedor = vendedores.find(v => v.id === vendedorId);
    if (vendedor) {
      setVendedores(prev => prev.map(v => 
        v.id === vendedorId 
          ? { ...v, premios: [...v.premios, tipoPremio] }
          : v
      ));
      
      alert(`Premio "${tipoPremio}" asignado a ${vendedor.nombre}`);
    }
  };

  const quitarSuspension = (vendedorId) => {
    setVendedores(prev => prev.map(v => 
      v.id === vendedorId 
        ? { ...v, estado: 'Activo', sanciones: 0 }
        : v
    ));
  };

  const vendedoresFiltrados = vendedores.filter(vendedor => {
    const coincideEstado = filtroEstado === 'todos' || vendedor.estado === filtroEstado;
    const coincideNivel = filtroNivel === 'todos' || vendedor.permisos.includes(filtroNivel);
    const coincideBusqueda = vendedor.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                           vendedor.email.toLowerCase().includes(busqueda.toLowerCase());
    
    return coincideEstado && coincideNivel && coincideBusqueda;
  });

  return (
    <div className="gestion-vendedores">
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h2>👥 Gestión de Vendedores</h2>
            <p className="subtitulo">Administra, premia y sanciona a los vendedores de la plataforma</p>
          </div>
          <div className="card-body">
            
            <div className="filtros-avanzados">
              <h4>🔍 Filtros Avanzados</h4>
              <div className="filtros-grid">
                <div className="filtro-group">
                  <label>Buscar por nombre o email:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ej: Juan Pérez..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
                <div className="filtro-group">
                  <label>Filtrar por estado:</label>
                  <select 
                    className="form-select"
                    value={filtroEstado}
                    onChange={(e) => setFiltroEstado(e.target.value)}
                  >
                    <option value="todos">Todos los estados</option>
                    <option value="Activo">Activo</option>
                    <option value="Suspendido">Suspendido</option>
                    <option value="Pendiente">Pendiente</option>
                  </select>
                </div>
                <div className="filtro-group">
                  <label>Filtrar por nivel:</label>
                  <select 
                    className="form-select"
                    value={filtroNivel}
                    onChange={(e) => setFiltroNivel(e.target.value)}
                  >
                    <option value="todos">Todos los niveles</option>
                    <option value="Básico">Básico</option>
                    <option value="Avanzado">Avanzado</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="seccion-vendedores">
              <div className="seccion-header">
                <h4>📊 Lista de Vendedores ({vendedoresFiltrados.length})</h4>
                <div className="estadisticas-rapidas">
                  <span className="estadistica">Activos: {vendedores.filter(v => v.estado === 'Activo').length}</span>
                  <span className="estadistica">Suspendidos: {vendedores.filter(v => v.estado === 'Suspendido').length}</span>
                  <span className="estadistica">Total: {vendedores.length}</span>
                </div>
              </div>
              
              <div className="table-responsive">
                <table className="table tabla-vendedores">
                  <thead>
                    <tr>
                      <th>Vendedor</th>
                      <th>Contacto</th>
                      <th>Nivel</th>
                      <th>Estadísticas</th>
                      <th>Estado</th>
                      <th>Sanciones/Premios</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendedoresFiltrados.map(vendedor => (
                      <tr key={vendedor.id} className={vendedor.estado === 'Suspendido' ? 'fila-suspendida' : ''}>
                        <td>
                          <div className="info-vendedor">
                            <strong>{vendedor.nombre}</strong>
                            <small>Registro: {vendedor.fechaRegistro}</small>
                          </div>
                        </td>
                        <td>{vendedor.email}</td>
                        <td>
                          <span className={`badge nivel-${vendedor.permisos.toLowerCase().replace(' ', '-')}`}>
                            {vendedor.permisos}
                          </span>
                        </td>
                        <td>
                          <div className="estadisticas-vendedor">
                            <span>⭐ {vendedor.calificacion}</span>
                            <span>📦 {vendedor.productos}</span>
                            <span>💰 {vendedor.ventas}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`badge estado-${vendedor.estado.toLowerCase()}`}>
                            {vendedor.estado}
                            {vendedor.sanciones > 0 && ` (${vendedor.sanciones})`}
                          </span>
                        </td>
                        <td>
                          <div className="sanciones-premios">
                            {vendedor.premios.length > 0 && (
                              <div className="premios">
                                {vendedor.premios.map((premio, index) => (
                                  <span key={index} className="premio-badge">{premio}</span>
                                ))}
                              </div>
                            )}
                            {vendedor.sanciones > 0 && (
                              <div className="sanciones">
                                <span className="sancion-badge">⚠️ {vendedor.sanciones} sanción(es)</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="acciones-vendedor">
                            <button 
                              className="btn btn-info btn-pequeno"
                              onClick={() => document.getElementById(`modal-premios-${vendedor.id}`).style.display = 'block'}
                            >
                              🏆 Premiar
                            </button>
                            <button 
                              className="btn btn-warning btn-pequeno"
                              onClick={() => aplicarSancion(vendedor.id)}
                            >
                              ⚠️ Sancionar
                            </button>
                            {vendedor.estado === 'Suspendido' && (
                              <button 
                                className="btn btn-success btn-pequeno"
                                onClick={() => quitarSuspension(vendedor.id)}
                              >
                                ✅ Reactivar
                              </button>
                            )}
                            <button className="btn btn-peligro btn-pequeno">
                              🗑️ Eliminar
                            </button>
                          </div>

                          <div id={`modal-premios-${vendedor.id}`} className="modal">
                            <div className="modal-content">
                              <span className="close" onClick={() => document.getElementById(`modal-premios-${vendedor.id}`).style.display = 'none'}>&times;</span>
                              <h3>🏆 Asignar Premio a {vendedor.nombre}</h3>
                              <div className="opciones-premios">
                                <button onClick={() => aplicarPremio(vendedor.id, "🥉 Vendedor Destacado")} className="btn btn-premio">
                                  🥉 Vendedor Destacado
                                </button>
                                <button onClick={() => aplicarPremio(vendedor.id, "🥈 Top Ventas")} className="btn btn-premio">
                                  🥈 Top Ventas
                                </button>
                                <button onClick={() => aplicarPremio(vendedor.id, "🥇 Vendedor del Mes")} className="btn btn-premio">
                                  🥇 Vendedor del Mes
                                </button>
                                <button onClick={() => aplicarPremio(vendedor.id, "💎 Certificado Calidad")} className="btn btn-premio">
                                  💎 Certificado Calidad
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GestVende;