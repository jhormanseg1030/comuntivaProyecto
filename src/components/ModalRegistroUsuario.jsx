import { Modal, Button } from "react-bootstrap";

const ModalRegistroUsuario = ({ show, onClose, mensaje, camposFaltantes = [], documentoExistente = false }) => {
  let mensajeFinal = mensaje || "Usuario no creado.";

  if (camposFaltantes.length > 0) {
    mensajeFinal = `Usuario no creado. Faltan los siguientes campos: ${camposFaltantes.join(", ")}`;
  } else if (documentoExistente) {
    mensajeFinal = "El número de documento ya fue registrado.";
  }

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>❌ Error al crear un usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{mensajeFinal}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroUsuario;
