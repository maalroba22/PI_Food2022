import axios from 'axios';
import { GET_ALL_RECIPE, ORDER_BY_NAME, GET_ALL_DIET } from './actions';

/* Traemos todas las Recetas */

export const getAllrecipes = () => {
  return async function (dispatch) {
    await axios.get('/recipes/all').then((prueb) => {
      return dispatch({ type: GET_ALL_RECIPE, payload: prueb.data });
    });
  };
}; /* LISTAR TODAS LAS  DIETAS */

export const getAllDiet = () => {
  return async function (dispatch) {
    await axios.get('/diet').then((dietas) => {
      return dispatch({
        type: GET_ALL_DIET,
        payload: dietas.data,
      });
    });
  };
};

/*   Filtrar por orden a-z,z-a*/
export function filterByorder(order) {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
}
