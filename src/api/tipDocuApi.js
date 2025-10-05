
export const obtenerDocumento = async () => {
  try{
    const res = await fetch(`http://localhost:8080/api/tipdoc`);

    if (!res.ok) throw new Error("No se pudo obtener la lista de tipos de documentos");
    return await res.json();

  } catch (error) {
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("No se pudo conectar con el servidor");
    }
    throw error;
  }
};

export const obtenerDocumentoPorId = async (id) => {
  const res = await fetch(`http://localhost:8080/api/tipdoc/${id}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Tipo documento no encontrado");
  return res.json();
};
