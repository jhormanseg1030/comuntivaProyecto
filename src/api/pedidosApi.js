export const obtenerPedidos = async () => {
  const res = await fetch('http://localhost:8080/api/pedidos');
  if (!res.ok) {
    throw new Error('Error al obtener pedidos');
  }
  return await res.json();
};

export const obtenerPedidosPorId = async (id) => {
   const res = await fetch(`http://localhost:8080/api/pedidos/${id}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Empleado no encontrado");
  return res.json();
};