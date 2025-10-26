# Pruebas de API con Postman

## 1. Probar conexión a la base de datos

**Método:** GET  
**URL:** `http://localhost:8080/api/test/db`

### Pasos:
1. Abre Postman.
2. Crea una nueva petición (HTTP Request).
3. Selecciona el método **GET**.
4. Escribe la URL: `http://localhost:8080/api/test/db`
5. Haz clic en **Send**.
6. Si la conexión es exitosa, verás una respuesta como:
   ```
   Conexión exitosa. Total usuarios: X
   ```

---

## 2. Login y obtención de JWT

**Método:** POST  
**URL:** `http://localhost:8080/api/usuario/login`

### Body (JSON):
```json
{
  "tipDocId": 1,
  "numDoc": 11111111,
  "password": "1234"
}
```

### Pasos:
1. Abre Postman.
2. Crea una nueva petición (HTTP Request).
3. Selecciona el método **POST**.
4. Escribe la URL: `http://localhost:8080/api/usuario/login`
5. Ve a la pestaña **Body** y selecciona **raw** y **JSON**.
6. Escribe el JSON de ejemplo arriba.
7. Haz clic en **Send**.
8. Si las credenciales son correctas, recibirás una respuesta como:
   ```json
   {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
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

## 3. Acceder a endpoints protegidos con JWT

**Método:** GET  
**URL:** `http://localhost:8080/api/test/db` (o cualquier endpoint protegido)

### Pasos:
1. Realiza el login y copia el token JWT recibido.
2. Crea una nueva petición GET en Postman.
3. Ve a la pestaña **Headers**.
4. Agrega un header:
   - Key: `Authorization`
   - Value: `Bearer <tu_token_jwt>`
5. Haz clic en **Send**.
6. Si el token es válido, recibirás la respuesta del endpoint.

---

**Notas:**
- Cambia el puerto en la URL si tu backend usa otro.
- Si tienes problemas de CORS, revisa la configuración de tu backend.
- Si el endpoint requiere otros datos, adáptalos según tu API.
