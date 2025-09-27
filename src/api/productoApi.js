/*// Obtener lista de productos
export const obtenerProductos = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error('Error al obtener productos');
  }
  return await res.json();
};

// Obtener producto por ID
export const obtenerProductoPorId = async (id) => {
  const res = await fetch('http://localhost:8080/api/producto/${id_producto}');
  if (!res.ok) {
    throw new Error(Error al obtener producto con ID ${id});
  }
  return await res.json();
};

// Crear nuevo producto
export const crearProducto = async (productoData) => {
  const res = await fetch('http://localhost:8080/crear'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productoData)
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.mensaje || 'Error al crear producto');
  }
  const response = await res.json();
  return response.detalles;  // Extrae ProductoDto del Map del backend
};

// Actualizar producto
export const actualizarProducto = async (id, productoData) => {
  const res = await fetch(${BASE_URL}/${id}, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productoData)
  });
  if (!res.ok) {
    throw new Error(Error al actualizar producto con ID ${id});
  }
  return await res.json();
};*/