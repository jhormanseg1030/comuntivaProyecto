// src/components/GestVende.jsx
import './GestVende.css';

const GestVende = () => {
  return (
    <div className="gestion-vendedores">
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h2>👥 Gestión de Vendedores</h2>
          </div>
          <div className="card-body">
            
            {/* Sección: Lista de Vendedores Activos */}
            <div className="seccion-vendedores mb-4">
              <h4>Vendedores Activos</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Permisos</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Ejemplo de fila - reemplazar con datos dinámicos */}
                    <tr>
                      <td>Juan Pérez</td>
                      <td>juan@email.com</td>
                      <td>
                        <span className="badge bg-warning">Vendedor Básico</span>
                      </td>
                      <td>
                        <span className="badge bg-success">Activo</span>
                      </td>
                      <td>
                        <button className="btn btn-peligro btn-pequeno">
                          🗑️ Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>María González</td>
                      <td>maria@email.com</td>
                      <td>
                        <span className="badge bg-info">Vendedor Avanzado</span>
                      </td>
                      <td>
                        <span className="badge bg-success">Activo</span>
                      </td>
                      <td>
                        <button className="btn btn-peligro btn-pequeno">
                          🗑️ Eliminar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sección: Consultar Usuarios Existentes */}
            <div className="seccion-consultar">
              <h4>🔍 Asignar Rol a Usuarios Existentes</h4>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Buscar usuario por nombre o email..."
                />
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Tipo Actual</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Carlos Rodríguez</td>
                      <td>carlos@email.com</td>
                      <td>
                        <span className="badge bg-secondary">Cliente</span>
                      </td>
                      <td>
                        <button className="btn btn-principal btn-pequeno">
                          Asignar como Vendedor
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Ana López</td>
                      <td>ana@email.com</td>
                      <td>
                        <span className="badge bg-secondary">Cliente</span>
                      </td>
                      <td>
                        <button className="btn btn-principal btn-pequeno">
                          Asignar como Vendedor
                        </button>
                      </td>
                    </tr>
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