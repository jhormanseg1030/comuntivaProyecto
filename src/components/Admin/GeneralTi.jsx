import React, { useState } from 'react';
import './GeneralTi.css';

function GeneralTi() {
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        correo: '',
        fechaNacimiento: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [fechaBloqueada, setFechaBloqueada] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        setEditMode(false);
        
        if (userData.fechaNacimiento && !fechaBloqueada) {
            setFechaBloqueada(true);
        }
        
        console.log('Datos guardados:', userData);
        alert('✅ Información guardada correctamente');
    };

    const handleCancel = () => {
        setEditMode(false);
        setShowModal(false);
    };

    const handleCerrarCuenta = () => {
        if(window.confirm('¿Estás seguro de que quieres cerrar tu cuenta? Esta acción no se puede deshacer.')) {
            console.log('Cuenta cerrada');
        }
    };

    const handleRecuperar = () => {
        alert('Se ha enviado un enlace de recuperación a tu correo electrónico');
    };

    const handleEditarInformacion = () => {
        setEditMode(true);
        if (!userData.fechaNacimiento) {
            setFechaBloqueada(false);
        }
    };

    return(
        <div className="general-ti-container">
            <h1>Información de la Cuenta</h1>
            <div className='comunicaciones-grid'>
                                <div className='carta-comunicacion carta-principal' onClick={() => setShowModal(true)}>
                    <div className='carta-header'>
                        <h3>👤 Información Personal</h3>
                    </div>
                    <div className='carta-contenido'>
                        <div className='info-preview'>
                            {userData.nombre || userData.apellidos ? (
                                <>
                                    <p><strong>Nombre:</strong> {userData.nombre} {userData.apellidos}</p>
                                    <p><strong>Correo:</strong> {userData.correo || 'No especificado'}</p>
                                    <p><strong>Teléfono:</strong> {userData.telefono || 'No especificado'}</p>
                                    {userData.fechaNacimiento && (
                                        <p><strong>Fecha Nacimiento:</strong> {new Date(userData.fechaNacimiento).toLocaleDateString('es-ES')}</p>
                                    )}
                                </>
                            ) : (
                                <p className='sin-informacion'>📝 No hay información guardada. Haz click para agregar tus datos.</p>
                            )}
                            <p className='click-instruction'>💡 Haz click para {userData.nombre ? 'ver y editar' : 'agregar'} tu información</p>
                        </div>
                    </div>
                </div>
                <div className='carta-comunicacion carta-botones'>
                    <div className='carta-contenido'>
                        <button className='btn-recuperar' onClick={handleRecuperar}>
                            🔑 Recuperar Contraseña
                        </button>
                        <button className='btn-eliminar' onClick={handleCerrarCuenta}>
                            🚫 Cerrar Cuenta
                        </button>
                    </div>
                </div>

            </div>
            {showModal && (
                <div className="modal-overlay" onClick={() => !editMode && setShowModal(false)}>
                    <div className="modal-content cuenta-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>👤 {editMode ? 'Editar Información' : 'Información de la Cuenta'}</h3>
                            <button className="btn-close" onClick={() => setShowModal(false)}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="formulario-cuenta">
                                <div className="campo-formulario">
                                    <label>Nombre *</label>
                                    <input 
                                        type="text" 
                                        name="nombre"
                                        value={userData.nombre} 
                                        onChange={handleInputChange}
                                        disabled={!editMode}
                                        placeholder="Ingresa tu nombre"
                                        className={editMode ? "campo-habilitado" : "campo-deshabilitado"}
                                    />
                                </div>
                                
                                <div className="campo-formulario">
                                    <label>Apellidos *</label>
                                    <input 
                                        type="text" 
                                        name="apellidos"
                                        value={userData.apellidos} 
                                        onChange={handleInputChange}
                                        disabled={!editMode}
                                        placeholder="Ingresa tus apellidos"
                                        className={editMode ? "campo-habilitado" : "campo-deshabilitado"}
                                    />
                                </div>
                                
                                <div className="campo-formulario">
                                    <label>Teléfono</label>
                                    <input 
                                        type="tel" 
                                        name="telefono"
                                        value={userData.telefono} 
                                        onChange={handleInputChange}
                                        disabled={!editMode}
                                        placeholder="Ingresa tu número de teléfono"
                                        className={editMode ? "campo-habilitado" : "campo-deshabilitado"}
                                    />
                                </div>
                                
                                <div className="campo-formulario">
                                    <label>Correo Electrónico *</label>
                                    <input 
                                        type="email" 
                                        name="correo"
                                        value={userData.correo} 
                                        onChange={handleInputChange}
                                        disabled={!editMode}
                                        placeholder="Ingresa tu correo electrónico"
                                        className={editMode ? "campo-habilitado" : "campo-deshabilitado"}
                                    />
                                </div>
                                
                                <div className="campo-formulario">
                                    <label>Fecha de Nacimiento</label>
                                    <input 
                                        type="date" 
                                        name="fechaNacimiento"
                                        value={userData.fechaNacimiento} 
                                        onChange={handleInputChange}
                                        disabled={!editMode || fechaBloqueada}
                                        placeholder="Selecciona tu fecha de nacimiento"
                                        className={editMode && !fechaBloqueada ? "campo-habilitado" : "campo-deshabilitado"}
                                    />
                                    {fechaBloqueada && userData.fechaNacimiento && (
                                        <small className="mensaje-bloqueo">
                                            🔒 La fecha de nacimiento no se puede modificar después del primer guardado
                                        </small>
                                    )}
                                </div>

                                {editMode && (
                                    <div className="campo-instrucciones">
                                        <p>📝 Campos marcados con * son obligatorios</p>
                                        {!fechaBloqueada && (
                                            <p>🎂 La fecha de nacimiento solo se puede establecer una vez</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            {!editMode ? (
                                <>
                                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                        Cerrar
                                    </button>
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={handleEditarInformacion}
                                    >
                                        ✏️ {userData.nombre ? 'Editar' : 'Agregar'} Información
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-secondary" onClick={handleCancel}>
                                        Cancelar
                                    </button>
                                    <button 
                                        className="btn btn-success" 
                                        onClick={handleSave}
                                        disabled={!userData.nombre || !userData.apellidos || !userData.correo}
                                    >
                                        💾 Guardar Información
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GeneralTi;