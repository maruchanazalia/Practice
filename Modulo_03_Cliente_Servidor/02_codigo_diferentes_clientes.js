// Ejemplo: Diferentes tipos de clientes usando la misma API

const express = require('express');
const app = express();
app.use(express.json());

// Datos
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com' },
  { id: 2, nombre: 'María', email: 'maria@mail.com' }
];

// El servidor (igual que siempre)
app.get('/usuarios', (req, res) => {
  res.status(200).json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (usuario) {
    res.status(200).json(usuario);
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

app.post('/usuarios', (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});

// ============================================
// CLIENTE 1: JavaScript en el navegador
// ============================================
// Copia esto en la consola del navegador

// GET - Traer usuarios
fetch('http://localhost:3000/usuarios')
  .then(res => res.json())
  .then(datos => console.log('Navegador recibió:', datos));

// POST - Crear usuario
fetch('http://localhost:3000/usuarios', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombre: 'Ana', email: 'ana@mail.com' })
})
  .then(res => res.json())
  .then(datos => console.log('Navegador creó:', datos));


// ============================================
// CLIENTE 2: Node.js (otro servidor o script)
// ============================================
// Necesitas: npm install axios

const axios = require('axios');

// GET
axios.get('http://localhost:3000/usuarios')
  .then(res => console.log('Node.js recibió:', res.data))
  .catch(err => console.error('Error:', err));

// POST
axios.post('http://localhost:3000/usuarios', {
  nombre: 'Carlos',
  email: 'carlos@mail.com'
})
  .then(res => console.log('Node.js creó:', res.data))
  .catch(err => console.error('Error:', err));


// ============================================
// CLIENTE 3: Python (script o aplicación)
// ============================================
// Necesitas: pip install requests

/*
import requests

# GET
respuesta = requests.get('http://localhost:3000/usuarios')
print('Python recibió:', respuesta.json())

# POST
datos = {
  'nombre': 'Diego',
  'email': 'diego@mail.com'
}
respuesta = requests.post('http://localhost:3000/usuarios', json=datos)
print('Python creó:', respuesta.json())
*/


// ============================================
// CLIENTE 4: curl (línea de comandos)
// ============================================
// Ejecuta en terminal

/*
# GET
curl http://localhost:3000/usuarios

# GET un usuario
curl http://localhost:3000/usuarios/1

# POST
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Elena","email":"elena@mail.com"}'
*/


// ============================================
// Lo importante
// ============================================
// El servidor es IGUAL para todos
// Cada cliente lo usa de diferente forma
// Pero el servidor responde igual para todos
//
// - Navegador usa fetch()
// - Node.js usa axios o fetch
// - Python usa requests
// - curl desde terminal
//
// Todos llegan al mismo servidor, todos reciben lo mismo
