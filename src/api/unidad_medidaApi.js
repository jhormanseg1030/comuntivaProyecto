const APIUNI_URL = import.meta.env.VITE_APIUNI_URL || "http://localhost:8080";
export const obtenerUnidad = async () =>{
    const rest = await fetch (`${APIUNI_URL}/api/Unidad_Medida`);
    if(!rest.ok) throw new Error("Error al obtener unidad de medida");
    return rest.json();
}