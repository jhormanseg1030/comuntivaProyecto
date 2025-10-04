import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {obtenerDocumento} from "../../../api/tipDocuApi";

// Componente reutilizable para crear o editar
const FormularioUsuario = ({ onSubmit, modo, usuario = null }) => {
  // Estado local para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    tipDocumenId: "",
  });

  // Estado para listas de cargos y oficinas
  const [tipDocumens, setTipDocumens] = useState([]);

  // Estado para activar validación visual
  const [validated, setValidated] = useState(false);

  // Cargar datos del empleado si estamos en modo edición
  useEffect(() => {
    if (modo === "editar" && usuario) {
      setFormData({
        nombre: usuario.nombre || "",
        apellido: usuario.apellido || "",
        telefono: usuario.telefono || "",
        correo: usuario.correo || "",
        tipDocumenId: usuario.tipDocumenId || "",
      });
    }
  }, [modo, usuario]);
  // Cargar lista de tipoducu
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const tipDocusData = await obtenerDocumento();
        setTipDocumens(tipDocusData);
        //si hay un error de conexión, se muestra el modal
      } catch (error) {
        if (error != null) {
          console.error("Error al cargar tipos de documento:", error.message);
        }
      }
    };
    cargarDatos();
  }, []);

  // Actualizar estado local al cambiar cualquier campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejar envío del formulario con validación
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onSubmit(formData); // Enviar datos a vista que invocó el formulario
    }

    setValidated(true);
  };

  return (
    <div className="col-md-8 align-items-center mx-auto p-4 border rounded bg-light">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Campos básicos: nombre y apellido */}
        <Row className="mb-6">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombres"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Datos ok!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellidos"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Datos ok!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* Dirección y teléfono */}
        <Row className="mb-6">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Datos ok!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Datos ok!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* Selects de tipo documento */}
        <Row className="mb-6">
          <Form.Group as={Col} md="6" controlId="formGrtipDocumenId">
            <Form.Label>Tipo de documento</Form.Label>
            <Form.Select
              name="tipDocumenId"
              value={formData.tipDocumenId}
              onChange={handleChange}
              required
              className="form-select mb-2"
            >
            <option value="">Seleccione un tipo de documento</option>
              {tipDocumens.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                {tipo.tipo} {/* o tipo.tipDocumento si así viene del backend */}
              </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        {/* Botón de envío con texto dinámico */}
        <button type="submit" className="btn btn-success">
          {modo === "editar" ? "Actualizar" : "Guardar"}
        </button>
      </Form>
    </div>
  );
};

export default FormularioUsuario;