# Módulo 5: Anatomía de una petición REST

## Partes de una petición

Toda petición REST tiene 4 partes:

1. Verbo HTTP (GET, POST, PUT, DELETE)
2. URL/Endpoint
3. Headers (encabezados)
4. Body (cuerpo)


## Verbo HTTP

El verbo dice QUÉ quieres hacer.

GET = Traer datos
POST = Crear algo nuevo
PUT = Cambiar algo completamente
DELETE = Eliminar
PATCH = Cambiar solo algunas partes

Ejemplo:
```
GET /usuarios
```
"Quiero traer usuarios"

```
POST /usuarios
```
"Quiero crear un usuario"

```
PUT /usuarios/1
```
"Quiero cambiar el usuario 1 completo"

```
DELETE /usuarios/1
```
"Quiero eliminar el usuario 1"

```
PATCH /usuarios/1
```
"Quiero cambiar solo algunos datos del usuario 1"


## URL / Endpoint

La dirección a donde va la petición.

Estructura:
```
http://localhost:3000/usuarios/1
│      │         │    │    │       │
│      │         │    │    │       └─ ID del recurso
protocolo host   puerto app recurso
```

Partes:

protocolo = http:// o https://
host = localhost, google.com, api.github.com
puerto = 3000, 8080, 80 (por defecto)
app = /api, /v1, /usuarios
recurso = /usuarios, /posts, /comentarios
id = /1, /123

Ejemplos:

```
GET http://localhost:3000/usuarios
GET http://localhost:3000/usuarios/1
GET http://localhost:3000/usuarios/1/posts
GET http://localhost:3000/posts?estado=activos
```


## Headers (Encabezados)

Información adicional sobre la petición.

Formato: Clave: Valor

Ejemplos comunes:

Content-Type: application/json
→ "Los datos que envío son JSON"

Authorization: Bearer token123
→ "Mi token de autenticación es token123"

Accept: application/json
→ "Quiero recibir JSON"

User-Agent: Mozilla/5.0
→ "Soy un navegador"

Custom-Header: mi-valor
→ Puedes crear tus propios headers

Ejemplo completo:

```
GET /usuarios/1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer miToken123
```

En Insomnia o curl:
```bash
curl http://localhost:3000/usuarios/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer miToken123"
```


## Body (Cuerpo)

Los datos que envías en POST, PUT, PATCH.

En GET y DELETE usualmente NO hay body.

Formatos:

JSON (lo más común)
```json
{
  "nombre": "Juan",
  "email": "juan@mail.com"
}
```

Form Data
```
nombre=Juan&email=juan@mail.com
```

XML (viejo, casi no se usa)
```xml
<usuario>
  <nombre>Juan</nombre>
  <email>juan@mail.com</email>
</usuario>
```

Ejemplo de petición con body:

```
POST /usuarios
Content-Type: application/json

{
  "nombre": "Juan",
  "email": "juan@mail.com"
}
```


## Parámetros

Hay varios tipos de parámetros:

### Path Parameters (en la URL)
```
GET /usuarios/1
```
El "1" es el path parameter, dice cuál usuario quieres.

### Query Parameters (después del ?)
```
GET /usuarios?edad=25&ciudad=Madrid
```
?edad=25 = filtro
&ciudad=Madrid = otro filtro

Otros ejemplos:
```
GET /usuarios?limite=10&pagina=2
GET /posts?estado=activos
GET /productos?ordenar=precio&orden=asc
```

### Headers como parámetros
```
Authorization: Bearer token123
```

### Body como parámetros (en POST, PUT)
```
POST /usuarios
Body: {"nombre": "Juan", "email": "juan@mail.com"}
```


## Ejemplo completo de una petición

```
PUT /usuarios/1?notificar=true
Host: api.miapp.com:3000
Content-Type: application/json
Authorization: Bearer token123
Accept: application/json

{
  "nombre": "Juan Nuevo",
  "email": "juan.nuevo@mail.com",
  "edad": 30
}
```

Desglose:
- Verbo: PUT
- Path parameter: 1 (usuario ID)
- Query parameter: notificar=true (notifica al usuario)
- Host: api.miapp.com en puerto 3000
- Headers: Content-Type, Authorization, Accept
- Body: Los datos nuevos del usuario


## La respuesta también tiene partes

Status Code
```
200 OK
```

Headers
```
Content-Type: application/json
Date: Mon, 10 Oct 2026
```

Body
```json
{
  "id": 1,
  "nombre": "Juan Nuevo",
  "email": "juan.nuevo@mail.com",
  "edad": 30
}
```


## Resumen

- Verbo = Acción (GET, POST, PUT, DELETE)
- URL = Dónde (endpoint + parámetros)
- Headers = Información extra
- Body = Datos (solo en POST, PUT, PATCH)

Próximo: Explorar APIs (API Discovery).
