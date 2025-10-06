export const obtenerDirecciones = async () => {
  try {
    const res = await fetch(`http://localhost:8080/api/direcciones`);
  if (!res.ok) {
    //Si el backend responde con error HTTP (404, 500…), se lanza 
    throw new Error('Error al obtener direcciones');
  }
  return await res.json();
} catch (error) {
  // Si el backend está caído o hay error de red
  if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
    throw new Error("No se pudo conectar con el servidor");
  }
}
};


export const crearDireccion = async (data) => {
  const res = await fetch('http://localhost:8080/api/direcciones', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al crear direccion");
    return res.json();
};


// Obtener usuario por ID
export const obtenerDireccionPorId = async (id_Direccion) => {
  const res = await fetch(`http://localhost:8080/api/direcciones/${id_Direccion}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Direccion no encontrado");
  return res.json();
};
// Actualizar usuario
export const actualizarDireccion = async (id_Direccion, data) => {
  const res = await fetch(`http://localhost:8080/api/direcciones/${id_Direccion}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error("Error al actualizar direccion con ID ");
  }
  return await res.json();
};

// Eliminar usuario
export const  eliminarDireccion = async (id_Direccion) => {
  const res = await fetch(`http://localhost:8080/api/direcciones/${id_Direccion}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar direccion");
  return res.json();
};
