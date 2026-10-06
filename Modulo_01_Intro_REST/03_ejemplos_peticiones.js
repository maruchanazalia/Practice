// Ejemplos de cómo usar la API
// Copia y pega en la consola del navegador

// 1. Traer todos los usuarios
fetch('http://localhost:3000/usuarios')
  .then(res => res.json())
  .then(datos => console.log(datos));


// 2. Traer un usuario por ID
fetch('http://localhost:3000/usuarios/1')
  .then(res => res.json())
  .then(datos => console.log(datos));


// 3. Crear un usuario nuevo
fetch('http://localhost:3000/usuarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombre: 'Carlos', email: 'carlos@mail.com' })
})
  .then(res => res.json())
  .then(datos => console.log('Creado:', datos));


// 4. Cambiar un usuario
fetch('http://localhost:3000/usuarios/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombre: 'Juan Pérez', email: 'juan@mail.com' })
})
  .then(res => res.json())
  .then(datos => console.log('Actualizado:', datos));


// 5. Eliminar un usuario
fetch('http://localhost:3000/usuarios/2', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(datos => console.log('Eliminado:', datos));
