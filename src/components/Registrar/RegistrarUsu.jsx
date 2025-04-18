import React from 'react';
import './Registrar.css'
import { Link } from 'react-router-dom';

const RegistrarUsu = () => {
    return (
        <div className="form-container">
      <form className="registration-form">
      <h2>Registro de Usuario</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="documentType" className="form-label">
            Tipo de Documento:
          </label>
          <select
            id="documentType"
            name="documentType"
            className="form-select"
            required
          >
            <option value="">Selecciona un tipo de documento</option>
            <option value="cc">Cédula de Ciudadanía</option>
            <option value="ti">Tarjeta de Identidad</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="documentNumber" className="form-label">
            Número de Documento:
          </label>
          <input
            type="text"
            id="documentNumber"
            name="documentNumber"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Correo Electronico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required
          />
        </div>    

        <div className="form-group">
          <label htmlFor="birthDate" className="form-label">
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            required
          />
        </div>
        <Link to="/login"><button type="submit" className="submit-button">
          Registrarse
        </button></Link>
      </form>
    </div>
    );
}

export default RegistrarUsu;
