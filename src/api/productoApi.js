// Obtener lista de productos
export const obtenerProductos = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:8080/api/producto', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
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
  const token = localStorage.getItem('token');
  const res = await fetch('http://localhost:8080/api/producto', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear Producto");
  return res.json();
};
// Actualizar producto
export const actualizarProducto = async (id, productoData) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`http://localhost:8080/api/producto/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(productoData)
  });
  if (!res.ok) {
    throw new Error("Error al actualizar producto con ID ");
  }
  return await res.json();
};
// Crear producto con imagen (FormData)
export const crearProductoConImagen = async (formData) => {
  // Enviar FormData sin establecer Content-Type para que el browser ponga el multipart boundary
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No hay token de autenticación. Por favor, inicia sesión.');
  }
  
  const res = await fetch('http://localhost:8080/api/producto', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });
  
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const errorMessage = errorData.mensaje || errorData.detalles || `Error ${res.status} al crear producto`;
    throw new Error(errorMessage);
  }
  
  return res.json();
};
// Eliminar producto
export const eliminarProducto = async (id) => {
  const res = await fetch(`http://localhost:8080/api/producto/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar producto');
  return res.json();
};