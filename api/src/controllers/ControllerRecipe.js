const axios = require('axios');
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../db');

/* Obtengo  las recetas de la Api */
const getApiInfo = async () => {
  const urlApi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
  );
  const apiInfo = await urlApi.data.results.map((el) => {
    return {
      id: el.id,
      name: el.title,
      summary: el.summary,
      healthScore: el.healthScore,
      image: el.image,
      instructions: el.analyzedInstructions[0]?.steps.map((paso) => {
        return `<b>${paso.number}</b> ${paso.step}<br>`;
      }),
    };
  });
  return apiInfo;
};
/* Obtengo los Datos de la base de Datos */
const getDbinfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      atrributes: ['name'],
      through: {
        atrributes: [],
      },
    },
  });
};
/* Combino la infromacion de la App y la de la DB */
const getAllRecipe = async () => {
  const apiInfo = await getApiInfo();
  const dbinfo = await getDbinfo();
  const infoTotal = apiInfo.concat(dbinfo);
  return infoTotal;
};
module.exports = {
  getAllRecipe,
};
