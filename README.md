# Curso API REST

Organizado por módulos. Cada módulo tiene lecciones y código.

## Módulos

### Módulo 1: Introducción a API REST
- `01_leccion.md` - Conceptos básicos de REST, diferencias con otras APIs, fundamentos
- `02_servidor_basico.js` - Tu primer servidor REST con Express
- `03_ejemplos_peticiones.js` - Ejemplos de GET, POST, PUT, DELETE

### Módulo 2: REST, HTTP y Stateless
- `01_leccion.md` - Relación entre REST e HTTP, métodos HTTP, códigos de respuesta, qué es stateless
- `02_codigo_http_stateless.js` - Servidor con comentarios sobre HTTP y stateless
- `03_flujo_visual.md` - Diagramas de cómo funciona la comunicación

### Módulo 3: Cliente y Servidor
- `01_leccion.md` - Quién es el cliente, quién es el servidor, tipos de clientes
- `02_codigo_diferentes_clientes.js` - Ejemplos de navegador, Node.js, Python, curl
- `03_flujo_comunicacion.md` - Flujos de petición-respuesta

### Módulo 4: Herramientas para trabajar y probar
- `01_leccion.md` - Insomnia, Postman, curl, Thunder Client, REST Client
- `02_ejemplos.http` - Ejemplos para usar con REST Client o Insomnia
- `03_guia_insomnia.md` - Paso a paso de cómo usar Insomnia

### Módulo 5: Anatomía de una petición REST
- `01_leccion.md` - Verbos HTTP, encabezados, cuerpo, path parameters, query parameters
- `02_codigo.js` - Servidor con ejemplos de todos los tipos de parámetros
- `03_ejemplos.http` - Ejemplos prácticos de peticiones con diferentes partes

### Módulo 6: API Discovery
- `01_leccion.md` - Cómo explorar APIs, Swagger/OpenAPI, patrones comunes
- `02_servidor_con_swagger.js` - Servidor con documentación Swagger automática
- `03_explorar_apis_publicas.md` - Guía de APIs públicas para practicar (JSONPlaceholder, GitHub, etc)

## Cómo estudiar

1. Lee la lección (01_leccion.md)
2. Mira el código (02_codigo)
3. Revisa los flujos y ejemplos (03_)
4. Practica haciendo peticiones

## Para empezar

Para probar los servidores:

```bash
npm install express
node 02_servidor_basico.js
```

Luego abre la consola del navegador o copia los ejemplos de peticiones.

---

## Próximos módulos

- Módulo 05: Métodos HTTP en detalle (GET, POST, PUT, DELETE, PATCH)
- Módulo 06: Status codes (200, 201, 400, 404, 500, etc)
- Módulo 07: Autenticación y autorización
- Módulo 08: Base de datos real (no datos fake)
- Módulo 09: Validación de datos
- Módulo 10: Manejo de errores
- Módulo 11: CORS
- Módulo 12: Proyecto final
