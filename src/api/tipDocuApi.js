export const obtenerDocumento = async () => {
  const res = await fetch(`http://localhost:8080/api/tipdoc `);
  if (!res.ok) throw new Error("Error al obtener tipo de documento");
  return res.json();

};
export const obtenerDocumentoPorId = async (id) => {
  const res = await fetch(`http://localhost:8080/api/tipdoc/${id}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Tipo documento no encontrado");
  return res.json();
};