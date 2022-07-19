const { Router } = require('express');
const recetas = require('./recetas.routes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/* creando mis rutas de Recipes */
router.use('/recipes', recetas);

module.exports = router;
