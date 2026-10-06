# Módulo 3: Cliente y Servidor en REST

## Los actores principales

En una API REST siempre hay dos: el cliente y el servidor.


## El Cliente

Es el que PIDE cosas. Puede ser:

Navegador web
Cuando entras a una página web, el navegador es el cliente. Hace peticiones GET, POST, etc al servidor.

Ejemplo: Entras a Facebook, el navegador pide /usuario/123, el servidor responde con tus datos.

Aplicación móvil
Tu app de Instagram, WhatsApp, etc. Hace peticiones a la API REST de los servidores.

Ejemplo: Abres Instagram, la app hace GET /posts/feed, el servidor devuelve los posts.

Otro servidor
Un servidor A puede ser cliente de otro servidor B. Por ejemplo, Stripe (pagos) puede ser cliente de tu servidor.

Ejemplo: Tu servidor hace POST /pagos a Stripe, Stripe responde si la transacción fue OK.

Un script o código que escribes
Tu código en Node.js, Python, etc. puede hacer peticiones.

Ejemplo: Un script que hace GET /usuarios cada hora para sincronizar datos.

Herramientas de prueba
Como Postman o curl. Las usas para probar tu API sin necesidad de escribir código.

Ejemplo: curl -X GET http://localhost:3000/usuarios


## El Servidor

Es el que RESPONDE. Sirve la información y procesa peticiones.

Funciones del servidor:
- Recibe peticiones del cliente
- Valida que la petición sea correcta
- Busca los datos (en base de datos, archivos, etc)
- Responde con datos o un error
- No guarda nada del cliente (stateless)

Ejemplo: Tu API REST en Node.js que creamos es un servidor.


## Cómo se comunican

1. Cliente hace una petición: GET /usuarios/1

2. Servidor recibe la petición

3. Servidor busca el usuario 1

4. Servidor responde con los datos del usuario 1 + código 200

5. Cliente recibe la respuesta y la usa

6. Fin. El servidor olvida que pasó (stateless).

7. Si el cliente hace otra petición, es como si fuera nuevo.


## Ejemplos reales de interacción

Caso 1: Tu navegador y Twitter

1. Abres Twitter en el navegador
2. El navegador (cliente) hace GET /tweets
3. El servidor de Twitter responde con los tweets
4. El navegador muestra los tweets

Más interacciones:
5. Haces like en un tweet
6. El navegador hace POST /tweets/123/like
7. Twitter responde "OK, le diste like"

Caso 2: Tu app móvil y Spotify

1. Abres Spotify
2. La app (cliente) hace GET /canciones/favoritas
3. Spotify (servidor) responde con tus canciones
4. La app las muestra en la pantalla

5. Pones una canción en favoritos
6. La app hace POST /favoritos con el ID de la canción
7. Spotify responde "OK, agregada"

Caso 3: Tu código (Python) y una API externa

Tu código es el cliente
GitHub es el servidor

Aquí TÚ eres el cliente (tu código), GitHub es el servidor.


## Datos que viajan

Cuando el cliente pide algo, puede enviar datos de varias formas:

En la URL (GET)
GET /usuarios/1
→ El "1" es el dato

En el body (POST, PUT)
POST /usuarios
Body: { "nombre": "Juan", "email": "juan@mail.com" }
→ Los datos van en el cuerpo

En headers
Authorization: Bearer token123
→ Información en las cabeceras

En query params
GET /usuarios?edad=25&ciudad=Madrid
→ Filtros en la URL


## Respuestas del servidor

El servidor siempre responde con:

1. Código HTTP (200, 404, etc)
2. Headers (información sobre la respuesta)
3. Body (los datos)

Ejemplo:

Petición:
GET /usuarios/1

Respuesta:
Status: 200 OK
Headers: Content-Type: application/json
Body:
{
  "id": 1,
  "nombre": "Juan",
  "email": "juan@mail.com"
}


## Resumen

- Cliente: El que PIDE (navegador, app, otro servidor, tu código)
- Servidor: El que RESPONDE (tu API REST)
- Comunicación: Petición HTTP → Respuesta HTTP
- Stateless: Cada petición es independiente, sin memoria
- Datos: Van en URL, body o headers

Próximo: Ver diferentes tipos de clientes.
