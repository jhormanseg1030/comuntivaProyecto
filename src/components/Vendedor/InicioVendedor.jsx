import React from 'react';
import './Vendedor.css';
import { Link } from 'react-router-dom';
import imagen1 from '../imagenes/imagen1.jpg';

const InicioVendedor = () => {
return (
    <div className="vendedor-main-wrapper">
        <div className="vendedor-image-section">
            <img src={imagen1} alt="Imagen decorativa" />
        </div>

    <div className="vendedor-form-section">
        <form className="vendedor-form-full">
            <h2>Registro Admin</h2>

        <div className="vendedor-flex-column">
            <label>Nombre de usuario</label>
        </div>

        <div className="vendedor-inputForm">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 32 32"
                height="20"
            >
                <g data-name="Layer 3" id="Layer_3">
                    <path
                        d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
                        fill="#4CAF50"
                    ></path>
                </g>
            </svg>
            <input placeholder="Ingresa tu nombre de usuario" className="vendedor-input" type="text" />
        </div>

        <div className="vendedor-flex-column">
            <label>Contraseña</label>
        </div>

        <div className="vendedor-inputForm">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="-64 0 512 512"
                height="20"
            >
                    <path
                        d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
                        fill="#4CAF50"
                    ></path>

                <path
                    d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
                    fill="#4CAF50"
                ></path>
            </svg>
            <input placeholder="Ingresa tu contraseña" className="vendedor-input" type="password" />
        </div>

            <div className="vendedor-flex-column">
                <label>Confirmar Contraseña</label>
            </div>

        <div className="vendedor-inputForm">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="-64 0 512 512"
                height="20"
            >
            <path
                d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
                fill="#4CAF50"
            ></path>
                <path
                    d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
                    fill="#4CAF50"
                ></path>
            </svg>
            <input placeholder="Confirma tu contraseña" className="vendedor-input" type="password" />
        </div>

        <div className="vendedor-flex-row">
            <div>
                <input type="checkbox" id="vendedor-terms" />
                <label htmlFor="vendedor-terms">Acepto los términos y condiciones</label>
            </div>
        </div>

        <div className="vendedor-link-section">
            <Link to="/olvido-contraseña" className="vendedor-span">¿Olvidó su contraseña?</Link>
        </div>
            <Link to="/ConfTienda">
                <button className="vendedor-button-submit">Inciar Sersion Mod Admin</button>
            </Link>
        </form>
            </div>
    </div>
);
}

export default InicioVendedor;