import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

function InicioTienda() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [sucursalImage, setSucursalImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formRef = useRef();
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('La imagen no debe exceder los 2MB');
        fileInputRef.current.value = '';
        return;
      }
      
      if (!file.type.match('image.*')) {
        alert('Por favor seleccione un archivo de imagen (JPG, PNG)');
        fileInputRef.current.value = '';
        return;
      }
      
      setSucursalImage(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      if (sucursalImage) {
        formData.append('sucursalImage', sucursalImage);
      }
      
      const formElements = event.target.elements;
      formData.append('nombreSucursal', formElements.formNombreSucursal.value);
      formData.append('email', formElements.formEmail.value);
      formData.append('telefono', formElements.formTelefono.value);
      formData.append('direccion', formElements.formDireccion.value);
      formData.append('ciudad', formElements.formCiudad.value);
      formData.append('departamento', formElements.formDepartamento.value);
      formData.append('horarioApertura', formElements.formHorarioApertura.value);
      formData.append('horarioCierre', formElements.formHorarioCierre.value);
      formData.append('responsable', formElements.formResponsable.value);
      
      console.log('Datos de sucursal a enviar:', {
        nombreSucursal: formElements.formNombreSucursal.value,
        email: formElements.formEmail.value,
        telefono: formElements.formTelefono.value,
        direccion: formElements.formDireccion.value,
        ciudad: formElements.formCiudad.value,
        tieneImagen: !!sucursalImage
      });
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      
      setTimeout(() => {
        formRef.current.reset();
        setSucursalImage(null);
        setImagePreview(null);
        fileInputRef.current.value = '';
      }, 2000);
      
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Ocurrió un error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1>Configuración de Sucursal</h1>
      <div className="contenido-dinamico">
        <div className="inicio-container">
          <p>Aquí puedes configurar la información básica de tu sucursal</p>
          <Container className="sucursal-form-container">
            <Row>
              <Col lg={8}>
                <Form ref={formRef} className="sucursal-centered-form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formNombreSucursal">
                    <Form.Label>Nombre de la Sucursal</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Ingrese el nombre de la sucursal" 
                      required
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="sucursal@ejemplo.com" 
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formTelefono">
                      <Form.Label>Teléfono de Contacto</Form.Label>
                      <Form.Control 
                        type="tel" 
                        placeholder="Ingrese el número telefónico" 
                        required
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formDireccion">
                    <Form.Label>Dirección o Dominio de la Sucursal</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Cra 68 #677 sur ejemplo" 
                      required
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formCiudad">
                      <Form.Label>Ciudad</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Ingrese la ciudad" 
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formDepartamento">
                      <Form.Label>Departamento</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Ingrese el departamento" 
                        required
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formHorarioApertura">
                      <Form.Label>Horario de Apertura</Form.Label>
                      <Form.Control type="time" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formHorarioCierre">
                      <Form.Label>Horario de Cierre</Form.Label>
                      <Form.Control type="time" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formResponsable">
                      <Form.Label>Responsable</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Nombre del responsable" 
                        required
                      />
                    </Form.Group>
                  </Row>

                  {showSuccess && (
                    <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                      ¡Los datos de la sucursal han sido actualizados correctamente!
                    </Alert>
                  )}

                  <div className="d-grid gap-2">
                    <Button 
                      variant="success" 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Guardando...' : 'Guardar Información'}
                    </Button>
                  </div>
                </Form>
              </Col>

              <Col lg={4}>
                <div className="sucursal-picture-container">
                  <div className="sucursal-picture-upload">
                    <div className="sucursal-image-preview">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Vista previa de sucursal" />
                      ) : (
                        <span>Imagen de sucursal</span>
                      )}
                    </div>
                    <Form.Group controlId="formImagenSucursal" className="mt-3">
                      <Form.Label>Subir imagen de sucursal</Form.Label>
                      <Form.Control 
                        type="file" 
                        accept="image/jpeg, image/png" 
                        onChange={handleImageChange}
                        ref={fileInputRef}
                      />
                    </Form.Group>
                    <p className="sucursal-image-helper-text">
                      Formatos aceptados: JPG, PNG (Max. 2MB)
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default InicioTienda;