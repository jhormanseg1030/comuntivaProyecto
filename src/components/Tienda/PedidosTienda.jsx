import { Link } from "react-router-dom";

function PedidosTienda(){
    return(
        <>
        <h1>Pedidos</h1>
  <div className="seccion-pedidos">
    {/* Header con filtros y botones */}
    <div className="pedidos-header">
      <h3>Aquí puedes gestionar tus pedidos</h3></div>
      <div className="controles-pedidos">
     <div>
      <Link to="/listaPedi">
        <button className="buttonPedi">Consultar Pedidos</button>
      </Link>
    </div>
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