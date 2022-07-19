const axios = require('axios');
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../db');
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
const getAllRecipe = async (req, res) => {
  const apiInfo = await getApiInfo();
  const dbinfo = await getDbinfo();
  const infoTotal = apiInfo.concat(dbinfo);
  res.send(infoTotal);
};

module.exports = {
  getAllRecipe,
};
