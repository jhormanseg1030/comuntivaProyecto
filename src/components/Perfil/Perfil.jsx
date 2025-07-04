import React from 'react';
import './Perfi.css';
import perfil from '../imagenes/perfil.png';

const Perfil = () => {
  return (
    <div className="Perfil-container">
      <div className="profile-header">
            <span className="name">Joe Hernandez</span>
      </div>

      <div className="profile-content">
        <div className="profile-pic">
          <img 
            src={perfil} 
            alt="Profile" 
            className="profile-image"
          />
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">Joe Hernandez</h2>
          
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
              <span className="info-value">C.c</span>
            </div>
            <div className='info-row'>
              <span className="info-label">Numero de Documento:</span>
              <span className="info-value">1025458865</span>
            </div>
          </div>
        </div>
      </div>

      <div className="Sal">
        <button className="send-button">Volver</button>
      </div>
    </div>
  );
};

export default Perfil;