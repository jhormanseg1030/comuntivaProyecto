# 🔐 Sistema de Login - Guía Rápida

## 🚀 Inicio Rápido

### Backend
```cmd
cd c:\xampp\htdocs\comuc\Comuctiva_String_Boot
mvnw.cmd spring-boot:run
```

### Frontend
```cmd
cd c:\xampp\htdocs\comuc\comuntivaProyecto
npm run dev
```

## 🧪 Credenciales de Prueba

| Campo | Valor |
|-------|-------|
| Tipo de documento | Cédula |
| Número | `11111111` |
| Contraseña | `1234` |

## 📝 API de Login

### Request
```javascript
POST http://localhost:8080/api/usuario/login
Content-Type: application/json

{
  "tipDocId": 1,
  "numDoc": 11111111,
  "password": "1234"
}
```

### Response
```javascript
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "id_Usuario": 1,
  "nom_Usu": "Juan",
  "apell1": "Pérez",
  "correo": "juan@example.com",
  "numDoc": 11111111,
  "tipDocId": 1,
  "tipDocNombre": "Cédula"
  // ... más campos
}
```

## 💻 Uso en el Código

### Login
```javascript
import { loginUsuario } from '../api/usuarioApi';

const handleLogin = async () => {
  try {
    const response = await loginUsuario(1, 11111111, "1234");
    console.log('Login exitoso:', response);
    // Token guardado automáticamente en localStorage
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

### Verificar Autenticación
```javascript
import { useAuth } from '../hooks/useAuth';

const MyComponent = () => {
  const { usuario, isAuthenticated, logout } = useAuth();

  if (isAuthenticated) {
    return <div>Hola {usuario.nom_Usu}!</div>;
  }
  return <div>No autenticado</div>;
};
```

### Proteger Rutas
```jsx
import ProtectedRoute from './components/ProtectedRoute';

<Route path="/perfil" element={
  <ProtectedRoute>
    <PerfilPage />
  </ProtectedRoute>
} />
```

### Cerrar Sesión
```javascript
import { cerrarSesion } from '../api/usuarioApi';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleLogout = () => {
  cerrarSesion();
  navigate('/login');
};
```

## 📚 Documentación Completa

- **`RESUMEN_COMPLETO.md`** - Documentación completa del sistema
- **`FRONTEND_LOGIN_GUIDE.md`** - Guía del frontend
- **`TEST_LOGIN.md`** - Guía de pruebas del backend
- **`POSTMAN_API.md`** - Pruebas con Postman

## ✅ Archivos Creados/Modificados

### Backend
- `RespuestaLoginDto.java`
- `UsuarioController.java`
- `LoginRequest.java`

### Frontend
- `src/api/usuarioApi.js` (funciones de login)
- `src/components/iniciosesion/InicioSe.jsx` (componente actualizado)
- `src/hooks/useAuth.js` (hook personalizado) ⭐ NUEVO
- `src/components/ProtectedRoute.jsx` (rutas protegidas) ⭐ NUEVO

## 🎯 Estado

✅ Backend funcionando  
✅ Frontend conectado  
✅ Login completo  
✅ Manejo de errores  
✅ JWT guardado en localStorage  
✅ Redirección automática  
✅ Componentes reutilizables  

**¡Todo listo para usar! 🎉**
