const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

export const crearProducto = async (data) => {
  const token = localStorage.getItem('token');
  
  let body = data;
  let headers = {
    'Authorization': `Bearer ${token}`
  };

  if (!(data instanceof FormData)) {
    body = JSON.stringify(data);
    headers['Content-Type'] = 'application/json';
  }

  const res = await fetch('http://localhost:8080/api/producto', {
    method: "POST",
    headers: headers,
    body: body,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Error al crear Producto: ${error}`);
  }
  return res.json();
};

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

export const obtenerProductoPorId = async (id) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`http://localhost:8080/api/producto/${id}`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Producto no encontrado");
  return res.json();
};

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
    const errorText = await res.text();
    throw new Error(`Error al actualizar producto: ${errorText}`);
  }
  return await res.json();
};

// Actualizar producto del vendedor autenticado
export const actualizarProductoVendedor = async (id, productoData) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No hay token de autenticación. Por favor, inicia sesión.');
  }
  
  console.log(`📡 Enviando PUT a: http://localhost:8080/api/producto/mis-productos/${id}`);
  
  const res = await fetch(`http://localhost:8080/api/producto/mis-productos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(productoData)
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    console.error('❌ Error del servidor:', errorText);
    throw new Error(`Error al actualizar producto: ${errorText}`);
  }
  
  return await res.json();
};

// Obtener productos del vendedor autenticado
export const obtenerProductosVendedor = async () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No hay token de autenticación. Por favor, inicia sesión.');
  }
  
  const res = await fetch('http://localhost:8080/api/producto/mis-productos', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  if (!res.ok) {
    if (res.status === 401) {
      throw new Error('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
    }
    throw new Error('Error al obtener tus productos');
  }
  
  return await res.json();
};

// Eliminar producto
export const eliminarProducto = async (id) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`http://localhost:8080/api/producto/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Error al eliminar producto');
  return res.json();
};