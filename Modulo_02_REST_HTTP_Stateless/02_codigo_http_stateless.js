// Ejemplo: HTTP y Stateless en acción

const express = require('express');
const app = express();
app.use(express.json());

// Datos
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com' },
  { id: 2, nombre: 'María', email: 'maria@mail.com' }
];

// GET - Traer todos (el cliente pide, el servidor responde, sin guardar nada)
app.get('/usuarios', (req, res) => {
  // El servidor NO recuerda que ya pidió esto antes
  // Cada petición es nueva
  res.status(200).json(usuarios);  // 200 = OK
});

// GET - Traer uno específico (el cliente dice CUÁL quiere)
app.get('/usuarios/:id', (req, res) => {
  // El servidor lee el ID de la URL, no de la memoria
  // Esto es stateless: el cliente TE DICE qué quiere
  const id = req.params.id;
  const usuario = usuarios.find(u => u.id == id);

  if (usuario) {
    res.status(200).json(usuario);  // 200 = Encontrado
  } else {
    res.status(404).json({ error: 'No existe' });  // 404 = No encontrado
  }
});

// POST - Crear nuevo (el cliente manda los datos, el servidor crea sin guardar sesión)
app.post('/usuarios', (req, res) => {
  // El cliente TE MANDA nombre y email
  // El servidor NO guarda "oh este cliente me pidió crear algo"
  // La próxima petición del cliente es completamente nueva

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);  // 201 = Creado
});

// PUT - Cambiar todo (el cliente dice qué cambiar y con qué datos)
app.put('/usuarios/:id', (req, res) => {
  // Stateless: El cliente TE DICE el ID y TE MANDA los datos nuevos
  // El servidor no memoriza "este cliente está editando el usuario 5"

  const id = req.params.id;
  const usuario = usuarios.find(u => u.id == id);

  if (usuario) {
    usuario.nombre = req.body.nombre;
    usuario.email = req.body.email;
    res.status(200).json(usuario);  // 200 = OK
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

// DELETE - Eliminar (el cliente dice qué eliminar)
app.delete('/usuarios/:id', (req, res) => {
  // Stateless: El cliente TE DICE qué eliminar
  // No hay "historial" de lo que pidió

  const id = req.params.id;
  const posicion = usuarios.findIndex(u => u.id == id);

  if (posicion !== -1) {
    const eliminado = usuarios.splice(posicion, 1);
    res.status(200).json({ mensaje: 'Eliminado', usuario: eliminado[0] });
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

app.listen(3000, () => {
  console.log('Servidor stateless en http://localhost:3000');
  console.log('Cada petición es independiente, el servidor no recuerda nada');
});
