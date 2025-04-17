import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './estilos.css';
import '../imagenes/Conmutiva.jpeg';
function InicioSe() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese email" />
        <Form.Text className="text-muted">
        Nunca compartiremos tu correo electrónico con nadie más..
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingrese
      </Button>
    </Form>
  );
}

export default InicioSe;