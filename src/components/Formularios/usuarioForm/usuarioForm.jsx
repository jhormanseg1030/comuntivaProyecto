import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {obtenerDocumento} from "../../../api/tipDocuApi";
import ModalConexionFallida from "../../ModalConexionFallida";
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

    const handleSubmit = async (event) => {
      event.preventDefault();
      const form = event.currentTarget;

      if (form.checkValidity() === false){
        event.stopPropagation();
      } else{
        try {
          await onSubmit(formData);
          setMensajeUsuarioCreado("El usuario fue registrado exitosamente.");
          setUsuarioCreadoVisible(true);
        } catch (error) {
          setMenjaseErrorConexion(error.message);
          setConexionFallida(true);
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

        <button type="submit" className="usuario-form-button">
          {modo === "editar" ? "Actualizar" : "Guardar"}
        </button>
      </Form>

      <ModalConexionFallida
        show={conexionFallida}
        onClose={() => setConexionFallida(false)}
        mensaje={mensajeErrorConexion}
      />
    </div>
  );

};


export default FormularioUsuario;