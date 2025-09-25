const APIUSU_URL = import.meta.env.VITE_APIUSU_URL || "http://localhost:8080";

export const obtenerUsuario = async () => {
   try {
const res = await fetch(`http://localhost:8080/api/usuario`);
     if (!res.ok) {
      //Si el backend responde con error HTTP (404, 500…), se lanza 
      throw new Error('Error al obtener usuarios');
    }
    return await res.json();
  } catch (error) {
    // Si el backend está caído o hay error de red
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("No se pudo conectar con el servidor");
    }
  }
};
export const crearUsuario = async (data) => {
  const res = await fetch('http://localhost:8080/crear', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear usuario");
  return res.json();
};