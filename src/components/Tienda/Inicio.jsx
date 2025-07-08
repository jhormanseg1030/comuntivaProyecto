
function InicioTienda() {
    return (
    <>
    <h1>Inicio</h1>
        <div className="contenido-dinamico">
          <div className="inicio-container">
            <p>Aquí puedes ver las tareas para configurar tu tienda</p>
            <div className="form-container1">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingPassword" placeholder=""/>
                <label htmlFor="floatingPassword">Asignar un Nombre a tu Tienda</label>
              </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Telefono de Contacto" aria-label="Contacto"/>
                  <span class="input-group-text">@</span>
                  <input type="text" class="form-control" placeholder="Correo" aria-label="CorreoT"/>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Cra 68 #677 surexamp"/>
                  <label for="floatingInput">Direccion o Dominio de la Tienda </label>
                </div>
                  <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02"/>
                    <label class="input-group-text" for="inputGroupFile02">Logotipo de la Marca</label>
                  </div>
                    <button type="button" class="btn btn-success">Guardar Informacion</button>
            </div>
          </div>
        </div>
    </>
    )
}

export default InicioTienda;