import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

function ProductoTienda() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [productImage, setProductImage] = useState(null);
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
      
      setProductImage(file);
      
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
      
      if (productImage) {
        formData.append('productImage', productImage);
      }
      
      const formElements = event.target.elements;
      formData.append('idTienda', formElements.formIdTienda.value);
      formData.append('nombreProducto', formElements.formNombreProducto.value);
      formData.append('valor', formElements.formValor.value);
      formData.append('cantidad', formElements.formCantidad.value);
      formData.append('descripcion', formElements.formDescripcion.value);
      
      console.log('Datos de producto a enviar:', {
        idTienda: formElements.formIdTienda.value,
        nombreProducto: formElements.formNombreProducto.value,
        valor: formElements.formValor.value,
        cantidad: formElements.formCantidad.value,
        descripcion: formElements.formDescripcion.value,
        tieneImagen: !!productImage
      });
      
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      
      setTimeout(() => {
        formRef.current.reset();
        setProductImage(null);
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
      <h1>Productos</h1>
      <div className="contenido-dinamico">
        <div className="inicio-container">
          <p>Aquí puedes gestionar los productos de la sucursal</p>
          <Container className="sucursal-form-container">
            <Row>
              <Col lg={8}>
                <Form ref={formRef} className="sucursal-centered-form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formIdTienda">
                    <Form.Label>ID (Tienda)</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Ingrese el ID único del producto" 
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formNombreProducto">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Ingrese el nombre del producto" 
                      required
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formValor">
                      <Form.Label>Valor</Form.Label>
                      <Form.Control 
                        type="number" 
                        placeholder="Ingrese el valor" 
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCantidad">
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control 
                        type="number" 
                        placeholder="Ingrese la cantidad" 
                        required
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formDescripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3}
                      placeholder="Ingrese la descripción del producto" 
                    />
                  </Form.Group>

                  {showSuccess && (
                    <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                      ¡El producto ha sido guardado correctamente!
                    </Alert>
                  )}

                  <div>
                    <Button 
                      variant="success" 
                      type="submit" 
                      size="md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Guardando...' : 'Guardar Producto'}
                    </Button>
                  </div>
                </Form>
              </Col>

              <Col lg={4}>
                <div className="sucursal-picture-container">
                  <div className="sucursal-picture-upload">
                    <div className="sucursal-image-preview">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Vista previa del producto" />
                      ) : (
                        <span>Imagen del producto</span>
                      )}
                    </div>
                    <Form.Group controlId="formImagenProducto" className="mt-3">
                      <Form.Label>Subir imagen del producto</Form.Label>
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

export default ProductoTienda;