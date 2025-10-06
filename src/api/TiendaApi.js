export const obtenerTienda = async () => {
  try {
    const res = await fetch(`http://localhost:8080/api/tienda`);
    if (!res.ok) {
      //Si el backend responde con error HTTP (404, 500…), se lanza
      throw new Error('Error al obtener tiendas');
    }
    return await res.json();
  } catch (error) {
    // Si el backend está caído o hay error de red
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("No se pudo conectar con el servidor");
    }
  }
};

export const crearTienda = async (data) => {
  const res = await fetch('http://localhost:8080/api/tienda', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear tienda");
  return res.json();
};


// Obtener usuario por ID
export const obtenerTiendaPorId = async (id_Tienda) => {
  const res = await fetch(`http://localhost:8080/api/tienda/${id_Tienda}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Tienda no encontrado");
  return res.json();
};
// Actualizar usuario
export const actualizarTienda = async (id_Tienda, data) => {
  const res = await fetch(`http://localhost:8080/api/tienda/${id_Tienda}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error("Error al actualizar tienda con ID ");
  }
  return await res.json();
};

// Eliminar usuario
export const  eliminarTienda = async (id_Tienda) => {
  const res = await fetch(`http://localhost:8080/api/tienda/${id_Tienda}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar tienda");
  return res.json();
};