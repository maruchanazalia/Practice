// Servidor con Swagger - API autodocumentada
// npm install express swagger-jsdoc swagger-ui-express

const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

// Datos
let usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com' },
  { id: 2, nombre: 'María', email: 'maria@mail.com' }
];

// Definición de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'Una API simple para gestionar usuarios'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local'
      }
    ]
  },
  apis: ['./nombre_del_archivo.js'] // Archivo actual
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Ruta de Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ============================================
// ENDPOINTS
// ============================================

/**
 * @openapi
 * /usuarios:
 *   get:
 *     summary: Traer todos los usuarios
 *     description: Devuelve una lista de todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   nombre:
 *                     type: string
 *                   email:
 *                     type: string
 */
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

/**
 * @openapi
 * /usuarios/{id}:
 *   get:
 *     summary: Traer un usuario específico
 *     description: Devuelve un usuario por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 nombre:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Usuario no encontrado
 */
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

/**
 * @openapi
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Crea un nuevo usuario con nombre y email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 nombre:
 *                   type: string
 *                 email:
 *                   type: string
 */
app.post('/usuarios', (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

/**
 * @openapi
 * /usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuario completo
 *     description: Actualiza todos los datos de un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *       404:
 *         description: Usuario no encontrado
 */
app.put('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (usuario) {
    usuario.nombre = req.body.nombre;
    usuario.email = req.body.email;
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

/**
 * @openapi
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     description: Elimina un usuario por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */
app.delete('/usuarios/:id', (req, res) => {
  const posicion = usuarios.findIndex(u => u.id == req.params.id);
  if (posicion !== -1) {
    const eliminado = usuarios.splice(posicion, 1);
    res.json({ mensaje: 'Eliminado', usuario: eliminado[0] });
  } else {
    res.status(404).json({ error: 'No existe' });
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
  console.log('Documentación Swagger en http://localhost:3000/api-docs');
  console.log('');
  console.log('Abre http://localhost:3000/api-docs en el navegador');
  console.log('Podrás ver y probar todos los endpoints');
});
