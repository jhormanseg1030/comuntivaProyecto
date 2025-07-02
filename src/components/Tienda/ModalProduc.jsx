import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Pinea from '../imagenes/Pinea.jpg';
import Col from 'react-bootstrap/Col';

function ModalProduc({show, handleClose}) {
 

  return (
    <>
      
      <Modal show={show} onHide={handleClose} centered> 
        <Modal.Header closeButton>
          <Modal.Title className='titulo' >Piña 1 Und</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Col xs={10} md={6}>
           <Image className='Img-Big' src={Pinea} rounded />
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProduc;