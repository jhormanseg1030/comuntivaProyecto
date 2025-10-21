export const loginUsuario = async (tipDocId, numDoc, password) => {
  try {
    const res = await fetch('http://localhost:8080/api/usuario/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tipDocId: parseInt(tipDocId),
        numDoc: parseInt(numDoc),
        password: password
      }),
    });

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("Credenciales inválidas");
      }
      throw new Error("Error al iniciar sesión");
    }

    const data = await res.json();
    
    // Guardar token y datos del usuario en localStorage
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('usuario', JSON.stringify(data));
    }
    
    return data;
  } catch (error) {
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("No se pudo conectar con el servidor");
    }
    throw error;
  }
};

// Función para cerrar sesión
export const cerrarSesion = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
};

// Función para obtener el token
export const obtenerToken = () => {
  return localStorage.getItem('token');
};

// Función para obtener los datos del usuario logueado
export const obtenerUsuarioLogueado = () => {
  const usuario = localStorage.getItem('usuario');
  return usuario ? JSON.parse(usuario) : null;
};

// Función para verificar si el usuario está logueado
export const estaLogueado = () => {
  return !!localStorage.getItem('token');
};

export const obtenerUsuario = async () => {
  try {
const res = await fetch(`http://localhost:8080/api/usuario`);
    if (!res.ok) {
      //Si el backend responde con error HTTP (404, 500…), se lanza 
      throw new Error('Error al obtener usuarios');
    }
    return await res.json();
  } catch (error) {
    // Si el backend está caído o hay error de red
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      throw new Error("No se pudo conectar con el servidor");
    }
  }
};

export const crearUsuario = async (data) => {
  const res = await fetch('http://localhost:8080/api/usuario', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear usuario");
  return res.json();
};


// Obtener usuario por ID
export const obtenerUsuarioPorId = async (id_Usuario) => {
  const res = await fetch(`http://localhost:8080/api/usuario/${id_Usuario}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Usuario no encontrado");
  return res.json();
};
// Actualizar usuario
export const actualizarUsuario = async (id_Usuario, data) => {
  const res = await fetch(`http://localhost:8080/api/usuario/${id_Usuario}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw new Error("Error al actualizar usuario con ID ");
  }
  return await res.json();
};

// Eliminar usuario
export const  eliminarUsuario = async (id_Usuario) => {
  const res = await fetch(`http://localhost:8080/api/usuario/${id_Usuario}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar usuario");
  return res.json();
};