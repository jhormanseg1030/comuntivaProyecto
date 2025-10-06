export const obtenerBarrio = async () => {
   try {
const res = await fetch(`http://localhost:8080/api/barrio`);
     if (!res.ok) {
      //Si el backend responde con error HTTP (404, 500…), se lanza 
      throw new Error('Error al obtener barrios');
    }
    return await res.json();
  } catch (error) {
    // Si el backend está caído o hay error de red
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("No se pudo conectar con el servidor");
    }
  }
};
export const crearBarrio= async (data) => {
  const res = await fetch('http://localhost:8080/api/barrio/crear', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear Barrio");
  return res.json();
};
// Obtener usuario por ID
export const obtenerBarrioPorId = async (id) => {
  const res = await fetch(`http://localhost:8080/api/barrio/${id}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Barrio no encontrado");
  return res.json();
};
// Actualizar usuario
export const actualizarBarrio = async (id, data) => {
  const res = await fetch(`http://localhost:8080/api/barrio/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error("Error al actualizar barrio con ID ");
  }
  return await res.json();
};