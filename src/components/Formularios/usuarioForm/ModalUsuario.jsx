import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Componente externo para mostrar el detalle de un usuario en un modal
const ModalUsuario = ({ usuario, show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalle del usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Verifica que haya datos antes de renderizar */}
        {usuario && (
          <div>
            <p>
              <strong>Nombre:</strong> {usuario.nombre}
            </p>
            <p>
              <strong>Apellido:</strong> {usuario.apellido}
            </p>
              <p>
              <strong>Apellido2:</strong> {usuario.apellido2}
            </p>
            <p>
              <strong>Correo:</strong> {usuario.correo}
            </p>
            <p>
              <strong>Dirección:</strong> {usuario.direccion}
            </p>
            <p>
              <strong>Teléfono:</strong> {usuario.telefono}
            </p>
            <p>
              <strong>Teléfono2:</strong> {usuario.telefono2}
            </p>
            <p>
              <strong>Tipo Documento:</strong> {usuario.tipDocumenId}
            </p>
             <p>
              <strong>Numero Documento:</strong> {usuario.numdocumento}
            </p>
            {/* Puedes agregar más campos si están disponibles */}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUsuario;