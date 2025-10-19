import React, { useState, useRef, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import './Actu_Clie.css';
import { actualizarUsuario } from '../../api/usuarioApi';

function Actu_Clie() {
  const { user, updateUser } = useContext(UserContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef();
  const fileInputRef = useRef();

  useEffect(() => {
    // populate initial preview if context has image data
    if (user && user.perfilImageDataUrl) {
      setImagePreview(user.perfilImageDataUrl);
    }
  }, [user]);

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
      const formElements = event.target.elements;
      // Adaptar los nombres de los campos al DTO UsuarioUpdateDto
      const updated = {
        id_us: user?.id_us,
        nomb: formElements.formNombreCompleto.value,
        apell: formElements.formApellido.value,
        apell2: formElements.formApellido2.value,
        telefo: formElements.formTelefono.value,
        telefo2: formElements.formTelefono2.value,
        corr: formElements.formEmail.value,
        numdocument: formElements.formNumdocumento.value,
        passwo: formElements.formPassword.value,
        tipDocuId: formElements.formTipDocuId.value,
      };
      // Llamar API para actualizar usuario
      await actualizarUsuario(user?.id_us, updated);
      // Si hay imagen, actualizar en contexto
      if (profileImage) {
        const reader = new FileReader();
        reader.onloadend = () => {
          updateUser({ ...updated, perfilImageDataUrl: reader.result });
        };
        reader.readAsDataURL(profileImage);
      } else {
        updateUser(updated);
      }
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setTimeout(() => {
        formRef.current.reset();
        setProfileImage(null);
        if (!user || !user.perfilImageDataUrl) setImagePreview(null);
        fileInputRef.current.value = '';
      }, 2000);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      alert('Ocurrió un error al actualizar el usuario.');
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
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingrese su nombre" 
                defaultValue={user?.nomb || ''}
                required
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese su apellido" 
                  defaultValue={user?.apell || ''}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formApellido2">
                <Form.Label>Segundo Apellido</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese su segundo apellido" 
                  defaultValue={user?.apell2 || ''}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Ingrese su número telefónico" 
                  defaultValue={user?.telefo || ''}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formTelefono2">
                <Form.Label>Teléfono 2</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Ingrese su número telefónico alternativo" 
                  defaultValue={user?.telefo2 || ''}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="ejemplo@correo.com" 
                  defaultValue={user?.corr || ''}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formNumdocumento">
                <Form.Label>Número de Documento</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese su número de documento" 
                  defaultValue={user?.numdocument || ''}
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Ingrese su contraseña" 
                  defaultValue={user?.passwo || ''}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formTipDocuId">
                <Form.Label>Tipo de Documento ID</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Ingrese el ID del tipo de documento" 
                  defaultValue={user?.tipDocuId || ''}
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