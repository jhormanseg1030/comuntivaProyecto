import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  Container from 'react-bootstrap/Container';
import './Actu_Clie.css'

function Actu_Clie() {
    return (
        <>
        <Container className="form-container">
            <Form className="centered-form">
                
                <Form.Group className="mb-3" controlId="formNombreCompleto">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre completo" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="ejemplo@correo.com" />
                    </Form.Group>

                    
                    <Form.Group as={Col} controlId="formFechaNacimiento">
                        <Form.Label>Fecha de Nacimiento</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formDepartamento">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su departamento" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formVereda">
                        <Form.Label>Vereda</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su vereda" />
                    </Form.Group>
                </Row>

                
                <Form.Group className="mb-3" controlId="formSexo">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select>
                        <option value="">Seleccione...</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </Form.Select>
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                        Guardar
                    </Button>
                </div>
            </Form>
        </Container>
    </>    
    );
}

export default Actu_Clie;