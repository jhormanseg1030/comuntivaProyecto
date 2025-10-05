import { Modal, Button } from "react-bootstrap";

const ModalUsuarioCreado = ({ show, onClose, mensaje = "El usuario fue registrado exitosamente." }) => (
  <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>✅ Usuario creado</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{mensaje}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="success" onClick={onClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ModalUsuarioCreado;