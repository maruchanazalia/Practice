# Módulo 4: Herramientas para trabajar y probar APIs

## Por qué necesitas herramientas

Cuando desarrollas una API, necesitas probarla sin tener que escribir código cada vez. Las herramientas te dejan hacer peticiones fácil.

Sin herramientas: Tienes que hacer código JavaScript cada vez
Con herramientas: Haces clic, cambias datos, ves la respuesta


## Insomnia

Es lo mejor para empezar. Simple, bonito, fácil.

Qué hace:
- Creas requests (peticiones)
- Cambias el método (GET, POST, etc)
- Agregas datos en el body
- Ves la respuesta
- Guardas todo para después

Ventajas:
- Interfaz linda
- Fácil de usar
- Gratis
- Todo en un lugar

Desventajas:
- Nada importante, es muy bueno

Dónde descargarlo: https://insomnia.rest/


## Postman

Es el más popular, pero más complicado que Insomnia.

Qué hace:
- Lo mismo que Insomnia
- Más features avanzados
- Colecciones de requests

Ventajas:
- Muy potente
- Comunidad grande
- Mucho contenido online

Desventajas:
- Interfaz más complicada
- Lento a veces

Dónde descargarlo: https://www.postman.com/


## curl

Es una herramienta de línea de comandos. Perfecto si no quieres instalar nada.

Ventajas:
- Muy ligero
- Ya viene en Windows, Mac, Linux
- Perfecto para scripting

Desventajas:
- Tienes que escribir comandos
- Sin interfaz visual

Ejemplo:

```bash
curl http://localhost:3000/usuarios
```

Ejemplos comunes:

GET
```bash
curl http://localhost:3000/usuarios/1
```

POST
```bash
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Juan","email":"juan@mail.com"}'
```

PUT
```bash
curl -X PUT http://localhost:3000/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Juan","email":"juan@mail.com"}'
```

DELETE
```bash
curl -X DELETE http://localhost:3000/usuarios/1
```


## Thunder Client (VS Code)

Si usas VS Code, hay una extensión que viene integrada.

Ventajas:
- Dentro del editor
- Sin instalar nada extra
- Muy rápido

Desventajas:
- Solo si usas VS Code

Busca "Thunder Client" en extensiones de VS Code


## REST Client (VS Code)

Otra extensión para VS Code.

Ventajas:
- Muy simple
- Funciona con archivos .http

Desventajas:
- Menos features

Ejemplo de archivo (.http o .rest):

```
### GET usuarios
GET http://localhost:3000/usuarios

### GET un usuario
GET http://localhost:3000/usuarios/1

### POST crear usuario
POST http://localhost:3000/usuarios
Content-Type: application/json

{
  "nombre": "Juan",
  "email": "juan@mail.com"
}

### PUT cambiar usuario
PUT http://localhost:3000/usuarios/1
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "email": "juan@mail.com"
}
```


## Comparación rápida

Insomnia = La más bonita y fácil, recomendada
Postman = La más popular y potente, pero más compleja
curl = La más ligera, sin interfaz
Thunder Client = Integrado en VS Code, muy práctico
REST Client = Archivos .http, muy simple


## Cuál elegio para empezar

Insomnia. Es simple, bonita, y tienes todo lo que necesitas.

Próximo: Usar Insomnia para probar tu API.
