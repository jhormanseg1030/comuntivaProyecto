import { useState, useEffect } from 'react';
import { obtenerUsuarioLogueado, estaLogueado, cerrarSesion } from '../api/usuarioApi';

/**
 * Hook personalizado para manejar la autenticación
 * @returns {Object} { usuario, isAuthenticated, logout }
 */
export const useAuth = () => {
  const [usuario, setUsuario] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si hay un usuario logueado al montar el componente
    const checkAuth = () => {
      if (estaLogueado()) {
        const user = obtenerUsuarioLogueado();
        setUsuario(user);
        setIsAuthenticated(true);
      } else {
        setUsuario(null);
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    // Escuchar cambios en el localStorage (por si se loguea en otra pestaña)
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const logout = () => {
    cerrarSesion();
    setUsuario(null);
    setIsAuthenticated(false);
  };

  return {
    usuario,
    isAuthenticated,
    logout
  };
};
