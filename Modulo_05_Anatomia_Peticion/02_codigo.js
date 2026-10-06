// Ejemplos: Anatomía de una petición REST

const express = require('express');
const app = express();
app.use(express.json());

// Datos
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com', edad: 25 },
  { id: 2, nombre: 'María', email: 'maria@mail.com', edad: 30 }
];

// ============================================
// GET - Sin parámetros
// ============================================
// Petición:
// GET http://localhost:3000/usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});


// ============================================
// GET - Con path parameter
// ============================================
// Petición:
// GET http://localhost:3000/usuarios/1
app.get('/usuarios/:id', (req, res) => {
  // :id es el path parameter
  const id = req.params.id;
  const usuario = usuarios.find(u => u.id == id);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});


// ============================================
// GET - Con query parameters
// ============================================
// Petición:
// GET http://localhost:3000/usuarios?edad=25
// GET http://localhost:3000/usuarios?edad=25&limite=10
app.get('/usuarios-filtro', (req, res) => {
  // Query parameters van en req.query
  const edad = req.query.edad;
  const limite = req.query.limite || 10;

  let resultado = usuarios;

  if (edad) {
    resultado = resultado.filter(u => u.edad == edad);
  }

  resultado = resultado.slice(0, limite);
  res.json(resultado);
});


// ============================================
// POST - Con body (JSON)
// ============================================
// Petición:
// POST http://localhost:3000/usuarios
// Content-Type: application/json
//
// {
//   "nombre": "Carlos",
//   "email": "carlos@mail.com",
//   "edad": 28
// }
app.post('/usuarios', (req, res) => {
  // El body viene en req.body
  const { nombre, email, edad } = req.body;

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email,
    edad
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});


// ============================================
// PUT - Con path parameter y body
// ============================================
// Petición:
// PUT http://localhost:3000/usuarios/1
// Content-Type: application/json
//
// {
//   "nombre": "Juan Nuevo",
//   "email": "juan.nuevo@mail.com",
//   "edad": 26
// }
app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const usuario = usuarios.find(u => u.id == id);

  if (!usuario) {
    return res.status(404).json({ error: 'No existe' });
  }

  // Actualiza todos los campos del body
  usuario.nombre = req.body.nombre;
  usuario.email = req.body.email;
  usuario.edad = req.body.edad;

  res.json(usuario);
});


// ============================================
// PATCH - Con path parameter y body parcial
// ============================================
// Petición:
// PATCH http://localhost:3000/usuarios/1
// Content-Type: application/json
//
// {
//   "nombre": "Juan Parche"
// }
app.patch('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const usuario = usuarios.find(u => u.id == id);

  if (!usuario) {
    return res.status(404).json({ error: 'No existe' });
  }

  // Actualiza solo los campos que vienen en el body
  if (req.body.nombre) usuario.nombre = req.body.nombre;
  if (req.body.email) usuario.email = req.body.email;
  if (req.body.edad) usuario.edad = req.body.edad;

  res.json(usuario);
});


// ============================================
// DELETE - Con path parameter
// ============================================
// Petición:
// DELETE http://localhost:3000/usuarios/1
app.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const posicion = usuarios.findIndex(u => u.id == id);

  if (posicion === -1) {
    return res.status(404).json({ error: 'No existe' });
  }

  const eliminado = usuarios.splice(posicion, 1);
  res.json({ mensaje: 'Eliminado', usuario: eliminado[0] });
});


// ============================================
// GET - Con headers personalizados
// ============================================
// Petición:
// GET http://localhost:3000/usuarios/con-headers
// Authorization: Bearer token123
// Custom-Header: miValor
app.get('/usuarios-con-headers', (req, res) => {
  // Headers vienen en req.headers
  const token = req.headers.authorization;
  const custom = req.headers['custom-header'];

  res.json({
    mensaje: 'Headers recibidos',
    token,
    custom
  });
});


app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
  console.log('');
  console.log('Ejemplos:');
  console.log('GET    /usuarios');
  console.log('GET    /usuarios/1');
  console.log('GET    /usuarios-filtro?edad=25');
  console.log('POST   /usuarios (con body JSON)');
  console.log('PUT    /usuarios/1 (con body JSON)');
  console.log('PATCH  /usuarios/1 (con body JSON parcial)');
  console.log('DELETE /usuarios/1');
});
