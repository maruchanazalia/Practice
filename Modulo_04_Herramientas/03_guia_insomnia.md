# Guía: Cómo usar Insomnia

## Instalar Insomnia

1. Ve a https://insomnia.rest/
2. Descarga para tu sistema (Windows, Mac, Linux)
3. Instala como cualquier programa
4. Abre Insomnia


## Crear tu primer request

Paso 1: Crear un proyecto
- Click en "Create"
- Dale un nombre (ej: "API REST Learning")
- Click "Create"

Paso 2: Crear un request
- Click en "+"
- Dale un nombre (ej: "GET usuarios")
- Elige el método (GET por defecto está bien)
- Click "Create"

Paso 3: Escribir la URL
- En el campo de la URL, escribe: http://localhost:3000/usuarios
- Click en "Send"
- Deberías ver la respuesta abajo


## GET - Traer datos

1. Método: GET (por defecto)
2. URL: http://localhost:3000/usuarios
3. Click Send
4. Ves la lista de usuarios


## POST - Crear algo

1. Método: Cambia a POST
2. URL: http://localhost:3000/usuarios
3. Click en "Body"
4. Elige "JSON" (no "form")
5. Escribe:
```json
{
  "nombre": "Juan",
  "email": "juan@mail.com"
}
```
6. Click Send


## PUT - Cambiar algo

1. Método: Cambia a PUT
2. URL: http://localhost:3000/usuarios/1
3. Click en "Body" → "JSON"
4. Escribe:
```json
{
  "nombre": "Juan Nuevo",
  "email": "juan.nuevo@mail.com"
}
```
5. Click Send


## DELETE - Eliminar

1. Método: Cambia a DELETE
2. URL: http://localhost:3000/usuarios/1
3. No necesitas body
4. Click Send


## Ver los headers

Si quieres ver qué headers se envían:
1. Click en "Headers"
2. Ahí ves todo lo que Insomnia envía
3. Puedes agregar headers propios si necesitas


## Guardar requests en carpetas

Para organizarte mejor:
1. Haz clic derecho en un request
2. "Move" 
3. Crea una carpeta (ej: "Usuarios")
4. Mueve los requests ahí


## Variables

Si quieres reutilizar valores:
1. Click en el icono de llave (abajo a la izquierda)
2. Click en "Environment"
3. Agrega variables:
```
{
  "base_url": "http://localhost:3000",
  "usuario_id": "1"
}
```

4. Luego en la URL usa: {{base_url}}/usuarios/{{usuario_id}}


## Workflow típico

1. Abre Insomnia
2. Levanta tu servidor: node servidor.js
3. Creas un request GET a http://localhost:3000/usuarios
4. Click Send, ves los datos
5. Cambias a POST, agregas datos en el body
6. Click Send, creas un usuario
7. Cambias a PUT, editas el usuario
8. Click Send
9. Cambias a DELETE, eliminas
10. Click Send
11. Todo sin escribir una línea de código


## Atajos útiles

Ctrl + Enter (o Cmd + Enter) = Send
Ctrl + K = Comando
Ctrl + Shift + L = Toggle sidebar


## Tips

- Siempre antes de cambiar de método, copia la URL anterior
- Guarda requests que reutilices
- Usa variables para no escribir URLs largas
- Lee bien la respuesta, ahí ves si hay errores
