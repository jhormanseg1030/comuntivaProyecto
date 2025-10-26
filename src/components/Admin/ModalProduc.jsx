import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImgP from '../imagenes/ImgP.jfif';
import ImgP2 from '../imagenes/ImgP2.jpg';
import ImgP3 from '../imagenes/ImgP3.webp';
import Pinea from '../imagenes/Pinea.jpg';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import './ModalProduc.css';

function ModalProduc({show, handleClose}) { 
  const navigate = useNavigate();

  const Prod = () => {
    handleClose();
    navigate('/Productos');
  };

  const Carr = () => {
    handleClose();
    navigate('/carrito');
  };

  return (
    <> <div className='con1'>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
          <Modal.Body closeButton>
            <div className='Cont1'>
              <div className='imagencitas'>
                <Image className='Imagen mb-3' src={ImgP} rounded />
                <Image className='Imagen mb-3' src={ImgP2} rounded />
                <Image className='Imagen mb-3' src={ImgP3} rounded />
                <Image className='Imagen mb-3' src={Pinea} rounded />
              </div>
              <div>
                <img className='im' src={Pinea} alt="" />
              </div>
              <div className='Cont2'>
                <div className="desct-pro"><h5>-30% OFF</h5></div>
                <h4>Tienda: Don Juan</h4>
                <h4>Piña 1und</h4>
                <h5>4.0<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>
                </h5>
                <div><span className="ofer">$ 3.654</span> <span className="Prec">$ 5.220</span></div>
                <h4>Pago de envío/Gratis</h4>
                <hr />
                  <h5>Deliciosa piña proveniente del municipio de Chía, 100% Colombiana. Perfecta para tus jugos, ensaladas y postres.</h5>
              </div>
            </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={Prod}>
            Ver detalles
          </Button>
          <Button variant="success" onClick={Carr}>
            Agregar al carrito
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default ModalProduc;