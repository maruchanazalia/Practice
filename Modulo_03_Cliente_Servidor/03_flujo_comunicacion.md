# Flujo de comunicación Cliente-Servidor

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


## Múltiples clientes, un servidor

```
NAVEGADOR                    SERVIDOR
  |                            |
  | GET /usuarios ------------> |
  |                          (responde)
  |                            |
APLICACIÓN MÓVIL             |
  |                            |
  | POST /usuarios ------------> |
  |                          (responde)
  |                            |
PYTHON SCRIPT                |
  |                            |
  | GET /usuarios/1 ---------> |
  |                          (responde)
  |                            |
```

El servidor atiende a todos igual. Stateless, sin memoria.


## Orden de eventos

1. Cliente abre conexión
2. Cliente envía petición
3. Servidor recibe
4. Servidor procesa
5. Servidor envía respuesta
6. Cliente recibe
7. Conexión cierra
8. Servidor olvida todo (stateless)

Si el cliente vuelve a pedir lo mismo:
- Es como si fuera la primera vez
- El servidor no recuerda nada


## En resumen

- Todo es petición-respuesta
- Cliente siempre inicia
- Servidor siempre responde
- Cada petición es independiente
- No hay "memoria" entre peticiones
