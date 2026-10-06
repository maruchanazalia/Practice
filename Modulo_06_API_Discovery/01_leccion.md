# Módulo 6: API Discovery

## Qué es API Discovery

Es la capacidad de explorar una API sin tener que leer toda la documentación. Es como que la API TE CUENTE cuáles son sus endpoints, parámetros, métodos, etc.


## Cómo explorar una API

### 1. Documentación (lo más obvio)
La mayoría de APIs tiene documentación.

GitHub: https://docs.github.com/en/rest
Stripe: https://stripe.com/docs/api
OpenWeather: https://openweathermap.org/api

Lees la documentación y ves qué endpoints existen.


### 2. Probar la URL base
A veces si entras a la URL base, te dice qué hay.

```
GET https://api.github.com
```

Respuesta:
```json
{
  "resources_url": "https://api.github.com/resources",
  "authorizations_url": "https://api.github.com/authorizations",
  "emojis_url": "https://api.github.com/emojis",
  ...
}
```

La API te dice qué recursos hay disponibles.


### 3. Patrones comunes

Las APIs REST siguen patrones. Si ves uno, sabes cómo usar los otros.

Patrón:
```
GET /recurso          → Traer todos
GET /recurso/:id      → Traer uno
POST /recurso         → Crear uno
PUT /recurso/:id      → Cambiar uno
DELETE /recurso/:id   → Eliminar uno
```

Si la API tiene:
```
GET /usuarios
GET /usuarios/1
POST /usuarios
PUT /usuarios/1
DELETE /usuarios/1
```

Probablemente también tenga:
```
GET /posts
GET /posts/1
POST /posts
PUT /posts/1
DELETE /posts/1
```

Mismo patrón para todos los recursos.


### 4. Swagger / OpenAPI

Es un estándar que describe APIs de forma máquina-legible.

La mayoría de APIs modernas tiene Swagger.

¿Dónde buscarlo?

- /swagger (a veces)
- /swagger-ui.html
- /api/docs
- /docs

Swagger te muestra:
- Todos los endpoints
- Parámetros requeridos
- Headers necesarios
- Ejemplo de respuesta
- Códigos de error

Es interactivo, puedes probar desde el navegador.

Ejemplo: https://petstore.swagger.io/


### 5. Herramientas

Postman
- Importa colecciones públicas
- Explora documentación dentro de Postman
- Muy útil

Insomnia
- Similar a Postman
- Tiene biblioteca de APIs públicas

Swagger UI
- Interfaz para cualquier API con Swagger
- Solo necesitas la URL a swagger.json


## OpenAPI / Swagger

Es un archivo JSON o YAML que describe la API.

Estructura básica:

```yaml
openapi: 3.0.0
info:
  title: Mi API
  version: 1.0.0
paths:
  /usuarios:
    get:
      summary: Traer usuarios
      responses:
        '200':
          description: Lista de usuarios
    post:
      summary: Crear usuario
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                nombre:
                  type: string
                email:
                  type: string
```

Esto describe tu API en forma estandarizada.

Ventajas:
- Cualquiera entiende la API igual
- Se genera documentación automáticamente
- Se generan clientes automáticamente
- Los IDEs entienden la API


## Explorando APIs públicas

### GitHub API

```
GET https://api.github.com/users/octocat
```

Devuelve info del usuario octocat.

```
GET https://api.github.com/users/octocat/repos
```

Devuelve repositorios del usuario.

### JSONPlaceholder (fake API para practicar)

```
GET https://jsonplaceholder.typicode.com/posts
GET https://jsonplaceholder.typicode.com/posts/1
GET https://jsonplaceholder.typicode.com/users
```

Es una API fake pero sirve para aprender sin instalar nada.


## Características que buscar en una API

Autenticación
¿Necesita token? ¿API key?

Rate limiting
¿Cuántas peticiones por segundo puedo hacer?

Formato de respuesta
¿JSON? ¿XML?

Parámetros
¿Qué query params acepta?

Paginación
¿Cómo traigo datos en páginas?

Filtros
¿Puedo filtrar por fecha, estado, etc?

Errores
¿Qué códigos de error devuelve? ¿El mensaje es claro?


## Tips para explorar

1. Abre Insomnia o Postman
2. GET a la URL base de la API
3. Lee la respuesta
4. Mira si hay links a otros recursos
5. Sigue los patrones REST
6. Lee la documentación si hay dudas
7. Prueba endpoints en orden (GET, POST, etc)


## Resumen

- Documentación es lo primero
- Aprende los patrones REST comunes
- Busca Swagger / OpenAPI
- Prueba con herramientas (Insomnia, Postman)
- Las APIs modernas son explorables

Próximo: Autenticación en APIs.
