const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const { getAllRecipe } = require('../controllers/ControllerRecipe');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* ----------Listar Recetas desde la app---------- */

/* Listar Recetas de la Base de Datos */

/* obtener Todas las Recetas de la Api y de la bd */

/* Obtener un listado de las recetas que
 contengan la palabra ingresada como query parameter */
router.get('/', getAllRecipe);
// router.get('/', async (req, res) => {
//   const name = req.query.name;
//   let recipeTotal = await getAllRecipe();
//   console.log(recipeTotal.length + 'total de recetas');
//   if (name) {
//     let recipeName = await recipeTotal.filter((el) =>
//       el.name.toLowerCase().includes(name.toString().toLowerCase())
//     );
//     recipeName.length
//       ? res.status(200).send(recipeName)
//       : res
//           .status(404)
//           .send(
//             'No existe Receta que contenga ese Nombre: ' + name.toLowerCase()
//           );
//   } else {
//     res.status(200).send(recipeTotal);
//   }
// });

/* Obtener todos los tipos de dieta posibles
En una primera instancia, cuando no exista ninguno,
 deberán precargar la base de datos con los tipos de */

/* Ruta del post crear una para crear una Receta */

module.exports = router;
