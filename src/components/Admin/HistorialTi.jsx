import React, { useState } from 'react';

function HistorialTi() {
    const [reporteActivo, setReporteActivo] = useState('usuarios'); 
    const [mesSeleccionado, setMesSeleccionado] = useState('');

    const datosUsuarios = [];
    const datosAceptados = [];
    const datosRechazados = [];

    const metricas = {
        usuarios: {
            total: "0",
            nuevosEsteMes: "0",
            activos: "0",
            tasaActividad: "0%",
            comparacionMesAnterior: "0%"
        },
        aceptados: {
            total: "0",
            aceptadosEsteMes: "0",
            tasaAceptacion: "0%",
            topVendedor: "N/A",
            comparacionMesAnterior: "0%"
        },
        rechazados: {
            total: "0",
            rechazadosEsteMes: "0",
            tasaRechazo: "0%",
            motivoPrincipal: "N/A",
            comparacionMesAnterior: "0%"
        }
    };

    const meses = [
        { value: '', label: 'Seleccionar mes' },
        { value: '2024-01', label: 'Enero 2024' },
        { value: '2023-12', label: 'Diciembre 2023' },
        { value: '2023-11', label: 'Noviembre 2023' },
        { value: '2023-10', label: 'Octubre 2023' }
    ];

    return (
        <>
            <h1>Reportes Mensuales - Administración</h1>
            <div className="historial-ti-container">
                
                <div className="historial-ti-navegacion">
                    <button 
                        className={`historial-ti-nav-btn ${reporteActivo === 'usuarios' ? 'active' : ''}`}
                        onClick={() => setReporteActivo('usuarios')}
                    >
                        👥 Usuarios Registrados
                    </button>
                    <button 
                        className={`historial-ti-nav-btn ${reporteActivo === 'aceptados' ? 'active' : ''}`}
                        onClick={() => setReporteActivo('aceptados')}
                    >
                        ✅ Productos Aceptados
                    </button>
                    <button 
                        className={`historial-ti-nav-btn ${reporteActivo === 'rechazados' ? 'active' : ''}`}
                        onClick={() => setReporteActivo('rechazados')}
                    >
                        ❌ Productos Rechazados
                    </button>
                </div>

                <div className="historial-ti-filtros">
                    <div className="historial-ti-mes-selector">
                        <label htmlFor="mes-select">Seleccionar Mes:</label>
                        <select 
                            id="mes-select"
                            value={mesSeleccionado}
                            onChange={(e) => setMesSeleccionado(e.target.value)}
                        >
                            {meses.map(mes => (
                                <option key={mes.value} value={mes.value}>
                                    {mes.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="historial-ti-btn-exportar">📈 Exportar Reporte</button>
                </div>

                <div className="historial-ti-resumen">
                    <div className="historial-ti-header-mes">
                        <h2>
                            {mesSeleccionado ? meses.find(m => m.value === mesSeleccionado)?.label + ' - ' : ''}
                            {reporteActivo === 'usuarios' && ' Reporte de Usuarios'}
                            {reporteActivo === 'aceptados' && ' Reporte de Aceptaciones'}
                            {reporteActivo === 'rechazados' && ' Reporte de Rechazos'}
                        </h2>
                        <div className="historial-ti-comparacion">
                            {reporteActivo === 'usuarios' && `${metricas.usuarios.comparacionMesAnterior} vs mes anterior`}
                            {reporteActivo === 'aceptados' && `${metricas.aceptados.comparacionMesAnterior} vs mes anterior`}
                            {reporteActivo === 'rechazados' && `${metricas.rechazados.comparacionMesAnterior} vs mes anterior`}
                        </div>
                    </div>

                    <div className="historial-ti-metricas">
                        <div className="historial-ti-metricas-principales">
                            {reporteActivo === 'usuarios' && (
                                <>
                                    <div className="historial-ti-metrica-grande">
                                        <h3>Total Usuarios Registrados</h3>
                                        <span className="historial-ti-valor-grande">{metricas.usuarios.total}</span>
                                        <p>Acumulado histórico</p>
                                    </div>
                                    <div className="historial-ti-metrica-grande">
                                        <h3>Nuevos este Mes</h3>
                                        <span className="historial-ti-valor-grande">{metricas.usuarios.nuevosEsteMes}</span>
                                        <p>Registros este mes</p>
                                    </div>
                                </>
                            )}
                            
                            {reporteActivo === 'aceptados' && (
                                <>
                                    <div className="historial-ti-metrica-grande">
                                        <h3>Total Productos Aceptados</h3>
                                        <span className="historial-ti-valor-grande">{metricas.aceptados.total}</span>
                                        <p>Acumulado histórico</p>
                                    </div>
                                    <div className="historial-ti-metrica-grande">
                                        <h3>Aceptados este Mes</h3>
                                        <span className="historial-ti-valor-grande">{metricas.aceptados.aceptadosEsteMes}</span>
                                        <p>Aceptaciones este mes</p>
                                    </div>
                                </>
                            )}
                            
                            {reporteActivo === 'rechazados' && (
                                <>
                                    <div className="historial-ti-metrica-grande">
                                        <h3>Total Productos Rechazados</h3>
                                        <span className="historial-ti-valor-grande">{metricas.rechazados.total}</span>
                                        <p>Acumulado histórico</p>
                                    </div>
                                    <div className="historial-ti-metrica-grande">
                                        <h3>Rechazados este Mes</h3>
                                        <span className="historial-ti-valor-grande">{metricas.rechazados.rechazadosEsteMes}</span>
                                        <p>Rechazos este mes</p>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="historial-ti-metricas-secundarias">
                            <div className="historial-ti-distribucion">
                                <h4>📊 Distribución</h4>
                                {reporteActivo === 'usuarios' && (
                                    <div className="historial-ti-categorias">
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Vendedores</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Compradores</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                    </div>
                                )}
                                
                                {reporteActivo === 'aceptados' && (
                                    <div className="historial-ti-categorias">
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Hortalizas</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Frutas</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Granos</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Otros</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                    </div>
                                )}
                                
                                {reporteActivo === 'rechazados' && (
                                    <div className="historial-ti-categorias">
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Imagen no corresponde</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Calidad insuficiente</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Descripción incorrecta</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                        <div className="historial-ti-categoria-item">
                                            <span className="historial-ti-categoria-label">Otros motivos</span>
                                            <div className="historial-ti-categoria-bar">
                                                <div className="historial-ti-categoria-fill" style={{width: '0%'}}></div>
                                            </div>
                                            <span className="historial-ti-categoria-value">0%</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="historial-ti-detalle">
                    <h3>
                        {reporteActivo === 'usuarios' && '👥 Detalle de Registros Mensuales'}
                        {reporteActivo === 'aceptados' && '✅ Productos Aceptados este Mes'}
                        {reporteActivo === 'rechazados' && '❌ Productos Rechazados este Mes'}
                    </h3>
                    
                    <div className="historial-ti-tabla-container">
                        <table className="historial-ti-tabla">
                            <thead>
                                <tr>
                                    {reporteActivo === 'usuarios' && (
                                        <>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                            <th>Fecha Registro</th>
                                            <th>Tipo</th>
                                            <th>Estado</th>
                                        </>
                                    )}
                                    {reporteActivo === 'aceptados' && (
                                        <>
                                            <th>Producto</th>
                                            <th>Vendedor</th>
                                            <th>Fecha Aprobación</th>
                                            <th>Categoría</th>
                                            <th>Cantidad</th>
                                        </>
                                    )}
                                    {reporteActivo === 'rechazados' && (
                                        <>
                                            <th>Producto</th>
                                            <th>Vendedor</th>
                                            <th>Fecha Rechazo</th>
                                            <th>Motivo</th>
                                            <th>Acciones</th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {reporteActivo === 'usuarios' && datosUsuarios.length === 0 && (
                                    <tr>
                                        <td colSpan="5" style={{textAlign: 'center', padding: '20px', color: '#6c757d'}}>
                                            No hay datos disponibles
                                        </td>
                                    </tr>
                                )}
                                {reporteActivo === 'usuarios' && datosUsuarios.map(usuario => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.fechaRegistro}</td>
                                        <td>{usuario.tipo}</td>
                                        <td>
                                            <span className={`historial-ti-estado-badge ${usuario.estado.toLowerCase()}`}>
                                                {usuario.estado}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                
                                {reporteActivo === 'aceptados' && datosAceptados.length === 0 && (
                                    <tr>
                                        <td colSpan="5" style={{textAlign: 'center', padding: '20px', color: '#6c757d'}}>
                                            No hay datos disponibles
                                        </td>
                                    </tr>
                                )}
                                {reporteActivo === 'aceptados' && datosAceptados.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.producto}</td>
                                        <td>{producto.vendedor}</td>
                                        <td>{producto.fecha}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.cantidad}</td>
                                    </tr>
                                ))}
                                
                                {reporteActivo === 'rechazados' && datosRechazados.length === 0 && (
                                    <tr>
                                        <td colSpan="5" style={{textAlign: 'center', padding: '20px', color: '#6c757d'}}>
                                            No hay datos disponibles
                                        </td>
                                    </tr>
                                )}
                                {reporteActivo === 'rechazados' && datosRechazados.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.producto}</td>
                                        <td>{producto.vendedor}</td>
                                        <td>{producto.fecha}</td>
                                        <td>{producto.motivo}</td>
                                        <td>
                                            <button className="historial-ti-btn-accion">👁️ Revisar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HistorialTi;