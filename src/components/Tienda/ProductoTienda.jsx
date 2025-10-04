import UnidadMedida from "../Formularios/UnidadMedidaForm/UnidadMedida";
function ProductoTienda () {
    return(
        <>
    <h1>Productos</h1>
    <div className="productos-container">
    <div className="productos-header">
        <h3>Aquí puedes gestionar los productos de la sucursal</h3>
    </div>
    <div className="product-form-container">
        <div className="form-section">
        <h3>Información Básica</h3>
        <div className="form-row2">
            <div className="form-group1">
            <label>Nombre del Producto*</label>
            <input type="text" placeholder="Ej: Arroz Orgánico" required />
            </div>
            <div className="form-group1">
            <label>Código de Barras/Referencia</label>
            <input type="text" placeholder="Código único" />
            </div>
        </div>

        <div className="form-row2">
            <div className="form-group">
            <label>Categoría*</label>
            <select required>
                <option value="">Seleccionar...</option>
                <option value="granos">Granos</option>
                <option value="frutas">Frutas</option>
                <option value="verduras">Verduras</option>
                <option value="lacteos">Lácteos</option>
                <option value="carnes">Carnes</option>
            </select>
            </div>
            <div className="form-group">
            <label>Tipo de Producto*</label>
            <select required>
                <option value="">Seleccionar...</option>
                <option value="fresco">Fresco</option>
                <option value="seco">Seco</option>
                <option value="procesado">Procesado</option>
                <option value="organico">Orgánico</option>
            </select>
            </div>
        </div>

        <div className="form-row2">
            <div className="form-group2">
            <label>Descripción</label>
            <textarea placeholder="Descripción detallada del producto"></textarea>
            </div>
        </div>
        </div>

        <div className="form-section">
        <h3>Precio y Unidades</h3>
        <div className="form-row2">
            <div className="form-group">
            <label>Unidad de Medida*</label>
            <select required>
                <option value="">Seleccionar...</option>
        <UnidadMedida></UnidadMedida>
            </select>
            </div>
            <div className="form-group">
            <label>Precio por Unidad*</label>
            <input type="number" placeholder="Ej: 2500" required />
            </div>
        </div>

        <div className="form-row2">
            <div className="form-group">
            <label>Precio por Mayor (opcional)</label>
            <div className="price-tier-container">
                <div className="price-tier">
                <input type="number" placeholder="Cantidad mínima" />
                <span>unidades →</span>
                <input type="number" placeholder="Precio especial" />
                </div>
                <button type="button" className="btn-add-tier">+ Añadir otro nivel</button>
            </div>
            </div>
        </div>
        </div>

        <div className="form-section">
        <h3>Inventario y Logística</h3>
        <div className="form-row2">
            <div className="form-group">
            <label>Cantidad en Stock*</label>
            <input type="number" placeholder="Ej: 100" required />
            </div>
            <div className="form-group">
            <label>Almacén/Lugar de Origen</label>
            <input type="text" placeholder="Ej: Finca La Esperanza" />
            </div>
        </div>

        <div className="form-row2">
            <div className="form-group">
            <label>Peso (opcional)</label>
            <input className="ejem" type="number" placeholder="Ej: 1.5" />
            </div>
            <div className="form-group">
            <label>Dimensiones (opcional)</label>
            <div className="dimensions-input">
                <input type="number" placeholder="Ancho" />
                <span>x</span>
                <input type="number" placeholder="Alto" />
                <span>x</span>
                <input type="number" placeholder="Largo" />
                <select className="small-select">
                <option value="cm">cm</option>
                <option value="m">m</option>
                </select>
                <select className="small-select">
                <option value="kg">kg</option>
                <option value="g">gr</option>
                <option value="lb">lib</option>
            </select>
            </div>
            </div>
        </div>

        <div className="form-row2">
            <div className="form-group">
            <label>Método de Envío</label>
            <div className="checkbox-group">
                <label>
                <input type="checkbox" /> Recogida en finca
                </label>
                <label>
                <input type="checkbox" /> Envío a domicilio
                </label>
                <label>
                <input type="checkbox" /> Puntos de distribución
                </label>
            </div>
            </div>
        </div>
        </div>

        <div className="form-section">
        <h3>Imágenes del Producto</h3>
        <div className="image-upload-container">
            <div className="image-upload-box">
            <span>+</span>
            <p>Arrastra imágenes aquí o haz clic para subir</p>
            </div>
        </div>
        </div>

        <div className="form-actions">
        <button type="button" className="btn-cancel">Cancelar</button>
        <button type="submit" className="btn-save">Guardar Producto</button>
        </div>
    </div>
    </div>
        </>
    )
}
export default ProductoTienda;