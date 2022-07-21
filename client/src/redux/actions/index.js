import axios from 'axios';
import { GET_ALL_RECIPE, SHEART_NAME_RECYPE } from './actions';

/* Traemos todas las Recetas */

export const getAllrecipes = () => {
  return async function (dispatch) {
    await axios.get('/recipes/all').then((prueb) => {
      console.log(prueb);
      return dispatch({ type: GET_ALL_RECIPE, payload: prueb.data });
    });
  };
};

export const pruebas = () => {
  return console.log('food');
};

/* Buscar name */
export function searchRecipe(name) {
  return (dispatch) => {
    dispatch({
      type: SHEART_NAME_RECYPE,
      payload: name,
    });
  };
}
