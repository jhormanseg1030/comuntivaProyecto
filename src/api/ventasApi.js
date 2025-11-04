// API para gestionar ventas y compras del usuario autenticado

const API_URL = 'http://localhost:8080/api';

/**
 * Obtiene las ventas del usuario autenticado
 * (productos que le compraron al usuario)
 */
export const obtenerMisVentas = async () => {
  const token = localStorage.getItem('token');
  
  const res = await fetch(`${API_URL}/mis-ventas`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });
  
  if (!res.ok) {
    throw new Error('Error al obtener mis ventas');
  }
  
  return await res.json();
};

/**
 * Obtiene las compras del usuario autenticado
 * (productos que el usuario compró)
 */
export const obtenerMisCompras = async () => {
  const token = localStorage.getItem('token');
  
  const res = await fetch(`${API_URL}/mis-compras`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include'
  });
  
  if (!res.ok) {
    throw new Error('Error al obtener mis compras');
  }
  
  return await res.json();
};
