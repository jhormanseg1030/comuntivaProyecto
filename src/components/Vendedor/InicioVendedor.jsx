import React from "react";
import './Vendedor.css';
import { Link } from "react-router-dom";
const InicioVendedor = () => {
    return (
        <div className=" container2">
            <form className="form">
                <h2>Registro de tienda</h2>
                <div className="form-group">
                    <label htmlFor="name">Nombre de la tienda a registrar</label><br/>
                    <input type="text" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="User"> Nombre de usuario</label><br />
                    <input type="text" id="User" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label><br />
                    <input type="password" id="password" required />
                </div>
                <div>
                    <Link> olvido su contraseña</Link>
                </div>
                < Link to="/Tienda"><button type="submit" className="submit-button ">Enviar</button></Link>
            </form>
        </div>
    );
}

export default InicioVendedor;
