import React from 'react';
import './estilos.css'
import { Link } from 'react-router-dom';
import imagen3 from '../imagenes/imagen3.jpg'


const InicioSe = () => {
  return (
    <div className="main-wrapper">
      
      <div className="image-section">
        <img src={imagen3} alt="Imagen decorativa" />
      </div>
      
     
      <div className="form-section">
        <div className="form-container-expanded">
          <form className="login-form">
            <h2>Inicio de sesión</h2>
            
            <div className="form-group-expanded"> 
              <label htmlFor="email">Usuario o Correo Electrónico</label>
              <input type="text" id="email" required className="expanded-input" />
            </div>
            
            <div className="form-group-expanded">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" required className="expanded-input" />
              <Link to="/recuperar" className="forgot-password">¿Olvidó su contraseña?</Link>
            </div>
            
            <div className="form-footer-expanded">
              <Link to="/registro" className="register-link">¿No tienes cuenta?</Link>
              <button type="submit" className="submit-btn-expanded">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default InicioSe;
