# Guía: Explorar APIs Públicas

## APIs fáciles para practicar

### JSONPlaceholder (la mejor para aprender)

URL: https://jsonplaceholder.typicode.com

Es una API fake pero perfecta para aprender. No necesita autenticación.

Recursos disponibles:
- /posts
- /comments
- /albums
- /photos
- /todos
- /users

Ejemplos:

```
GET https://jsonplaceholder.typicode.com/posts
```
Devuelve 100 posts fake.

```
GET https://jsonplaceholder.typicode.com/posts/1
```
Devuelve el post 1.

```
GET https://jsonplaceholder.typicode.com/posts/1/comments
```
Devuelve comentarios del post 1.

```
POST https://jsonplaceholder.typicode.com/posts
```
Crea un post (fake, no se guarda realmente).


### GitHub API

URL: https://api.github.com

No necesita autenticación para lectura básica.

Ejemplos:

```
GET https://api.github.com/users/torvalds
```
Devuelve info del usuario Linus Torvalds.

```
GET https://api.github.com/users/torvalds/repos
```
Devuelve repositorios del usuario.

```
GET https://api.github.com/repos/torvalds/linux
```
Devuelve info del repositorio linux.

Documentación: https://docs.github.com/en/rest


### OpenWeather API

URL: https://api.openweathermap.org

Necesita API key (gratis).

```
GET https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=TU_API_KEY
```

Devuelve clima de Madrid.

Documentación: https://openweathermap.org/api


### PokéAPI

URL: https://pokeapi.co

No necesita autenticación. Perfecta para jugar.

Ejemplos:

```
GET https://pokeapi.co/api/v2/pokemon/pikachu
```
Devuelve info de Pikachu.

```
GET https://pokeapi.co/api/v2/pokemon
```
Devuelve lista de pokémon.

Documentación: https://pokeapi.co/docs/v2


## Cómo explorar una API nueva

### Paso 1: Documentación

Busca "API Nombre documentación" en Google.

La mayoría tiene documentación clara.


### Paso 2: Endpoints básicos

Empieza probando:
```
GET /
GET /api
GET /api/v1
```

A veces te dice qué hay disponible.


### Paso 3: Recursos comunes

Prueba patrones comunes:
```
GET /usuarios
GET /posts
GET /productos
GET /articles
```


### Paso 4: Parámetros

Una vez que encuentres un endpoint, prueba:

Query parameters:
```
GET /posts?limit=10
GET /posts?page=2
GET /posts?sort=date
```

Path parameters:
```
GET /posts/1
GET /posts/1/comments
```


### Paso 5: Métodos

Si GET funciona, prueba:
```
POST   /posts     (crear)
PUT    /posts/1   (cambiar)
DELETE /posts/1   (eliminar)
```


## Errores comunes

CORS error
Significa que el navegador no permite llamar esa API desde JavaScript.

Solución: Usa Insomnia, curl, o un proxy.

401 Unauthorized
Significa que necesita autenticación.

Solución: Busca en la documentación cómo obtener API key o token.

404 Not Found
Significa que el endpoint no existe.

Solución: Verifica la URL, a veces es /v1, /v2, /api, etc.

429 Too Many Requests
Significa que llegaste al límite de peticiones.

Solución: Espera un rato, o mejora tu plan.


## Herramientas útiles

Insomnia
Para probar APIs de forma visual.

curl
Para probar desde terminal.

Postman
Para organizar colecciones.

Swagger UI
Si la API tiene Swagger.

REST Client (VS Code)
Para probar desde el editor.


## Checklist al explorar

- Documentación clara?
- Necesita autenticación?
- Rate limiting?
- Qué formatos acepta (JSON, XML)?
- Paginación?
- Errores descriptivos?
- Ejemplos de uso?
- Activa o deprecada?


## Resumen

1. Lee documentación
2. Prueba endpoints GET primero
3. Sigue patrones REST
4. Experimenta con parámetros
5. Usa herramientas para probar
6. Lee mensajes de error con atención
