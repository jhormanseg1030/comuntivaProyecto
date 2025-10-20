export const obtenerPedidos = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:8080/api/pedidos', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error('Error al obtener pedidos');
  }
  return await res.json();
};

export const obtenerPedidosPorId = async (id) => {
   const res = await fetch(`http://localhost:8080/api/pedidos/${id}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Pedido no encontrado");
  return res.json();
};
export const crearPedido = async (data) => {
  const res = await fetch('http://localhost:8080/api/pedidos/crearemos', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear pedido");
  return res.json();
};
// Actualizar pedidos
export const actualizarPedidos = async (id, pedidoData) => {
  const res = await fetch(`http://localhost:8080/api/pedidos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pedidoData)
  });
  if (!res.ok) {
    throw new Error("Error al actualizar usuario con ID ");
  }
  return await res.json();
};

