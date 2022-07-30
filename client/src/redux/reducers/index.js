import {
  GET_ALL_RECIPE,
  ORDER_BY_NAME,
  GET_ALL_DIET,
  ORDER_BY_SCORE,
  PAGINADO,
  RECIPE_DETAILS,
  FILTER_BY_DIET,
  SEARCH_NAME_RECYPE,
  POST_ADD_RECIPES,
} from '../actions/actions';
const initialState = {
  recipes: [],
  recipesfiterdit: [], //copia de recipes
  diets: [],
  details: [],
  page: 1,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPE: {
      return {
        ...state,
        recipes: action.payload,
        recipesFilterdiet: action.payload,
      };
    }
    case POST_ADD_RECIPES: {
      return {
        ...state,
      };
    }
    case RECIPE_DETAILS: {
      return {
        ...state,
        details: action.payload,
      };
    }

    case SEARCH_NAME_RECYPE: {
      return {
        ...state,
        recipes: action.payload,
      };
    }
    case FILTER_BY_DIET: {
      const newRecipes = state.recipes;
      const recipesFilterdiet =
        action.payload === 'all'
          ? newRecipes
          : newRecipes.filter((el) => {
              let names = el.diets.map((d) => d.name);
              if (names.includes(action.payload)) return el;
            });

      return {
        ...state,
        recipes: recipesFilterdiet,
      };
    }

    case ORDER_BY_NAME:
      /* localeCompare */
      /* 
      const sortArray = [...state.recipes];
      if (action.payload === 'asc') {
        sortArray.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === 'des') {
        sortArray.sort((a, b) => b.name.localeCompare(a.name));
      } */

      let sortArray =
        action.payload === 'asc'
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (a.name < b.name) {
                return -1;
              } else return 0;
            })
          : /* forma desendente DES */
            state.recipes.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              else return 0;
            });

      return {
        ...state,
        recipesFilterdiet: sortArray,
      };
    case GET_ALL_DIET: {
      return {
        ...state,
        diets: action.payload,
      };
    }
    case ORDER_BY_SCORE: {
      let sortscore =
        action.payload === 'asc'
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              else return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return -1;
              if (a.healthScore < b.healthScore) return 1;
              else return 0;
            });

      return {
        ...state,
        recipesFilterdiet: sortscore,
      };
    }
    case PAGINADO: {
      return {
        ...state,
        page: action.payload,
      };
    }

    default:
      return state;
  }
};

export default Reducer;
