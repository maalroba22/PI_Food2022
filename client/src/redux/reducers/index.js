import {
  GET_ALL_RECIPE,
  ORDER_BY_NAME,
  GET_ALL_DIET,
} from '../actions/actions';
const initialState = {
  recipes: [],
  diets: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPE: {
      return {
        ...state,
        recipes: action.payload,
      };
    }
    case ORDER_BY_NAME:
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
        recipes: sortArray,
      };
    case GET_ALL_DIET: {
      return {
        ...state,
        diets: action.payload,
      };
    }

    default:
      return state;
  }
};

export default Reducer;
