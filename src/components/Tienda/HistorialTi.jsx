import React, { useState } from 'react';


function  HistorialTi() {
    const [reporteActivo, setReporteActivo] = useState('usuarios'); 
    const [mesSeleccionado, setMesSeleccionado] = useState('2024-01');

    const datosUsuarios = [
        { id: 1, nombre: "Juan Pérez", email: "juan@email.com", fechaRegistro: "2024-01-15", tipo: "Vendedor", estado: "Activo" },
        { id: 2, nombre: "María García", email: "maria@email.com", fechaRegistro: "2024-01-10", tipo: "Comprador", estado: "Activo" },
        { id: 3, nombre: "Carlos López", email: "carlos@email.com", fechaRegistro: "2024-01-05", tipo: "Vendedor", estado: "Inactivo" },
        { id: 4, nombre: "Ana Rodríguez", email: "ana@email.com", fechaRegistro: "2024-01-03", tipo: "Comprador", estado: "Activo" },
        { id: 5, nombre: "Luis Martínez", email: "luis@email.com", fechaRegistro: "2023-12-28", tipo: "Vendedor", estado: "Activo" }
    ];

    const datosAceptados = [
        { id: 1, producto: "Tomates Orgánicos", vendedor: "Juan Pérez", fecha: "2024-01-15", categoria: "Hortalizas", cantidad: "50kg" },
        { id: 2, producto: "Zanahorias Frescas", vendedor: "María García", fecha: "2024-01-14", categoria: "Hortalizas", cantidad: "30kg" },
        { id: 3, producto: "Lechuga Hidropónica", vendedor: "Carlos López", fecha: "2024-01-13", categoria: "Hortalizas", cantidad: "20un" },
        { id: 4, producto: "Papa Pastusa", vendedor: "Ana Rodríguez", fecha: "2024-01-12", categoria: "Tubérculos", cantidad: "100kg" },
        { id: 5, producto: "Cebolla Cabezona", vendedor: "Luis Martínez", fecha: "2024-01-10", categoria: "Hortalizas", cantidad: "40kg" }
    ];

    const datosRechazados = [
        { id: 1, producto: "Manzanas Rojas", vendedor: "Pedro Sánchez", fecha: "2024-01-15", motivo: "Imagen no corresponde" },
        { id: 2, producto: "Peras Verdes", vendedor: "Laura Díaz", fecha: "2024-01-14", motivo: "Calidad insuficiente" },
        { id: 3, producto: "Uvas Moscatel", vendedor: "Miguel Ángel", fecha: "2024-01-13", motivo: "Descripción incorrecta" },
        { id: 4, producto: "Mangos Tommy", vendedor: "Sofia Castro", fecha: "2024-01-12", motivo: "Imagen no corresponde" },
        { id: 5, producto: "Piñas Golden", vendedor: "Ricardo Mora", fecha: "2024-01-10", motivo: "Producto no agrícola" }
    ];


    const metricas = {
        usuarios: {
            total: "1,245",
            nuevosEsteMes: "45",
            activos: "892",
            tasaActividad: "72%",
            comparacionMesAnterior: "+12%"
        },
        aceptados: {
            total: "892",
            aceptadosEsteMes: "45",
            tasaAceptacion: "85%",
            topVendedor: "Juan Pérez",
            comparacionMesAnterior: "+8%"
        },
        rechazados: {
            total: "158",
            rechazadosEsteMes: "12",
            tasaRechazo: "15%",
            motivoPrincipal: "Imagen no corresponde",
            comparacionMesAnterior: "-5%"
        }
    };


    const meses = [
        { value: '2024-01', label: 'Enero 2024' },
        { value: '2023-12', label: 'Diciembre 2023' },
        { value: '2023-11', label: 'Noviembre 2023' },
        { value: '2023-10', label: 'Octubre 2023' }
    ];

    return (
        <>
            <h1>Reportes Mensuales - Administración</h1>
            <div className="reportes-container">
                

                <div className="reportes-navegacion">
                    <button 
                        className={`nav-btn ${reporteActivo === 'usuarios' ? 'active' : ''}`}
                        onClick={() => setReporteActivo('usuarios')}
                    >
                        👥 Usuarios Registrados
                    </button>
                    <button 
                        className={`nav-btn ${reporteActivo === 'aceptados' ? 'active' : ''}`}
                        onClick={() => setReporteActivo('aceptados')}
                    >
                        ✅ Productos Aceptados
                    </button>
                    <button 
                        className={`nav-btn ${reporteActivo === 'rechazados' ? 'active' : ''}`}
                        onClick={() => setReporteActivo('rechazados')}
                    >
                        ❌ Productos Rechazados
                    </button>
                </div>


                <div className="filtros-container">
                    <div className="mes-selector">
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
                    <button className="btn-exportar">📈 Exportar Reporte</button>
                </div>

                <div className="resumen-mensual">
                    <div className="header-mes">
                        <h2>
                            {meses.find(m => m.value === mesSeleccionado)?.label} - 
                            {reporteActivo === 'usuarios' && ' Reporte de Usuarios'}
                            {reporteActivo === 'aceptados' && ' Reporte de Aceptaciones'}
                            {reporteActivo === 'rechazados' && ' Reporte de Rechazos'}
                        </h2>
                        <div className="comparacion-mes">
                            {reporteActivo === 'usuarios' && `↗️ ${metricas.usuarios.comparacionMesAnterior} vs mes anterior`}
                            {reporteActivo === 'aceptados' && `↗️ ${metricas.aceptados.comparacionMesAnterior} vs mes anterior`}
                            {reporteActivo === 'rechazados' && `↘️ ${metricas.rechazados.comparacionMesAnterior} vs mes anterior`}
                        </div>
                    </div>

                    <div className="metricas-mensuales">
                        <div className="metricas-principales">
                            {reporteActivo === 'usuarios' && (
                                <>
                                    <div className="metrica-grande">
                                        <h3>Total Usuarios Registrados</h3>
                                        <span className="valor-grande">{metricas.usuarios.total}</span>
                                        <p>Acumulado histórico</p>
                                    </div>
                                    <div className="metrica-grande">
                                        <h3>Nuevos este Mes</h3>
                                        <span className="valor-grande">{metricas.usuarios.nuevosEsteMes}</span>
                                        <p>Registros en {meses.find(m => m.value === mesSeleccionado)?.label}</p>
                                    </div>
                                </>
                            )}
                            
                            {reporteActivo === 'aceptados' && (
                                <>
                                    <div className="metrica-grande">
                                        <h3>Total Productos Aceptados</h3>
                                        <span className="valor-grande">{metricas.aceptados.total}</span>
                                        <p>Acumulado histórico</p>
                                    </div>
                                    <div className="metrica-grande">
                                        <h3>Aceptados este Mes</h3>
                                        <span className="valor-grande">{metricas.aceptados.aceptadosEsteMes}</span>
                                        <p>Aceptaciones en {meses.find(m => m.value === mesSeleccionado)?.label}</p>
                                    </div>
                                </>
                            )}
                            
                            {reporteActivo === 'rechazados' && (
                                <>
                                    <div className="metrica-grande">
                                        <h3>Total Productos Rechazados</h3>
                                        <span className="valor-grande">{metricas.rechazados.total}</span>
                                        <p>Acumulado histórico</p>
                                    </div>
                                    <div className="metrica-grande">
                                        <h3>Rechazados este Mes</h3>
                                        <span className="valor-grande">{metricas.rechazados.rechazadosEsteMes}</span>
                                        <p>Rechazos en {meses.find(m => m.value === mesSeleccionado)?.label}</p>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="metricas-secundarias">
                            <div className="distribucion-categorias">
                                <h4>📊 Distribución</h4>
                                {reporteActivo === 'usuarios' && (
                                    <div className="categorias-list">
                                        <div className="categoria-item">
                                            <span className="categoria-label">Vendedores</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '65%'}}></div>
                                            </div>
                                            <span className="categoria-value">65%</span>
                                        </div>
                                        <div className="categoria-item">
                                            <span className="categoria-label">Compradores</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '35%'}}></div>
                                            </div>
                                            <span className="categoria-value">35%</span>
                                        </div>
                                    </div>
                                )}
                                
                                {reporteActivo === 'aceptados' && (
                                    <div className="categorias-list">
                                        <div className="categoria-item">
                                            <span className="categoria-label">Hortalizas</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '45%'}}></div>
                                            </div>
                                            <span className="categoria-value">45%</span>
                                        </div>
                                        <div className="categoria-item">
                                            <span className="categoria-label">Frutas</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '30%'}}></div>
                                            </div>
                                            <span className="categoria-value">30%</span>
                                        </div>
                                        <div className="categoria-item">
                                            <span className="categoria-label">Granos</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '15%'}}></div>
                                            </div>
                                            <span className="categoria-value">15%</span>
                                        </div>
                                        <div className="categoria-item">
                                            <span className="categoria-label">Otros</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '10%'}}></div>
                                            </div>
                                            <span className="categoria-value">10%</span>
                                        </div>
                                    </div>
                                )}
                                
                                {reporteActivo === 'rechazados' && (
                                    <div className="categorias-list">
                                        <div className="categoria-item">
                                            <span className="categoria-label">Imagen no corresponde</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '45%'}}></div>
                                            </div>
                                            <span className="categoria-value">45%</span>
                                        </div>
                                        <div className="categoria-item">
                                            <span className="categoria-label">Calidad insuficiente</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '30%'}}></div>
                                            </div>
                                            <span className="categoria-value">30%</span>
                                        </div>
                                        <div className="categoria-item">
                                            <span className="categoria-label">Descripción incorrecta</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '15%'}}></div>
                                            </div>
                                            <span className="categoria-value">15%</span>
                                        </div>
                                        <div className="categoria-item">
                                            <span className="categoria-label">Otros motivos</span>
                                            <div className="categoria-bar">
                                                <div className="categoria-fill" style={{width: '10%'}}></div>
                                            </div>
                                            <span className="categoria-value">10%</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detalle-mensual">
                    <h3>
                        {reporteActivo === 'usuarios' && '👥 Detalle de Registros Mensuales'}
                        {reporteActivo === 'aceptados' && '✅ Productos Aceptados este Mes'}
                        {reporteActivo === 'rechazados' && '❌ Productos Rechazados este Mes'}
                    </h3>
                    
                    <div className="tabla-container">
                        <table className="tabla-mensual">
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
                                {reporteActivo === 'usuarios' && datosUsuarios.map(usuario => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.fechaRegistro}</td>
                                        <td>{usuario.tipo}</td>
                                        <td>
                                            <span className={`estado-badge ${usuario.estado.toLowerCase()}`}>
                                                {usuario.estado}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                
                                {reporteActivo === 'aceptados' && datosAceptados.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.producto}</td>
                                        <td>{producto.vendedor}</td>
                                        <td>{producto.fecha}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.cantidad}</td>
                                    </tr>
                                ))}
                                
                                {reporteActivo === 'rechazados' && datosRechazados.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.producto}</td>
                                        <td>{producto.vendedor}</td>
                                        <td>{producto.fecha}</td>
                                        <td>{producto.motivo}</td>
                                        <td>
                                            <button className="btn-accion">👁️ Revisar</button>
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

export default  HistorialTi;