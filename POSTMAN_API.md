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

# Pruebas de Backend con Postman (API Frontend)

## 1. Iniciar el backend
Asegúrate de que tu backend Spring Boot esté corriendo en `http://localhost:8080`.

---

## 2. Endpoints principales de la carpeta `api`

### 2.1. BarrioApi
**GET barrios**
```
GET http://localhost:8080/api/barrios
```
**POST crear barrio**
```
POST http://localhost:8080/api/barrios
```
**Body (JSON):**
```json
{
  "nombre": "Barrio Nuevo"
}
```

---

### 2.2. DepartamentoApi
**GET departamentos**
```
GET http://localhost:8080/api/departamentos
```
**POST crear departamento**
```
POST http://localhost:8080/api/departamentos
```
**Body (JSON):**
```json
{
  "nombre": "Antioquia"
}
```

---

### 2.3. MunicipioApi
**GET municipios**
```
GET http://localhost:8080/api/municipios
```
**POST crear municipio**
```
POST http://localhost:8080/api/municipios
```
**Body (JSON):**
```json
{
  "nombre": "Medellín",
  "departamentoId": 1
}
```

---

### 2.4. DireccionesApi
**GET direcciones**
```
GET http://localhost:8080/api/direcciones
```
**POST crear dirección**
```
POST http://localhost:8080/api/direcciones
```
**Body (JSON):**
```json
{
  "calle": "Calle 123",
  "barrioId": 1,
  "municipioId": 1
}
```

---

### 2.5. PedidosApi
**GET pedidos**
```
GET http://localhost:8080/api/pedidos
```
**POST crear pedido**
```
POST http://localhost:8080/api/pedidos
```
**Body (JSON):**
```json
{
  "usuarioId": 1,
  "productoId": 2,
  "cantidad": 5
}
```

---

### 2.6. ProductoApi
**GET productos**
```
GET http://localhost:8080/api/productos
```
**POST crear producto**
```
POST http://localhost:8080/api/productos
```
**Body (JSON):**
```json
{
  "nombre": "Manzana",
  "precio": 1200,
  "unidadMedidaId": 1
}
```

---

### 2.7. TiendaApi
**GET tiendas**
```
GET http://localhost:8080/api/tiendas
```
**POST crear tienda**
```
POST http://localhost:8080/api/tiendas
```
**Body (JSON):**
```json
{
  "nombre": "Tienda Don Juan",
  "direccionId": 1
}
```

---

### 2.8. UsuarioApi
**GET usuarios**
```
GET http://localhost:8080/api/usuario
```
**POST crear usuario**
```
POST http://localhost:8080/api/usuario
```
**Body (JSON):**
```json
{
  "nombre": "Pedro",
  "apellido": "Ramírez",
  "correo": "pedro@example.com",
  "numdocumento": 33333333,
  "password": "pedro123",
  "tipId": 1
}
```

---

### 2.9. UnidadMedidaApi
**GET unidades de medida**
```
GET http://localhost:8080/api/unidadmedida
```
**POST crear unidad de medida**
```
POST http://localhost:8080/api/unidadmedida
```
**Body (JSON):**
```json
{
  "nombre": "Kilogramo"
}
```

---

### 2.10. TipDocuApi
**GET tipos de documento**
```
GET http://localhost:8080/api/tipodocu
```

---

### 2.11. ViasApi
**GET vías**
```
GET http://localhost:8080/api/vias
```
**POST crear vía**
```
POST http://localhost:8080/api/vias
```
**Body (JSON):**
```json
{
  "nombre": "Avenida"
}
```

---

## 3. Autenticación
Para endpoints protegidos, agrega el token en los headers:
```
Authorization: Bearer <token>
```

---

## 4. Verificar errores
- Prueba con datos incorrectos para validar el manejo de errores.
- Verifica los mensajes de error y respuestas del backend.

---

¿Necesitas ejemplos para algún endpoint específico o para pruebas avanzadas? ¡Avísame!
