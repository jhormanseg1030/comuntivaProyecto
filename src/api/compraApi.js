// Obtener lista de compras
export const obtenerCompras = async () => {
  const res = await fetch('http://localhost:8080/api/compras');
  if (!res.ok) {
    throw new Error('Error al obtener compras');
  }
  return await res.json();
};

// Obtener compra por ID
export const obtenerCompraPorId = async (id) => {
  const res = await fetch(`http://localhost:8080/api/compras/${id}`, {
    method: 'GET',
  });
  if (!res.ok) throw new Error('Compra no encontrada');
  return res.json();
};

export const crearCompra = async (data) => {
  const res = await fetch('http://localhost:8080/api/compras', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al crear compra');
  return res.json();
};

// Actualizar compra
export const actualizarCompra = async (id, compraData) => {
  const res = await fetch(`http://localhost:8080/api/compras/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(compraData),
  });
  if (!res.ok) throw new Error('Error al actualizar compra');
  return await res.json();
};