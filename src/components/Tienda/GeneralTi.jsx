function GeneralTi () {
    return(
        <>
    <h1>General</h1>
    <div className='opciones-lis'>
        <div className='contenido-op'>
                <h3>Opciones de listado de productos</h3>
                <div className='conten'>
            <div className='check'>    
                <input type="radio"
                name='opci'
                className='opciones'
                />
                <label >
                Mostrar todos los productos
                </label>
            </div>
            <div className='check'>
                <input type="radio"
                name='opci'
                className='opcion2'
                />
                <label >
                Mostrar productos agotados al final de la lista
                </label>
            </div>
            <div className='check'>
                
                <input type="radio"
                name='opci'
                className='opcion3'
                />
                <label >
                Ocultar productos agotados
                </label>
            </div>   
            </div> 
        </div>
        <div className='opciones-lis1'>
        <div className='contenido-op'>
                <h3>Redes Sociales </h3>
        </div >
        <div className='conten'><h4>No tienes ninguna red social configurada para tu sucursal </h4></div>
        </div>
    </div>
            
        </>
    )
}
export default GeneralTi;