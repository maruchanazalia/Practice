# Módulo 2: REST, HTTP y Stateless

## REST y HTTP, cuál es la relación

La gente piensa que REST e HTTP son lo mismo. No. HTTP es el protocolo (la forma de transportar datos), REST es la arquitectura (cómo organizas tu API).

HTTP es el vehículo. REST es cómo manejas.

Ejemplo:
- HTTP te dice: "puedo enviar GET, POST, PUT, DELETE"
- REST te dice: "usa GET para traer datos, POST para crear, PUT para cambiar, DELETE para borrar"

REST NECESITA HTTP para funcionar. Sin HTTP no hay REST. Pero HTTP existe sin REST (hay APIs HTTP que no son REST).

Métodos HTTP que REST usa:
- GET: traer datos
- POST: crear algo nuevo
- PUT: cambiar algo completo
- DELETE: eliminar algo
- PATCH: cambiar solo una parte

Códigos de respuesta:
- 200: OK, funcionó
- 201: Creado, se creó algo nuevo
- 400: Error del cliente, petición mal hecha
- 404: No encontrado
- 500: Error del servidor


## Stateless (sin estado) en REST

Esto es IMPORTANTE. Stateless significa que el servidor no recuerda nada de ti.

Cada petición que haces es como si fuera la primera vez que lo ves. El servidor no guarda "oh, este usuario ya me pidió algo".

Ejemplo de esto en la práctica:

Petición 1: GET /usuarios/1 → El servidor te devuelve Juan
Petición 2: GET /usuarios/1 → El servidor te devuelve Juan OTRA VEZ (no recuerda que ya te lo mostró)

Cada petición tiene toda la información que el servidor necesita para responder. Si necesitas información de un usuario específico, lo pasas en la URL o en el body.

Por qué es así:

- Escalabilidad: El servidor no necesita guardar memoria de cada cliente
- Confiabilidad: Si un servidor cae, otro puede responder sin problema (no hay sesiones perdidas)
- Simplicidad: No hay que sincronizar "quién pidió qué"

Lo contrario sería stateful (con estado). Por ejemplo, en un videojuego guardan tu progreso. Si el servidor cae y te conectas a otro, necesita saber dónde estabas. Eso es stateful.

En REST no. Cada petición es independiente.


## HTTP en REST en práctica

GET /usuarios
→ "Quiero traer usuarios"
← Respuesta 200 con la lista

POST /usuarios
→ "Quiero crear un usuario nuevo" + datos en el body
← Respuesta 201 con el usuario creado

PUT /usuarios/1
→ "Quiero cambiar completamente el usuario 1" + datos en el body
← Respuesta 200 con el usuario actualizado

DELETE /usuarios/1
→ "Quiero eliminar el usuario 1"
← Respuesta 200 "eliminado"

Codes de respuesta comunes:

200 OK - Funcionó
201 Created - Se creó exitosamente
400 Bad Request - Le mandaste algo mal
404 Not Found - No existe
500 Internal Server Error - El servidor se rompió


## La importancia del Stateless

Imagina una API con estado (stateful):

1. POST /login con usuario y contraseña
2. Servidor dice: "OK, te recuerdo, tu sesión es la #123"
3. Tienes que guardar esa sesión

Luego:
4. GET /datos - Tienes que decirle "soy la sesión #123"

Es complicado. El servidor tiene que guardar.

En Stateless (REST):

1. POST /login
2. Servidor responde con un token (un número mágico)
3. Tú guardas ese token

Luego:
4. GET /datos + el token
5. Servidor lee el token y sabe quién eres SIN guardar nada

Cada petición es completa. Tú llevas la información.

Próximo: Ver código con HTTP y stateless en acción.
