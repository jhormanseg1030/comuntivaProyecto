import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { obtenerUnidad } from '../../api/unidad_medidaApi';
import { crearProducto } from '../../api/productoApi';
import { obtenerTienda } from '../../api/TiendaApi';

function ProductoTienda() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [unidades, setUnidades] = useState([]);
  const [tiendas, setTiendas] = useState([]);
  const [unidadId, setUnidadId] = useState('');
  const [tiendaId, setTiendaId] = useState('');

  const formRef = useRef();
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchUnidades = async () => {
      try {
        const data = await obtenerUnidad();
        setUnidades(data);
      } catch (err) {
        console.error("Error al cargar unidades", err);
      }
    };

    const fetchTiendas = async () => {
      try {
        const data = await obtenerTienda();
        setTiendas(data);
      } catch (err) {
        console.error("Error al cargar tiendas", err);
      }
    };

    fetchUnidades();
    fetchTiendas();
  }, []);

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
      const formElements = event.target.elements;

      const payload = {
        nombre_Producto: formElements.nombre_Producto.value,
        valor: parseFloat(formElements.valor.value),
        cantidad: parseInt(formElements.cantidad.value),
        descripcion: formElements.descripcion.value,
        id_tienda: parseInt(tiendaId),
        id_medida: parseInt(unidadId),
        imagen: productImage?.name || ''
      };

      await crearProducto(payload);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);

      setTimeout(() => {
        formRef.current.reset();
        setProductImage(null);
        setImagePreview(null);
        fileInputRef.current.value = '';
        setUnidadId('');
        setTiendaId('');
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
                  <Form.Group className="mb-3" controlId="id_tienda">
                    <Form.Label>Seleccionar Tienda</Form.Label>
                    <Form.Select
                      value={tiendaId}
                      onChange={(e) => setTiendaId(e.target.value)}
                      required
                    >
                      <option value="">Seleccione una tienda</option>
                      {tiendas.map((t) => (
                        <option key={t.id_ti} value={t.id_ti}>
                          {t.nomti}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="nombre_Producto">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del producto" required />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="valor">
                      <Form.Label>Valor</Form.Label>
                      <Form.Control type="number" placeholder="Ingrese el valor" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="cantidad">
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control type="number" placeholder="Ingrese la cantidad" required />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="descripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción del producto" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="id_medida">
                    <Form.Label>Unidad de Medida</Form.Label>
                    <Form.Select
                      value={unidadId}
                      onChange={(e) => setUnidadId(e.target.value)}
                      required
                    >
                      <option value="">Seleccione una unidad</option>
                      {unidades.map((u) => (
                        <option key={u.id_Medida} value={u.id_Medida}>
                          {u.tip_Medida}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  {showSuccess && (
                    <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                      ¡El producto ha sido guardado correctamente!
                    </Alert>
                  )}

                  <div>
                    <Button variant="success" type="submit" size="md" disabled={isSubmitting}>
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