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
              <strong>Nombre:</strong> {usuario.nom_u}
            </p>
            <p>
              <strong>Apellido:</strong> {usuario.ape}
            </p>
              <p>
              <strong>Apellido2:</strong> {usuario.ape2}
            </p>
            <p>
              <strong>Correo:</strong> {usuario.corr}
            </p>
            <p>
              <strong>Teléfono:</strong> {usuario.tele}
            </p>
            <p>
              <strong>Teléfono2:</strong> {usuario.tele2}
            </p>
            <p>
              <strong>Tipo Documento:</strong> {usuario.nom_tipdocu}
            </p>
             <p>
              <strong>Numero Documento:</strong> {usuario.numdocu}
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