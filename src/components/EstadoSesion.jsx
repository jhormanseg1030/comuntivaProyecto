import React from 'react';

const EstadoSesion = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return (
      <div style={{background:'#fff3cd',color:'#856404',padding:'10px',borderRadius:'5px',marginBottom:'10px',border:'1px solid #ffeeba'}}>
        ⚠️ No has iniciado sesión. Algunas funciones estarán deshabilitadas.
      </div>
    );
  }
  return null;
};

export default EstadoSesion;
