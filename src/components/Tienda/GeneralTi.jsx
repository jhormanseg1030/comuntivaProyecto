function GeneralTi() {
    return(
        <>
            <h1>Comunicaciones</h1>
            <div className='comunicaciones-grid'>
                
                {/* Carta 1: Preferencias de notificaciones */}
                <div className='carta-comunicacion'>
                    <div className='carta-header'>
                        <h3>Preferencias de notificaciones</h3>
                    </div>
                    <div className='carta-contenido'>
                        <div className='opcion-comunicacion'>
                            <div className='check'>    
                                <input type="checkbox" className='opciones' />
                                <label>Notificaciones por email</label>
                            </div>
                            <p className='descripcion'>Recibe notificaciones sobre tus compras, ventas y promociones</p>
                        </div>
                        
                        <div className='opcion-comunicacion'>
                            <div className='check'>
                                <input type="checkbox" className='opcion2' />
                                <label>Notificaciones push</label>
                            </div>
                            <p className='descripcion'>Recibe alertas en tu dispositivo sobre actividades importantes</p>
                        </div>
                        
                        <div className='opcion-comunicacion'>
                            <div className='check'>
                                <input type="checkbox" className='opcion3' />
                                <label>Notificaciones de ofertas</label>
                            </div>
                            <p className='descripcion'>Recibe alertas sobre descuentos y promociones especiales</p>
                        </div>
                    </div>
                </div>

                {/* Carta 2: Preferencias de marketing */}
                <div className='carta-comunicacion'>
                    <div className='carta-header'>
                        <h3>Preferencias de marketing</h3>
                    </div>
                    <div className='carta-contenido'>
                        <div className='opcion-comunicacion'>
                            <div className='check'>    
                                <input type="checkbox" className='opciones' />
                                <label>Email promocional</label>
                            </div>
                            <p className='descripcion'>Recibe ofertas exclusivas y novedades por correo electrónico</p>
                        </div>
                        
                        <div className='opcion-comunicacion'>
                            <div className='check'>
                                <input type="checkbox" className='opcion2' />
                                <label>Notificaciones de nuevos productos</label>
                            </div>
                            <p className='descripcion'>Recibe alertas sobre productos que puedan interesarte</p>
                        </div>
                    </div>
                </div>

                {/* Carta 3: Eliminar cuenta */}
                <div className='carta-comunicacion'>
                    <div className='carta-header'>
                        <h3>Eliminar cuenta</h3>
                    </div>
                    <div className='carta-contenido'>
                        <p className='descripcion'>Puedes cancelar tu cuenta siempre que lo desees.</p>
                        <button className='btn-eliminar'>Eliminar cuenta</button>
                    </div>
                </div>

                {/* Carta 4: Recuperar contraseña */}
                <div className='carta-comunicacion'>
                    <div className='carta-header'>
                        <h3>Recuperar contraseña</h3>
                    </div>
                    <div className='carta-contenido'>
                        <p className='descripcion'>Si has olvidado tu contraseña, puedes recuperarla aquí.</p>
                        <button className='btn-recuperar'>Recuperar contraseña</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GeneralTi;