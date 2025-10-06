export const obtenerVias = async () => {
  try {
    const res = await fetch(`http://localhost:8080/api/vias`);
    if (!res.ok) {
      //Si el backend responde con error HTTP (404, 500…), se lanza 
      throw new Error('Error al obtener vias');
    }
    return await res.json();
  } catch (error) {
    // Si el backend está caído o hay error de red
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("No se pudo conectar con el servidor");
    }
  }
};