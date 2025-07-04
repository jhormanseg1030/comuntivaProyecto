import perfil from '../imagenes/perfil.png';
import './Perfi.css';
const Perfil = () => {
  return (
    <div className='Fondo'>
    <div>
    <div className="Perfil-container">
      <div className="perfil-header">
            <span className="name">Joe Hernandez</span>
      </div>

      <div className="perfil-content">
        <div className="perfil-pic">
          <img 
            src={perfil} 
            alt="Perfill" 
            className="perfil-image"
          />
        </div>
        
        <div className="perfil-info">
          <h2 className="perfil-name">Joe Hernandez</h2>
          
          <div className="info-section">
            <div className="info-row">
              <span className="info-label">Telefono:</span>
              <span className="info-value">315 839 5685</span>
            </div>
            <div className="info-row">
              <span className="info-label">ubicación:</span>
              <span className="info-value">Vereda, Rincon Grande (Cáqueza)</span>
            </div>
            <div className="info-row">
              <span className="info-label">Profession:</span>
              <span className="info-value">Agricultora</span>
            </div>
            <div className='info-row'>
              <span className="info-label">Tipo de Documento:</span>
              <span className="info-value">C.C</span>
            </div>
            <div className='info-row'>
              <span className="info-label">Numero de Documento:</span>
              <span className="info-value">1025458865</span>
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