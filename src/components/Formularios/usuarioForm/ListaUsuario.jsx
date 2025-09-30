import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  actualizarUsuario,
  obtenerUsuarioPorId,
  obtenerUsuario,
} from "../../../api/usuarioApi";
import FormularioUsuario from "./usuarioForm";
import ModalMensaje from "../usuarioForm/modalMensaje"
import ModalUsuario from "./ModalUsuario";

//hook o Componente para listar empleados con eliminación y confirmación
const ListaUsuario = () => {
  // Estado para almacenar la lista de empleados
  const [usuarios, setUsuarios] = useState([]);

  const [usuarioDetalle, setUsuarioDetalle] = useState(null);
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  // Estado para manejar errores
  const [error, setError] = useState(null);

  // Estado para mostrar spinner mientras se cargan los datos
  const [cargando, setCargando] = useState(true);

  // Cargar empleados al montar el componente
  useEffect(() => {
    obtenerUsuario()
      .then((data) => setUsuarios(data)) // Guardar empleados en el estado
      .catch((err) => setError(err.message)) // Mostrar error si falla
      .finally(() => setCargando(false)); // Ocultar spinner al terminar
  }, []);

  // Abrir el modal de detalle y guardar el empleado a mostrar
  const verDetalle = (usu) => {
    setUsuarioDetalle(usu);
    setMostrarDetalle(true);
  };

  // Cerrar el modal de detalle
  const cerrarDetalle = () => setMostrarDetalle(false);

  // Estado y función para manejar el formulario de edición como modal

  const [mostrarModalEdicion, setMostrarModalEdicion] = useState(false);
  const [usuarioEditar, setUsuarioEditar] = useState(null);

  const abrirModalEdicion = (usu) => {
    setUsuarioEditar(usu); // Carga los datos del empleado
    setMostrarModalEdicion(true); // Muestra el modal
  };

  const handleActualizarUsuario = async (data) => {
    try {
      await actualizarUsuario(usuarioEditar.id, data);

      // Obtener datos completos del empleado actualizado
      const usuarioActualizado = await obtenerUsuarioPorId(obtenerUsuarioPorId.id);

      // Reemplazar el empleado en la lista con los datos actualizados
      setUsuarios((prev) =>
        prev.map((e) => (e.id === usuarioEditar.id ? usuarioActualizado : e))
      );

      setMostrarModalEdicion(false);
      setUsuarioEditar(null);

      // Mostrar mensaje de éxito
      mostrarModal(
        "👍 Actualizado",
        "Empleado actualizado correctamente",
        "success"
      );
       } catch (error) {
      console.error('Error al crear producto:', error);
      alert(error.message);  // Muestra mensaje del backend (ej. "Ya existe...")
    }
  };

  //Modal para mostrar mensajes de error o éxito
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContenido, setModalContenido] = useState({
    titulo: "",
    mensaje: "",
    tipo: "info",
  });

  const mostrarModal = (titulo, mensaje, tipo = "info") => {
    setModalContenido({ titulo, mensaje, tipo });
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="card p-3">
      {/* Mostrar error si existe */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Mostrar spinner mientras se cargan los datos */}
      {cargando ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary mb-3" role="status"></div>
          <p className="text-muted">Cargando usuarios...</p>
        </div>
      ) : (
        // Mostrar tabla de empleados cuando termina la carga
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Tipo Documento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usu) => (
              <tr key={usu.id}>
                <td>{usu.nombre}</td>
                <td>{usu.apellido}</td>
                <td>{usu.nombreCargo}</td>
                <td>
                  {/* Botón para ver detalle del empleado en modal */}
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => verDetalle(usu)}
                  >
                    Ver
                  </button>
                  {/* Enlace para editar el empleado */}
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => abrirModalEdicion(usu)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/*Modal para mostrar detalle del empleado*/}
      <ModalUsuario
        usuario={usuarioDetalle}
        show={mostrarDetalle}
        onClose={cerrarDetalle}
      />
      {/*Modal para mostrar el formulario que permite editar el empleado*/}
      <Modal
        show={mostrarModalEdicion}
        onHide={() => setMostrarModalEdicion(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usuarioEditar && (
            <FormularioUsuario
              modo="editar"
              empleado={usuarioEditar}
              onSubmit={handleActualizarUsuario}
            />
          )}
        </Modal.Body>
      </Modal>
      {/* Modal para mostrar mensajes de éxito o error */}
      <ModalMensaje
        show={modalVisible}
        onClose={cerrarModal}
        titulo={modalContenido.titulo}
        mensaje={modalContenido.mensaje}
        tipo={modalContenido.tipo}
      />
    </div>
  );
};

export default ListaUsuario;