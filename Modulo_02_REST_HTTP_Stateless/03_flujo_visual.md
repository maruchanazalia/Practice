# Flujo HTTP en REST

## Flujo básico

```
CLIENTE                          SERVIDOR
  |                                |
  | --- Petición GET /usuarios --> |
  |                                | (busca en base de datos)
  | <-- Respuesta 200 + datos ---- |
  |                                |
```

Así. El cliente pide, el servidor responde. Fin.


## Flujo GET (traer datos)

```
CLIENTE                          SERVIDOR
  |                                |
  | GET /usuarios/1               |
  | -------- petición ----------> |
  |                                |
  |                          (busca usuario 1)
  |                          (lo encuentra)
  |                                |
  | <--- 200 OK + usuario -------- |
  |                                |
  | (cliente muestra el dato)       |
  |                                |
```


## Flujo POST (crear algo)

```
CLIENTE                          SERVIDOR
  |                                |
  | POST /usuarios                |
  | { nombre, email }             |
  | -------- petición ----------> |
  |                                |
  |                     (crea nuevo usuario)
  |                     (lo guarda)
  |                                |
  | <--- 201 Created + usuario --- |
  |                                |
  | (cliente obtiene el nuevo)      |
  |                                |
```


## Flujo PUT (cambiar completamente)

```
CLIENTE                          SERVIDOR
  |                                |
  | PUT /usuarios/1               |
  | { nuevo nombre, nuevo email } |
  | -------- petición ----------> |
  |                                |
  |                     (busca usuario 1)
  |                     (lo cambia)
  |                                |
  | <--- 200 OK + usuario nuevo -- |
  |                                |
```


## Flujo DELETE (eliminar)

```
CLIENTE                          SERVIDOR
  |                                |
  | DELETE /usuarios/1            |
  | -------- petición ----------> |
  |                                |
  |                     (busca usuario 1)
  |                     (lo elimina)
  |                                |
  | <--- 200 OK + mensaje -------- |
  |                                |
```


## Flujo con error (404)

```
CLIENTE                          SERVIDOR
  |                                |
  | GET /usuarios/999             |
  | -------- petición ----------> |
  |                                |
  |                     (busca usuario 999)
  |                     (NO lo encuentra)
  |                                |
  | <--- 404 Not Found ----------- |
  |                                |
  | (cliente maneja el error)       |
  |                                |
```


## Por qué Stateless importa

Petición 1:
GET /usuarios/1
→ Servidor responde con Juan
→ Servidor OLVIDA que pasó esto

Petición 2:
GET /usuarios/1
→ Servidor responde con Juan OTRA VEZ
→ Como si fuera la primera vez

El servidor no guarda "oh este cliente ya pidió esto". Cada petición es nueva. Por eso es stateless.

Próximo: Quién interactúa con REST.
