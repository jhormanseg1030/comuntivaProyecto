export const obtenerDepartamento = async () => {
    try{
        const res = await fetch( `http://localhost:8080/api/departamento`);
        
        if (!res.ok ) throw new Error("no se pudo obtener el departamento");
        return await res.json();

    } catch (error){
        if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")){
            throw new Error("No se pudo conectar con el servidor");
        }
        throw error;
    }
};