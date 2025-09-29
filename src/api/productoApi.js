// Obtener lista de productos
export const obtenerProductos = async () => {
  const res = await fetch('http://localhost:8080/api/producto')
  if (!res.ok) {
    throw new Error('Error al obtener productos');
  }
  return await res.json();
};

// Obtener producto por ID
export const obtenerProductoPorId = async (id) => {
  const res = await fetch(`http://localhost:8080/api/producto/${id}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Producto no encontrado");
  return res.json();
};

export const crearProducto = async (data) => {
  const res = await fetch('http://localhost:8080/api/producto/crear', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear Producto");
  return res.json();
};
// Actualizar producto
export const actualizarProducto = async (id, productoData) => {
  const res = await fetch(`http://localhost:8080/api/producto/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productoData)
  });
  if (!res.ok) {
    throw new Error("Error al actualizar producto con ID ");
  }
  return await res.json();
};