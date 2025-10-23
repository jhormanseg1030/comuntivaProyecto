import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"; 
import Row from "react-bootstrap/Row";
import {obtenerDocumento} from "../../../api/tipDocuApi";
import ModalConexionFallida from "../../ModalConexionFallida";
import ModalRegistroUsuario from '../../ModalRegistroUsuario';
import "../../Estilos_Form_usuario/usuarioForm.css";

const FormularioUsuario = ({ onSubmit, modo = "crear", usuario = null }) => {
  const [formData, serFormData]= useState({
    nombre: "",
    apellido: "",
    apellido2: "",
    telefono: "",
    telefono2: "",
    correo: "",
    numdocumento: "",
    password: "",
    tipId: "",
  });

  const [Documentos, setDocumentos] = useState([]);
  const [validated, setValidated] = useState(false);
  const [usuarioCreadoVisible, setUsuarioCreadoVisible] = useState(false);
  const [mensajeUsuarioCreado, setMensajeUsuarioCreado] = useState("");

  useEffect(() => {
    if (modo === "editar" && usuario) {
      serFormData({
        nombre: usuario.nombre || "",
        apellido: usuario.apellido || "",
        apellido2: usuario.apellido2 || "",
        telefono: usuario.telefono || "",
        telefono2: usuario.telefono2 || "",
        correo: usuario.correo || "",
        numdocumento: usuario.numdocumento || "",
        password: usuario.password || "",
        tipId: usuario.tipId || "",
      });
    }
  }, [modo, usuario]);

  const [mensajeErrorConexion, setMenjaseErrorConexion] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      try{
        const DocumentosData = await obtenerDocumento();
        setDocumentos(DocumentosData);
        console.log("Documentos cargados:", DocumentosData);
      } catch (error) {
        if (error != null){
        setMenjaseErrorConexion(error.message);
        setConexionFallida(true);
        }
      }
    };
    cargarDatos();
  }, []);

  const handleChange = (event) =>{
    const {name , value} = event.target;
    serFormData((prev) => ({...prev, [name]: value}));
  }

    const [showModalRegistro, setShowModalRegistro] = useState(false);
    const [mensajeModalRegistro, setMensajeModalRegistro] = useState("");
    const [camposFaltantes, setCamposFaltantes] = useState([]);
    const [documentoExistente, setDocumentoExistente] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      let campos = [];
      // Validación manual de campos obligatorios
      if (!formData.nombre) campos.push("nombre");
      if (!formData.apellido) campos.push("apellido");
      if (!formData.correo) campos.push("correo");
      if (!formData.numdocumento) campos.push("numdocumento");
      if (!formData.password) campos.push("password");
      if (!formData.tipId) campos.push("tipId");

      if (campos.length > 0) {
        setCamposFaltantes(campos);
        setDocumentoExistente(false);
        setMensajeModalRegistro("Usuario no creado. Faltan los siguientes campos: " + campos.join(", "));
        setShowModalRegistro(true);
        setValidated(true);
        return;
      }

      if (form.checkValidity() === false) {
        event.stopPropagation();
        return;
      } else {
        try {
          await onSubmit(formData);
          setMensajeUsuarioCreado("El usuario fue registrado exitosamente.");
          setUsuarioCreadoVisible(true);
          setMenjaseErrorConexion("");
          setConexionFallida(false);
        } catch (error) {
          let existeDoc = false;
          let mensaje = error.message || "Usuario no creado.";
          if (mensaje.includes("Ya existe un usuario con este número de documento")) {
            existeDoc = true;
            mensaje = "El número de documento ya fue registrado.";
          }
          setCamposFaltantes([]);
          setDocumentoExistente(existeDoc);
          setMensajeModalRegistro(mensaje);
          setShowModalRegistro(true);
          setMenjaseErrorConexion("");
          setConexionFallida(false);
          setMensajeUsuarioCreado("");
          setUsuarioCreadoVisible(false);
        }
      }
      setValidated(true);
    };

  const [conexionFallida, setConexionFallida] = useState(false);


  return (
    <div className="usuario-form-container">
      <h4 className="usuario-form-title">
        {modo === "editar" ? "Editar Usuario" : "Registrar Usuario"}
      </h4>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label className="usuario-form-label">Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="usuario-form-control"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label className="usuario-form-label">Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="usuario-form-control"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label className="usuario-form-label">Segundo Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Segundo Apellido"
              name="apellido2"
              value={formData.apellido2}
              onChange={handleChange}
              className="usuario-form-control"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label className="usuario-form-label">Correo</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="usuario-form-control"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label className="usuario-form-label">Teléfono</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="usuario-form-control"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label className="usuario-form-label">Teléfono Alternativo</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Teléfono Alternativo"
              name="telefono2"
              value={formData.telefono2}
              onChange={handleChange}
              className="usuario-form-control"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom07">
            <Form.Label className="usuario-form-label">Tipo de Documento</Form.Label>
            <Form.Select
              required
              name="tipId"
              value={formData.tipId}
              onChange={handleChange}
              className="usuario-form-control"
            >
              <option value="">Seleccione un tipo de documento...</option>
              {Documentos.map((tipo) => (
                <option key={tipo.id_tipdocu} value={tipo.id_tipdocu}>
                  {tipo.tipo}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label className="usuario-form-label">Número de Documento</Form.Label>
            <Form.Control
              required
              name="numdocumento"
              value={formData.numdocumento}
              onChange={handleChange}
              className="usuario-form-control"
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} md="6">
            <Form.Label className="usuario-form-label">Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="usuario-form-control"
            />
          </Form.Group>
        </Row>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <Link to="/login" style={{ fontSize: '0.98rem', color: '#1a73e8', textDecoration: 'underline' }}>
            ¿Ya tienes cuenta?
          </Link>
          <button type="submit" className="usuario-form-button">
            {modo === "editar" ? "Actualizar" : "Guardar"}
          </button>
        </div>
      </Form>

      {/* Mensaje de éxito solo si el registro fue correcto */}
      {usuarioCreadoVisible && (
        <div className="alert alert-success mt-3" role="alert">
          {mensajeUsuarioCreado}
        </div>
      )}

      {/* Modal solo si hay error de conexión */}
      <ModalConexionFallida
        show={conexionFallida}
        onClose={() => setConexionFallida(false)}
        mensaje={mensajeErrorConexion}
      />

      <ModalRegistroUsuario
        show={showModalRegistro}
        onClose={() => setShowModalRegistro(false)}
        mensaje={mensajeModalRegistro}
        camposFaltantes={camposFaltantes}
        documentoExistente={documentoExistente}
      />
    </div>
  );

};


export default FormularioUsuario;