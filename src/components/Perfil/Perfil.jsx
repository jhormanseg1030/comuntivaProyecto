import perfil from '../imagenes/perfil.png';
import './Perfi.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Perfil = () => {
  const { user } = useContext(UserContext);

  const imageSrc = user?.perfilImageDataUrl || perfil;

  return (
    <div className='Fondo'>
      <div>
        <div className="Perfil-container">
          <div className="perfil-header">
            <span className="name">{user?.nomb || 'Sin nombre'}</span>
          </div>

          <div className="perfil-content">
            <div className="perfil-pic">
              <img 
                src={imageSrc} 
                alt="Perfill" 
                className="perfil-image"
              />
            </div>
            
            <div className="perfil-info">
              <h2 className="perfil-name">{user?.nomb || 'Sin nombre'}</h2>
              
              <div className="info-section">
                <div className="info-row">
                  <span className="info-label">Nombre:</span>
                  <span className="info-value">{user?.nomb || '-'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Apellido:</span>
                  <span className="info-value">{user?.apell || '-'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Segundo Apellido:</span>
                  <span className="info-value">{user?.apell2 || '-'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Teléfono:</span>
                  <span className="info-value">{user?.telefo || '-'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Teléfono 2:</span>
                  <span className="info-value">{user?.telefo2 || '-'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Correo:</span>
                  <span className="info-value">{user?.corr || '-'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Número de Documento:</span>
                  <span className="info-value">{user?.numdocument || '-'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Contraseña:</span>
                  <span className="info-value">{user?.passwo ? '********' : '-'}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Tipo de Documento ID:</span>
                  <span className="info-value">{user?.tipDocuId || '-'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="Sal">

            <button className="send-button" onClick={() => window.location.href = "/Segunda"}>Volver</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;