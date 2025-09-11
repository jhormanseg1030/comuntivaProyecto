function CuentaTi () {
    return (
        <>
            <div>
            <div className='xd'>
              <div className="container-fluid">
                <div className="alert text-center" role="alert">
                </div>
                <div className="card">
                  <div className="card-header">
                    <h2>Cuentas</h2>
                    <button type="button" className="btn btn-success">Crear Cuenta</button>
                  </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                              <tr>
                                  <th scope="col">Email</th>
                                  <th scope="col">Nombre</th>
                                  <th scope="col">Apellido</th>
                                  <th scope="col">Rol</th>
                                  <th scope="col">Permisos</th>
                              </tr>
                          </thead>
                            <tbody>
                              <tr>
                                  <td className="email-cell">
                                      jhomirasegura293@gmail.com <span className="badge">Dueño</span>
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td>Administrador</td>
                                  <td className="permissions-icons">
                                      <i className="bi bi-pencil"></i>
                                      <i className="bi bi-person"></i>
                                      <i className="bi bi-box"></i>
                                      <i className="bi bi-graph-up"></i>
                                      <i className="bi bi-gear"></i>
                                      <i className="bi bi-currency-dollar"></i>
                                      <i className="bi bi-bell"></i>
                                      <i className="bi bi-credit-card"></i>
                                      <i className="bi bi-truck"></i>
                                      <i className="bi bi-eye"></i>
                                  </td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                </div>
              </div>       
              <div class="maestro-contenedor">
                <div class="caja-informacion espacio-superior">
              
                </div>
                <div class="caja-informacion espacio-superior">
                  <div class="contenido-caja">
                    <h5 class="titulo-seccion">Dudas Plataforma</h5>
                    <p class="texto-descripcion">
                      Si tiene alguna pregunta sobre cómo funciona la plataforma o sobre nuestros planes, envíenos un correo electrónico a
                      <a href="mailto:support@jumpseller.com"> Comuctiva357Camp@gmail.com</a> y uno de nuestros administradores con gusto le ayudará.
                    </p>
                  </div>
                </div>
              </div>  
            </div>
            <p>Aquí puedes gestionar la información de tu cuenta.</p>
          </div>
        </>
    )
}
export default CuentaTi;