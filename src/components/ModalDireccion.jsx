// src/components/ModalDireccion.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { obtenerBarrio } from '../api/BarrioApi';
import { obtenerVias } from '../api/viasApi';
import { crearDireccion } from '../api/DireccionesApi';

function ModalDireccion({ show, handleClose, onDireccionCreada }) {
  const [barrios, setBarrios] = useState([]);
  const [vias, setVias] = useState([]);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [barriosData, viasData] = await Promise.all([
          obtenerBarrio(),
          obtenerVias()
        ]);
        setBarrios(barriosData);
        setVias(viasData);
      } catch (err) {
        setError("Error al cargar barrios o vías");
      }
    };
    if (show) fetchData();
  }, [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.target.elements;
    const payload = {
      nume: form.formNume.value,
      compl: form.formCompl.value,
      ubic_geo: form.formUbicGeo.value,
      barrioId: parseInt(form.formBarrio.value),
      viasId: parseInt(form.formVias.value),
      usuariosId: parseInt(form.formUsuario.value),

    };

    try {
        const data = await crearDireccion(payload);
        const direccionId = data.id;
        onDireccionCreada(direccionId); // enviar el id al padre
        handleClose();
    } catch (error) {
        console.error(error);
        setError("Error al crear la dirección");
    } finally {
        setIsSubmitting(false);
    }
  };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Crear Dirección</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group className="mb-3" controlId="formVias">
            <Form.Label>Tipo de Vía</Form.Label>
            <Form.Select required>
            <option value="">Seleccione una vía</option>
            {vias.map((tipos) => (
                <option key={tipos.id_vias} value={tipos.id_vias}>{tipos.tipos}</option>
            ))}
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNume">
            <Form.Label>Número</Form.Label>
            <Form.Control type="text" placeholder="Ej: 68 # 20-15" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCompl">
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text" placeholder="Ej: Apto 302, Torre B" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUbicGeo">
            <Form.Label>Ubicación Geográfica</Form.Label>
            <Form.Control type="text" placeholder="Ej: 4.6582,-74.0931" />
        </Form.Group>

            <Form.Group className="mb-3" controlId="formUsuario">
                <Form.Label>ID de Usuario</Form.Label>
                <Form.Control type="number" placeholder="Ej: 1" required />
            </Form.Group>

        <Form.Group className="mb-3" controlId="formBarrio">
            <Form.Label>Barrio</Form.Label>
            <Form.Select required>
            <option value="">Seleccione un barrio</option>
            {barrios.map((nomb) => (
                <option key={nomb.id_barr} value={nomb.id_barr}>{nomb.nomb}</option>
            ))}
            </Form.Select>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button style={{ backgroundColor: '#28a745', borderColor: '#28a745' }} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Guardando..." : "Guardar Dirección"}
        </Button>
        </Modal.Footer>
    </Form>
    </Modal>
);
}

export default ModalDireccion;