import grafica from "../imagenes/grafica.png";
function HistorialTi() {
    return (
        <>
            <h1>Historial</h1>
            <div className="sales-history-container">
                <div className="div1">
                    <div className="div2">
                        <h2>Ganancias del vendedor</h2>
                        <div className="date-filter">
                            <label htmlFor="start-date">Desde:</label>
                            <input type="date" id="start-date" />
                            <label htmlFor="end-date">Hasta:</label> 
                            <input type="date" id="end-date" />
                        </div>
                        <div className="total-sales">
                            <p>Total de Ventas</p>
                            <span>$2.450.000</span>
                        </div>
                    </div>

                    <div className="summary-graphic">
                        <img src={grafica} alt="grafica" className="summary-graphic" />
                    </div>
                </div>

                <div className="sales-table">
                    <h3>Transacciones recientes</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>29-06-2025</td>
                                <td>Arroz Orgánico</td>
                                <td>3</td>
                                <td>$75.000</td>
                            </tr>
                            <tr>
                                <td>30-06-2025</td>
                                <td>Tomate</td>
                                <td>5</td>
                                <td>$50.000</td>
                            </tr>
                            <tr>
                                <td>30-07-2025</td>
                                <td>Papa Pastusa</td>
                                <td>1</td>
                                <td>$20.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};
export default HistorialTi;