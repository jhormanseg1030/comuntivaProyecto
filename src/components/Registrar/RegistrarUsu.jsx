import React from 'react';
import './Registrar.css'
import { Link } from 'react-router-dom';
import imagen1 from '../imagenes/imagen1.jpg'

const RegistrarUsu = () => {
    return (
        <div className="main-wrapper"> 
            
            <div className="image-section">
                <img src={imagen1} alt="Imagen decorativa de registro" /> 
            </div>
            
            <div className="form-section">
                <div className="form-container-expanded">
                    <form className="registration-form"> 
                        <h2>Registro de Usuario</h2>
                        
                        <div className="form-group-expanded">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" className="expanded-input" required />
                        </div>
                        
                        <div className="form-group-expanded">
                            <label htmlFor="lastName">Apellido:</label>
                            <input type="text" id="lastName" className="expanded-input" required />
                        </div>
                        
                        <div className="form-group-expanded">
                            <label htmlFor="documentType">Tipo de Documento:</label>
                            <select id="documentType" className="expanded-input" required>
                                <option value="">Selecciona un tipo</option>
                                <option value="cc">Cédula</option>
                                <option value="ti">Cedula Extranjeria</option>
                                <option value="ti">Passaporte</option>
                            </select>
                        </div>
                        
                        
                        <div className="form-group-expanded">
                            <label htmlFor="documentNumber">Número de Documento:</label>
                            <input type="text" id="documentNumber" className="expanded-input" required />
                        </div>
                        
                        <div className="form-group-expanded">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" className="expanded-input" required />
                        </div>
                        
                        <div className="form-group-expanded">
                            <label htmlFor="birthDate">Fecha de Nacimiento:</label>
                            <input type="date" id="birthDate" className="expanded-input" required />
                        </div>
                        
                        <div className="form-group-expanded">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" className="expanded-input" required />
                        </div>
                        
                        <div className="form-footer-expanded">
                            <Link to="/login" className="register-link">¿Ya tienes cuenta?</Link>
                            <Link to= "/Login"><button type="submit" className="submit-btn-expanded">Registrarse</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrarUsu;
