import { useState } from "react";
import Card from "react-bootstrap/Card";
import { crearUsuario } from "../../api/usuarioApi";
import FormularioUsuario from "../../components/Formularios/usuarioForm/usuarioForm";


const CrearUsuario = () => {
  // Estado para controlar la visibilidad del modal de retroalimentación y su contenido
  const [modalVisible, setModalVisible] = useState(false);

  // Estado para definir el contenido del modal (título, mensaje, tipo)
  const [modalContenido, setModalContenido] = useState({
    titulo: "",
    mensaje: "",
    tipo: "info", // puede ser "success", "danger", etc.
  });

  // Función para mostrar el modal con contenido personalizado
  const mostrarModal = (titulo, mensaje, tipo = "info") => {
    setModalContenido({ titulo, mensaje, tipo });
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
  };

  // Manejar la creación del empleado llamando a la API y mostrando el modal según el resultado
  const handleCrearUsuario = async (data) => {
    try {
      await crearUsuario(data);
      mostrarModal("✅ Usuario creado correctamente", "success");
    } catch (error) {
      mostrarModal("❌ Error", error.message, "danger");
    }
  };

  return (
    <Card>
      <Card.Header>Crear Usuario</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <FormularioUsuario onSubmit={handleCrearUsuario} modo="crear" />
        <ModalMensaje
          show={modalVisible}
          onClose={cerrarModal}
          titulo={modalContenido.titulo}
          mensaje={modalContenido.mensaje}
          tipo={modalContenido.tipo}
        />
      </Card.Body>
    </Card>
  );
};

export default CrearUsuario;