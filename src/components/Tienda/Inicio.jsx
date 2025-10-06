import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import ModalDireccion from '../ModalDireccion';
import { crearTienda } from '../../api/TiendaApi';
import { obtenerDirecciones } from '../../api/DireccionesApi';

function InicioTienda() {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [direccionId, setDireccionId] = useState(null);
  const [direcciones, setDirecciones] = useState([]);
  const [nombreLogo, setNombreLogo] = useState('');
  const [sucursalImage, setSucursalImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchDirecciones = async () => {
      try {
        const data = await obtenerDirecciones();
        setDirecciones(data);
      } catch (err) {
        console.error("Error al cargar direcciones", err);
      }
    };
    fetchDirecciones();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSucursalImage(file);
    if (file) {
      setNombreLogo(file.name);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setNombreLogo('');
      setImagePreview(null);
    }
  };

  const handleDireccionCreada = async (id) => {
    setDireccionId(id);
    const data = await obtenerDirecciones();
    setDirecciones(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!direccionId) {
      alert("Por favor selecciona o crea una dirección.");
      setIsSubmitting(false);
      return;
    }

    try {
      const formElements = event.target.elements;
      const payload = {
        nomti: formElements.formNombreSucursal.value,
        direccId: direccionId,
        loogo: nombreLogo
      };
      
      const data = await crearTienda(payload);
      window.dispatchEvent(new CustomEvent("tiendaCreada", { detail: data }));

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);

      setTimeout(() => {
        formRef.current.reset();
        setSucursalImage(null);
        setImagePreview(null);
        fileInputRef.current.value = '';
        setDireccionId(null);
      }, 2000);

    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al guardar la tienda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Crear Tienda</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombreSucursal">
          <Form.Label>Nombre de la Tienda</Form.Label>
          <Form.Control type="text" placeholder="Ej: Tienda Central" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLogoSucursal">
          <Form.Label>Logo de la Tienda</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} />
          {imagePreview && (
            <div className="mt-2">
              <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px' }} />
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDireccion">
          <Form.Label>Seleccionar Dirección</Form.Label>
          <Form.Select
            value={direccionId || ''}
            onChange={(e) => setDireccionId(parseInt(e.target.value))}
            required
          >
            <option value="">Seleccione una dirección</option>
            {direcciones.map((dir) => (
              <option key={dir.id_direc} value={dir.id_direc}>
                {dir.nume} - {dir.barrio?.nomb}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="info" onClick={() => setShowModal(true)} className="me-2">
          Crear Nueva Dirección
        </Button>

        <Button style={{ backgroundColor: '#28a745', borderColor: '#28a745' }} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : "Guardar Información"}
        </Button>

        {showSuccess && (
          <Alert variant="success" className="mt-3">
            ¡Tienda creada exitosamente!
          </Alert>
        )}
      </Form>

      <ModalDireccion
        show={showModal}
        handleClose={() => setShowModal(false)}
        onDireccionCreada={handleDireccionCreada}
      />
    </div>
  );
}

export default InicioTienda;