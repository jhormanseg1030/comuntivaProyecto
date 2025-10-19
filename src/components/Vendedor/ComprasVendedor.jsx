import { useEffect, useState } from 'react';
import { obtenerCompras, crearCompra } from '../../api/compraApi';

function ComprasVendedor() {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await obtenerCompras();
        setCompras(data);
      } catch (err) {
        console.error('Error al cargar compras', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleCrearCompra = async () => {
    try {
      const nuevo = { proveedor: 'Proveedor A', total: 10000 };
      const resp = await crearCompra(nuevo);
      setCompras((s) => [resp, ...s]);
    } catch (err) {
      console.error('Error creando compra', err);
      alert('No se pudo crear la compra');
    }
  };

  return (
    <>
      <h1>Compras</h1>
      <button className="buttonPedi" onClick={handleCrearCompra}>Nueva Compra</button>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Proveedor</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {compras && compras.length ? (
              compras.map((c) => (
                <tr key={c.id || c.id_compra}>
                  <td>{c.id || c.id_compra}</td>
                  <td>{c.proveedor || c.nom_proveedor || '-'}</td>
                  <td>{c.total || c.valor || 0}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={3}>No hay compras</td></tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ComprasVendedor;
