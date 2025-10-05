import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {obtenerDocumento} from "../../../api/tipDocuApi";
import ModalUsuarioCreado from "../../ModalUsuarioCreado";
import ModalConexionFallida from "../../ModalConexionFallida";

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

  const [usuarioCreadoVisible, setUsuarioCreadoVisible] = useState(false);
  const [mensajeUsuarioCreado, setMensajeUsuarioCreado] = useState("");

  const [conexionFallida, setConexionFallida] = useState(false);


  return(
  <div className="col-md-8 mx-auto p-4 border rounded bg-light">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required type="text" placeholder= "Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
          
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control required type="text" placeholder= "Apellido" name="apellido" value={formData.apellido} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Segundo Apellido</Form.Label>
            <Form.Control required type="text" placeholder= "Segundo Apellido" name="apellido2" value={formData.apellido2} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Correo</Form.Label>
            <Form.Control required type="email" placeholder="Correo" name="correo" value={formData.correo} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control required type="tel" placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Teléfono Alternativo</Form.Label>
            <Form.Control required type="tel" placeholder="Teléfono Alternativo" name="telefono2" value={formData.telefono2} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom07">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Select required name="tipId" value={formData.tipId} onChange={handleChange}>

              <option value="">Seleccione un tipo de documento...</option>
              {Documentos.map((tipo) => (
                <option key={tipo.id_tipdocu} value={tipo.id_tipdocu}>
                  {tipo.tipo}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Número de Documento</Form.Label>
            <Form.Control required name="numdocumento" value={formData.numdocumento} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control required type="password" name="password" value={formData.password} onChange={handleChange} />
          </Form.Group>
        </Row>

        <button type="submit" className="btn btn-success">
          {modo === "editar" ? "Actualizar" : "Guardar"}
        </button>
      </Form>

      <ModalUsuarioCreado
        show={usuarioCreadoVisible}
        onClose={() => setUsuarioCreadoVisible(false)}
        mensaje={mensajeUsuarioCreado}
      />

      <ModalConexionFallida
        show={conexionFallida}
        onClose={() => setConexionFallida(false)}
        mensaje={mensajeErrorConexion}
      />
    </div>
  );





















};


export default FormularioUsuario;