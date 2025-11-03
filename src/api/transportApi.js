// API para gestión de transporte (vehículos y cotizaciones)

const API_BASE_URL = 'http://localhost:8080/api';

// Función auxiliar para obtener el token
const getToken = () => {
  return localStorage.getItem('token');
};

// Función auxiliar para headers con autenticación
const getAuthHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  };
};

// ========== CONFIGURACIÓN DE FLETES ==========

export const obtenerConfigFletes = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/fletes/config`, {
      method: 'GET',
      headers: getAuthHeaders()
    });

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado. Por favor inicia sesión nuevamente.');
      }
      throw new Error('Error al obtener configuración de fletes');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

// ========== VEHÍCULOS ==========

export const obtenerVehiculos = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/vehiculos`, {
      method: 'GET',
      headers: getAuthHeaders()
    });

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado. Por favor inicia sesión nuevamente.');
      }
      throw new Error('Error al obtener vehículos');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const obtenerVehiculoPorId = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/vehiculos/${id}`, {
      method: 'GET',
      headers: getAuthHeaders()
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Vehículo no encontrado');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error('Error al obtener vehículo');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const crearVehiculo = async (vehiculoData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/vehiculos`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(vehiculoData)
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 409) {
        throw new Error(errorData.error || 'La placa ya existe');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error(errorData.error || 'Error al crear vehículo');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const actualizarVehiculo = async (id, vehiculoData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/vehiculos/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(vehiculoData)
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 404) {
        throw new Error('Vehículo no encontrado');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error(errorData.error || 'Error al actualizar vehículo');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const actualizarEstadoVehiculo = async (id, estadoData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/vehiculos/${id}/estado`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify(estadoData)
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 404) {
        throw new Error('Vehículo no encontrado');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error(errorData.error || 'Error al cambiar estado');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const eliminarVehiculo = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/vehiculos/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 404) {
        throw new Error('Vehículo no encontrado');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error(errorData.error || 'Error al eliminar vehículo');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

// ========== COTIZACIONES ==========

export const calcularCotizacion = async (payload) => {
  try {
    const res = await fetch(`${API_BASE_URL}/cotizaciones/calcular`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 400) {
        throw new Error(errorData.error || 'Datos de cotización inválidos');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error(errorData.error || 'Error al calcular cotización');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const crearCotizacion = async (payload) => {
  try {
    const res = await fetch(`${API_BASE_URL}/cotizaciones`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 400) {
        throw new Error(errorData.error || 'Datos de cotización inválidos');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error(errorData.error || 'Error al crear cotización');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const obtenerCotizaciones = async (filtros = {}) => {
  try {
    // Construir query params
    const params = new URLSearchParams();
    
    if (filtros.from) {
      params.append('from', filtros.from);
    }
    if (filtros.to) {
      params.append('to', filtros.to);
    }
    if (filtros.estado) {
      params.append('estado', filtros.estado);
    }

    const url = params.toString() 
      ? `${API_BASE_URL}/cotizaciones?${params.toString()}`
      : `${API_BASE_URL}/cotizaciones`;

    const res = await fetch(url, {
      method: 'GET',
      headers: getAuthHeaders()
    });

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado. Por favor inicia sesión nuevamente.');
      }
      throw new Error('Error al obtener cotizaciones');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const obtenerCotizacionPorId = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/cotizaciones/${id}`, {
      method: 'GET',
      headers: getAuthHeaders()
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 404) {
        throw new Error('Cotización no encontrada');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error(errorData.error || 'Error al obtener cotización');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};

export const actualizarEstadoCotizacion = async (id, estado, motivoRechazo = null) => {
  try {
    const payload = { estado };
    if (motivoRechazo) {
      payload.motivoRechazo = motivoRechazo;
    }

    const res = await fetch(`${API_BASE_URL}/cotizaciones/${id}/estado`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errorData = await res.json();
      if (res.status === 404) {
        throw new Error('Cotización no encontrada');
      }
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
      throw new Error(errorData.error || 'Error al cambiar estado');
    }

    return await res.json();
  } catch (error) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('No se pudo conectar con el servidor');
    }
    throw error;
  }
};
