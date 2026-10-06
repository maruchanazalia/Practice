// Mi primer servidor REST
// Necesitas tener Express instalado: npm install express

const express = require('express');
const app = express();

// Le digo que entienda JSON
app.use(express.json());

// Datos fake (en la realidad sería una base de datos)
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com' },
  { id: 2, nombre: 'María', email: 'maria@mail.com' }
];

// GET - traer todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// GET - traer un usuario por ID
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const usuario = usuarios.find(u => u.id == id);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

// POST - crear un usuario nuevo
app.post('/usuarios', (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email
  };

  usuarios.push(nuevoUsuario);
  res.json(nuevoUsuario);
});

// PUT - cambiar un usuario completo
app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const usuario = usuarios.find(u => u.id == id);

  if (usuario) {
    usuario.nombre = req.body.nombre;
    usuario.email = req.body.email;
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

// DELETE - eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const posicion = usuarios.findIndex(u => u.id == id);

  if (posicion !== -1) {
    const eliminado = usuarios.splice(posicion, 1);
    res.json({ mensaje: 'Eliminado', usuario: eliminado[0] });
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

// El servidor escucha en puerto 3000
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
  console.log('Prueba:');
  console.log('GET http://localhost:3000/usuarios');
  console.log('GET http://localhost:3000/usuarios/1');
  console.log('POST http://localhost:3000/usuarios (con {nombre, email})');
  console.log('PUT http://localhost:3000/usuarios/1 (con {nombre, email})');
  console.log('DELETE http://localhost:3000/usuarios/1');
});
