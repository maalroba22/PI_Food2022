const axios = require('axios');
const { Diet } = require('../db');
const { API_KEY } = process.env;

module.exports = {
  diet: async () => {
    const dietApi = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const diet = await dietApi.data.results.map((el) => el.diets);
    let data = diet.flat();
    const typeDiet = [...new Set(data), 'vegetarian'];
    typeDiet.forEach((el) => {
      Diet.findOrCreate({
        where: { name: el },
      });
    });
  },
};
