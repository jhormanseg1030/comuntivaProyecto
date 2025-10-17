import React, { useEffect, useState } from 'react';
import { obtenerUsuario, actualizarUsuario } from '../../api/usuarioApi';

function CuentaVendedor() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await obtenerUsuario();
        setUsuarios(data);
      } catch (err) {
        console.error(err);
        setError('No se pudo obtener la información');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleUpdate = async (id) => {
    try {
      const payload = { nombre: 'Actualizado', apellido: 'Usuario' };
      await actualizarUsuario(id, payload);
      alert('Usuario actualizado');
    } catch (err) {
      console.error(err);
      alert('Error al actualizar usuario');
    }
  };

  return (
    <>
      <h1>Cuenta</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? <p>Cargando...</p> : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Email</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(u => (
              <tr key={u.id_Usuario || u.id}>
                <td>{u.email}</td>
                <td>{u.nombre}</td>
                <td>{u.apellido}</td>
                <td>
                  <button className="btn btn-sm btn-primary" onClick={() => handleUpdate(u.id_Usuario || u.id)}>Actualizar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default CuentaVendedor;
