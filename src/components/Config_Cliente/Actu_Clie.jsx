import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import './Actu_Clie.css';

function Actu_Clie() {
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
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
      
      setProfileImage(file);
      
      
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
      
   
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }
      
      
      const formElements = event.target.elements;
      formData.append('nombreCompleto', formElements.formNombreCompleto.value);
      formData.append('email', formElements.formEmail.value);
      formData.append('fechaNacimiento', formElements.formFechaNacimiento.value);
      formData.append('departamento', formElements.formDepartamento.value);
      formData.append('vereda', formElements.formVereda.value);
      formData.append('sexo', formElements.formSexo.value);
      formData.append('telefono', formElements.formTelefono.value);
      
     
      console.log('Datos a enviar:', {
        nombreCompleto: formElements.formNombreCompleto.value,
        email: formElements.formEmail.value,
        
        tieneImagen: !!profileImage
      });
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      
      
      setTimeout(() => {
        formRef.current.reset();
        setProfileImage(null);
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
    <Container className="form-container">
      <Row>
    
        <Col lg={8}>
          <Form ref={formRef} className="centered-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNombreCompleto">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingrese su nombre completo" 
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="ejemplo@correo.com" 
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formFechaNacimiento">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formDepartamento">
                <Form.Label>Departamento</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese su departamento" 
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formVereda">
                <Form.Label>Vereda</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese su vereda" 
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formSexo">
                <Form.Label>Sexo</Form.Label>
                <Form.Select required>
                  <option value="">Seleccione...</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Ingrese su número telefónico" 
                  required
                />
              </Form.Group>
            </Row>

            {showSuccess && (
              <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                ¡Tus datos han sido actualizados correctamente!
              </Alert>
            )}

            <div className="d-grid gap-2">
              <Button 
                variant="primary" 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Actualizar'}
              </Button>
            </div>
          </Form>
        </Col>

        
        <Col lg={4}>
          <div className="profile-picture-container">
            <div className="profile-picture-upload">
              <div className="image-preview">
                {imagePreview ? (
                  <img src={imagePreview} alt="Vista previa de perfil" />
                ) : (
                  <span>Foto de perfil</span>
                )}
              </div>
              <Form.Group controlId="formImagenPerfil" className="mt-3">
                <Form.Label>Subir imagen</Form.Label>
                <Form.Control 
                  type="file" 
                  accept="image/jpeg, image/png" 
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
              </Form.Group>
              <p className="image-helper-text">
                Formatos aceptados: JPG, PNG (Max. 2MB)
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Actu_Clie;