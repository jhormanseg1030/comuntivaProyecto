# Test del Login con JWT - Spring Boot

## Resumen de cambios implementados

### ✅ Problema resuelto
Se corrigió el error de serialización de Hibernate al devolver la entidad `Usuario` completa en la respuesta del login.

### Cambios realizados:

1. **Creado `RespuestaLoginDto.java`** - DTO para la respuesta del login que incluye:
   - `token`: El JWT generado
   - `id_Usuario`: ID del usuario
   - `nom_Usu`: Nombre del usuario
   - `apell1`, `apell2`: Apellidos
   - `tel`, `tel2`: Teléfonos
   - `correo`: Correo electrónico
   - `numDoc`: Número de documento
   - `tipDocId`: ID del tipo de documento
   - `tipDocNombre`: Nombre del tipo de documento

2. **Actualizado `UsuarioController.java`** - El método login ahora:
   - Construye manualmente un `RespuestaLoginDto` con los datos del usuario
   - Evita devolver la entidad completa con sus relaciones lazy
   - No tiene problemas de serialización con Hibernate proxies

### Estructura de la respuesta del login

**Request:**
```json
POST http://localhost:8080/api/usuario/login
Content-Type: application/json

{
  "tipDocId": 1,
  "numDoc": 11111111,
  "password": "1234"
}
```

**Response exitosa:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTExMTExMSIsImlhdCI6MTcxMDAw...",
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

**Response fallida:**
```
Status: 401 Unauthorized
Body: "Credenciales inválidas"
```

---

## Cómo probar el login

### Opción 1: Usando Postman

1. **Abrir Postman** y crear una nueva petición POST
2. **URL:** `http://localhost:8080/api/usuario/login`
3. **Headers:** `Content-Type: application/json`
4. **Body (raw JSON):**
   ```json
   {
     "tipDocId": 1,
     "numDoc": 11111111,
     "password": "1234"
   }
   ```
5. **Click en Send** y verificar la respuesta

### Opción 2: Usando curl (desde cmd)

```cmd
curl -X POST http://localhost:8080/api/usuario/login ^
  -H "Content-Type: application/json" ^
  -d "{\"tipDocId\":1,\"numDoc\":11111111,\"password\":\"1234\"}"
```

### Opción 3: Usando PowerShell

```powershell
$body = @{
    tipDocId = 1
    numDoc = 11111111
    password = "1234"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/api/usuario/login" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

---

## Datos de prueba cargados

El `DataLoader` carga automáticamente al iniciar la app:

| Campo | Valor |
|-------|-------|
| Tipo de Documento | Cédula (ID: 1) |
| Número de Documento | 11111111 |
| Contraseña | 1234 |
| Nombre | Juan |
| Apellido 1 | Pérez |
| Apellido 2 | González |
| Teléfono 1 | 3001234567 |
| Teléfono 2 | 3007654321 |
| Correo | juan@example.com |

---

## Próximos pasos

1. ✅ **Login implementado y corregido**
2. ✅ **DTO de respuesta creado**
3. ✅ **Documentación actualizada**
4. 🔄 **Iniciar la aplicación y probar el login**
5. 🔄 **Verificar que el token JWT se genera correctamente**
6. 🔄 **Probar endpoints protegidos con el token**
7. 🔄 **Integrar con el frontend React**

---

## Comandos útiles

### Iniciar la aplicación:
```cmd
cd c:\xampp\htdocs\comuc\Comuctiva_String_Boot
mvnw.cmd spring-boot:run
```

### Ver logs en tiempo real:
Los logs mostrarán:
- `=== INICIO LOGIN ===`
- Datos del login recibidos
- Usuario encontrado
- Token generado
- `=== FIN LOGIN EXITOSO ===`

### Detener la aplicación:
`Ctrl + C` en la terminal donde se ejecuta

---

## Troubleshooting

### Si el login falla:
1. Verificar que la aplicación está corriendo en `http://localhost:8080`
2. Verificar que la base de datos está activa
3. Revisar los logs de la consola para errores
4. Confirmar que los datos de prueba se cargaron correctamente

### Si hay error de compilación:
```cmd
cd c:\xampp\htdocs\comuc\Comuctiva_String_Boot
mvnw.cmd clean install
```

### Si hay problemas con JWT:
Verificar que las dependencias en `pom.xml` son:
- `jjwt-api`: 0.11.5
- `jjwt-impl`: 0.11.5
- `jjwt-jackson`: 0.11.5
