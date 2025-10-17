import React, { createContext, useState, useEffect } from 'react';
import { actualizarUsuario, obtenerUsuario } from '../api/usuarioApi';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cargar usuario al iniciar
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const usuarios = await obtenerUsuario();
        // Si la API devuelve un array, toma el primero. Si es un objeto, úsalo directo.
        setUser(Array.isArray(usuarios) ? usuarios[0] : usuarios);
      } catch (err) {
        console.error('Error obteniendo usuario:', err);
      }
    };
    fetchUser();
  }, []);

  const updateUser = async (updates) => {
    if (!user || !user.id_us) return;
    try {
      await actualizarUsuario(user.id_us, { ...user, ...updates });
      // Refrescar datos desde la API después de actualizar
      const usuarios = await obtenerUsuario();
      setUser(Array.isArray(usuarios) ? usuarios[0] : usuarios);
    } catch (err) {
      console.error('Error actualizando usuario:', err);
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
