const APIUNI_URL = import.meta.env.VITE_APIUNI_URL || "http://localhost:8080";
export const obtenerUnidad = async () =>{
    const rest = await fetch (`${APIUNI_URL}/api/Unidad_Medida/unidad`);
    if(!rest.ok) throw new Error("Error al obtener unidad de medida");
    const unidades = await rest.json();
    // Adaptar los campos para el frontend
    return unidades.map(u => ({
      id_Medida: u.id_Unidad,
      tip_Medida: u.tipo_de_medida
    }));
}
export const obtenerUni_MedidaPorId = async (id) => {
  const res = await fetch(`http://localhost:8080/api/Unidad_Medida/${id}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Unidad de medida no encontrado");
  return res.json();
};