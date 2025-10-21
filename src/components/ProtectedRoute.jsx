import React from 'react';
import { Navigate } from 'react-router-dom';
import { estaLogueado } from '../api/usuarioApi';

/**
 * Componente para proteger rutas que requieren autenticación
 * Redirige a /login si el usuario no está autenticado
 * 
 * Uso:
 * <Route path="/perfil" element={
 *   <ProtectedRoute>
 *     <PerfilPage />
 *   </ProtectedRoute>
 * } />
 */
const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
  if (!estaLogueado()) {
    // Guardar la ruta a la que intentó acceder para redirigir después del login
    sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default ProtectedRoute;
