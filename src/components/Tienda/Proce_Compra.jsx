function Proceso_Comp () {
    return(
        <>
            <h1>Procesos de compra</h1>
            <div className="proceso-compra-container">
            <h2>Aquí puedes configurar el proceso de compra</h2>
            
            <div className="config-section">
                <h3>Métodos de Pago</h3>
                <div className="payment-methods1">
                <div className="method-card">
                <div className="payment-method">
            <div className="method-label">
                <input type="checkbox" id="med" />
            <label  htmlFor="med">Pago en efectivo</label>
            </div>
                    <div className="method-details">
                    <p>Pago al momento de recibir el producto</p>
                    <div className="method-options">
                        <label>
                        <input type="checkbox" /> Requerir cambio exacto
                        </label>
                    </div>
                    </div>
                </div>
            </div>
                <div className="method-card">
                    <div className="method-header">
                    <input type="checkbox" id="transferencia" />
                    <label htmlFor="transferencia">Transferencia Bancaria</label>
                    </div>
                    <div className="method-details">
                    <p>Pago por transferencia o consignación</p>
                    <div className="form-group">
                        <label>Cuentas bancarias:</label>
                        <div className="bank-accounts">
                        <input type="text" placeholder="Banco" />
                        <input type="text" placeholder="Tipo de cuenta" />
                        <input type="text" placeholder="Número de cuenta" />
                        <button className="btn-add-account">+ Añadir cuenta</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="method-card">
                    <div className="method-header">
                    <input type="checkbox" id="tarjeta" />
                    <label htmlFor="tarjeta">Tarjeta de Crédito/Débito</label>
                    </div>
                    <div className="method-details">
                    <p>Pago con tarjeta a través de pasarela de pago</p>
                    <div className="form-group">
                        <label>Seleccionar pasarela:</label>
                        <select>
                        <option value="">Seleccionar...</option>
                        <option value="payu">PayPal</option>
                        <option value="mercadopago">Mercado de Pago</option>
                        <option value="stripe">Stripe</option>
                        </select>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="config-section">
                <h3>Opciones de Entrega</h3>
                <div className="delivery-options">
                <div className="form-group">
                    <label>
                    <input type="checkbox" /> Recogida en finca/tienda
                    </label>
                    <div className="option-details">
                    <input type="text" placeholder="Dirección para recoger" />
                    </div>
                </div>

                <div className="form-group">
                    <label>
                    <input type="checkbox" /> Envío a domicilio
                    </label>
                    <div className="option-details">
                    <div className="form-row1">
                        <div className="form-group">
                        <label>Costo de envío base:</label>
                        <input type="number" placeholder="Valor fijo" />
                        </div>
                        <div className="form-group">
                        <label>o calcular por:</label>
                        <select>
                            <option value="">Seleccionar...</option>
                            <option value="peso">Peso</option>
                            <option value="distancia">Distancia</option>
                            <option value="zona">Zona geográfica</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="form-actions">
                <button className="btn-cancel">Cancelar</button>
                <button className="btn-save">Guardar Configuración</button>
            </div>
            </div>
        </>
    )
}
export default Proceso_Comp;