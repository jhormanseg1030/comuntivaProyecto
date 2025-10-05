export const obtenerMunicipio = async () => {
    try{
        const res = await fetch( `http://localhost:8080/api/muni`);
        
        if (!res.ok ) throw new Error("no se pudo obtener el municipio");
        return await res.json();

    } catch (error){
        if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")){
            throw new Error("No se pudo conectar con el servidor");
        }
        throw error;
    }
};