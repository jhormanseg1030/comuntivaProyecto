# Guía de Login - Frontend React 🚀

## ✅ Cambios Implementados

### 1. **API de Login (`usuarioApi.js`)**
Se agregaron las siguientes funciones:

- **`loginUsuario(tipDocId, numDoc, password)`** - Realiza el login y guarda el token en localStorage
- **`cerrarSesion()`** - Limpia el token y datos del usuario
- **`obtenerToken()`** - Obtiene el token JWT del localStorage
- **`obtenerUsuarioLogueado()`** - Obtiene los datos del usuario logueado
- **`estaLogueado()`** - Verifica si hay un usuario logueado

### 2. **Componente de Login (`InicioSe.jsx`)**
El componente ahora:

- ✅ Se conecta con el backend
- ✅ Valida los campos antes de enviar
- ✅ Muestra mensajes de error si las credenciales son incorrectas
- ✅ Muestra un estado de "cargando" durante el login
- ✅ Guarda el token JWT en localStorage
- ✅ Redirige a la página principal al iniciar sesión exitosamente
- ✅ Deshabilita el formulario mientras se procesa el login

---

## 🧪 Cómo Probar el Login

### Paso 1: Iniciar el Backend
```cmd
cd c:\xampp\htdocs\comuc\Comuctiva_String_Boot
mvnw.cmd spring-boot:run
```

Espera a ver el mensaje:
```
Started ComuctivaApplication in X.XXX seconds
```

### Paso 2: Iniciar el Frontend
```cmd
cd c:\xampp\htdocs\comuc\comuntivaProyecto
npm run dev
```

### Paso 3: Abrir la aplicación
Abre tu navegador en: `http://localhost:5173` (o el puerto que muestre Vite)

### Paso 4: Ir a Inicio de Sesión
Navega a la página de login

### Paso 5: Ingresar Credenciales de Prueba
Usa los datos de prueba que carga el `DataLoader`:

| Campo | Valor |
|-------|-------|
| **Tipo de documento** | Cédula (selecciona del dropdown) |
| **Número de documento** | `11111111` |
| **Contraseña** | `1234` |

### Paso 6: Click en "Iniciar sesión"
Si todo está correcto:
- ✅ Verás un mensaje de "Iniciando sesión..." en el botón
- ✅ Se guardará el token en localStorage
- ✅ Serás redirigido a `/Segunda`

Si hay error:
- ❌ Verás un mensaje de error en rojo sobre el formulario
- ❌ Posibles errores:
  - "Credenciales inválidas" - Usuario o contraseña incorrectos
  - "No se pudo conectar con el servidor" - El backend no está corriendo
  - "Por favor selecciona un tipo de documento" - Falta seleccionar tipo de doc
  - "Por favor ingresa tu número de documento" - Falta el número
  - "Por favor ingresa tu contraseña" - Falta la contraseña

---

## 🔍 Verificar que el Login Funcionó

### Opción 1: Consola del Navegador
1. Abre las DevTools (F12)
2. Ve a la pestaña **Console**
3. Deberías ver: `Login exitoso: {token: "...", id_Usuario: 1, ...}`

### Opción 2: LocalStorage
1. Abre las DevTools (F12)
2. Ve a la pestaña **Application** > **Local Storage**
3. Verifica que existan:
   - `token`: El JWT token
   - `usuario`: Los datos del usuario en formato JSON

### Opción 3: Network Tab
1. Abre las DevTools (F12)
2. Ve a la pestaña **Network**
3. Busca la petición a `login`
4. En la respuesta deberías ver:
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "id_Usuario": 1,
  "nom_Usu": "Juan",
  "apell1": "Pérez",
  "apell2": "González",
  "tel": 3001234567,
  "tel2": 3007654321,
  "correo": "juan@example.com",
  "numDoc": 11111111,
  "tipDocId": 1,
  "tipDocNombre": "Cédula"
}
```

---

## 📝 Flujo Completo del Login

```
Usuario ingresa datos
     ↓
Validación en frontend
     ↓
POST a http://localhost:8080/api/usuario/login
     ↓
Backend valida credenciales
     ↓
Backend genera JWT token
     ↓
Frontend recibe respuesta
     ↓
Token y datos se guardan en localStorage
     ↓
Redirección a /Segunda
```

---

## 🛠️ Próximos Pasos Sugeridos

### 1. Proteger Rutas
Crear un componente que verifique si el usuario está logueado antes de permitir acceso a ciertas páginas:

```jsx
// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { estaLogueado } from '../api/usuarioApi';

const ProtectedRoute = ({ children }) => {
  if (!estaLogueado()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
```

### 2. Agregar Botón de Cerrar Sesión
```jsx
import { cerrarSesion } from '../api/usuarioApi';
import { useNavigate } from 'react-router-dom';

const handleLogout = () => {
  cerrarSesion();
  navigate('/login');
};
```

### 3. Mostrar Datos del Usuario Logueado
```jsx
import { obtenerUsuarioLogueado } from '../api/usuarioApi';

const usuario = obtenerUsuarioLogueado();
console.log(`Bienvenido ${usuario.nom_Usu}!`);
```

### 4. Enviar Token en Peticiones Protegidas
```jsx
import { obtenerToken } from '../api/usuarioApi';

const fetchProtectedData = async () => {
  const token = obtenerToken();
  const response = await fetch('http://localhost:8080/api/protected', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.json();
};
```

---

## 🐛 Troubleshooting

### El backend no responde
- ✅ Verifica que el backend esté corriendo en `http://localhost:8080`
- ✅ Revisa los logs del backend en la consola
- ✅ Verifica que no haya errores de CORS

### Error de CORS
Si ves errores de CORS, verifica que `WebConfig.java` tenga:
```java
.allowedOrigins("http://localhost:5173", "http://localhost:3000")
```

### El token no se guarda
- ✅ Verifica la consola del navegador por errores
- ✅ Asegúrate que el backend devuelve el campo `token`
- ✅ Verifica que localStorage no esté deshabilitado

### Credenciales no funcionan
- ✅ Verifica que el `DataLoader` haya cargado los datos
- ✅ Revisa los logs del backend para ver si llega la petición
- ✅ Asegúrate de usar exactamente: tipDocId=1, numDoc=11111111, password=1234

---

## 📊 Estado del Proyecto

| Componente | Estado | Notas |
|-----------|--------|-------|
| Backend Login API | ✅ Completo | Endpoint `/api/usuario/login` funcionando |
| Frontend Login API | ✅ Completo | Funciones en `usuarioApi.js` |
| Componente Login | ✅ Completo | `InicioSe.jsx` conectado al backend |
| Manejo de Errores | ✅ Completo | Validaciones y mensajes de error |
| LocalStorage | ✅ Completo | Token y datos guardados |
| Redirección | ✅ Completo | Redirección a `/Segunda` tras login |
| Rutas Protegidas | ⏳ Pendiente | Implementar `ProtectedRoute` |
| Cerrar Sesión | ⏳ Pendiente | Agregar botón de logout |

---

## 🎉 ¡Listo para Probar!

Tu aplicación está completamente configurada para:
1. ✅ Conectarse al backend
2. ✅ Validar credenciales
3. ✅ Recibir y guardar el token JWT
4. ✅ Manejar errores apropiadamente
5. ✅ Redirigir al usuario tras login exitoso

**¡Ahora puedes probar el login completo! 🚀**
