import React, { useState, useEffect } from 'react';
import { obtenerUnidad } from '../../../api/unidad_medidaApi';


const Unidad_Medida = () => {

    const [unidadesMedida, setUnidadesMedida] = useState([]);
    const [tipUnid, setTipUnid] =useState([]);
    const [valitda,setValida] = useState(false);



useEffect(() => {
  const uniMedi = async () => {
    try {
      const unidadesMedidaDta = await obtenerUnidad();
      setUnidadesMedida(unidadesMedidaDta);
    } catch (error) {
      console.error('Error al obtener unidades de medida:', error.message);
    }
  };

  uniMedi();
}, []);

<Row className="mb-6">
          <Form.Group as={Col} md="6" controlId="formGrUnidadId">
            <Form.Label>Tipo de unidad de medida</Form.Label>
            <Form.Select
              name="UnidadId"
              value={formData.UnidadId}
              onChange={handleChange}
              required
              className="form-select mb-2"
            >
            <option value="">Seleccione un tipo de unidad de medida</option>
              {unidadesMedida.map((tip_Medida) => (
                <option key={tip_Medida.id} value={tip_Medida.id}>
                {tip_Medida.Unidad_Medida} {/* o tipo.tipDocumento si así viene del backend */}
              </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

};

export default Unidad_Medida;