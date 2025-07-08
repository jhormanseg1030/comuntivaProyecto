function PedidosTienda(){
    return(
        <>
        <h1>Pedidos</h1>
  <div className="seccion-pedidos">
    {/* Header con filtros y botones */}
    <div className="pedidos-header">
      <h3>Aquí puedes gestionar tus pedidos</h3></div>
      <div className="controles-pedidos">
        <div className="filtros">
          <input 
            type="text" 
            placeholder="Buscar por cliente o ID..." 
            className="input-busqueda"
          />
          <input 
            type="date" 
            className="input-fecha"
          />
            <select className="select-filtro">
            <option>Todos los estados</option>
            <option>Pendiente</option>
            <option>Procesando</option>
            <option>Enviado</option>
            <option>Entregado</option>
            <option>Cancelado</option>
          </select>
        </div>
      <button className="btn-nuevo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Nuevo Pedido
        </button>
      </div>
  

    {/* Tabla de pedidos */}
    <div className="tabla-pedidos-container">
      <table className="tabla-pedidos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Productos</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Ejemplo de pedido */}
          <tr>
            <td>#10025</td>
            <td>
              <div className="cliente-info">
                <span className="cliente-nombre">María González</span>
                <span className="cliente-contacto">maria@example.com</span>
              </div>
            </td>
            <td>15/05/2024</td>
            <td>
              <div className="productos-lista">
                <span>5x Arroz Orgánico</span>
                <span>2x Café 1kg</span>
              </div>
            </td>
            <td>30.000</td>
            <td>
              <span className="estado-badge estado-procesando">Procesando</span>
            </td>
            <td>
              <div className="acciones-pedido">
                <button className="btn-accion btn-detalles">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                  </svg>
                </button>
                <button className="btn-accion btn-editar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
                </button>
                <button className="btn-accion btn-factura">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm4 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Integración con inventario/facturas */}
    <div className="modulos-integracion">
      <div className="card-integracion">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.793L6.354 7.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5z"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
          </svg>
          Inventario
        </h3>
        <p>Actualización automática al procesar pedidos</p>
        <button className="btn-ver-inventario">Ver Inventario</button>
      </div>

      <div className="card-integracion">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
          </svg>
          Facturación
        </h3>
        <p>Generar facturas electrónicas</p>
        <button className="btn-generar-factura">Generar Factura</button>
      </div>
    </div>
  </div>
  </>
)
}

export default PedidosTienda;