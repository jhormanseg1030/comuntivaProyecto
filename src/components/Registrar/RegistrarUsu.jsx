import imagen1 from '../imagenes/imagen1.jpg';
import './Registrar.css';
import FormularioUsuario from '../Formularios/usuarioForm/usuarioForm';
import {crearUsuario} from "../../api/usuarioApi";
import "../Estilos_Form_usuario/usuarioForm.css";

const initialFormState = {
  nombre: "",
  apellido: "",
  apellido2: "",
  telefono: "",
  telefono2: "",
  correo: "",
  numdocumento: "",
  password: "",
  tipId: "",
};


const RegistrarUsu = () => {
  return (
    <div className="main-wrapper registro-flex">
      <div className="registro-imagen">
        <img src={imagen1} alt="Imagen decorativa de registro" className="registro-img" />
      </div>
      <div className="registro-formulario">
        <div className="form-container-expanded">
          {/* Formulario de registro de usuario a la derecha */}
          <FormularioUsuario modo="crear" onSubmit={crearUsuario} />
        </div>
      </div>
    </div>
  );
};

export default RegistrarUsu;