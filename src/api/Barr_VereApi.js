export const obtenerBarr_Vere = async () =>{
    const rest = await fetch (`http://localhost:8080/api/barrvere`);
    if(!rest.ok) throw new Error("Error al obtener barrio_vereda");
    return rest.json();
}