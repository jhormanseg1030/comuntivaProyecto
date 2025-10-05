import { useState } from "react";
import Card from "react-bootstrap/Card";
import { crearUsuario } from "../../api/usuarioApi";
import FormularioUsuario from "../../components/Formularios/usuarioForm/usuarioForm";
import ModalMensaje from "../../components/ModalConexionFallida";

const UsuarioCrear = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContenido, setModalContenido] = useState({ titulo: "", mensaje: "", tipo: "info" });

  const mostrarModal = (titulo, mensaje, tipo = "info") => {
    setModalContenido({ titulo, mensaje, tipo });
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  }
  const handleCrearUsuario = async (data) => {
    try{
      await crearUsuario(data);
      mostrarModal("✅ Usuario creado", "El usuario fue registrado exitosamente", "success");
    } catch (error){
      mostrarModal("❌ Error", error.message, "danger")
    }
  };

  return (
    <Card>
      <Card.Header>Crear Usuario</Card.Header>
      <Card.Body>
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


export default UsuarioCrear;