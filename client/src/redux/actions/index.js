import axios from 'axios';
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
} from './actions';
/* const api = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:3001',
}); */

/* --------------lISTAR TODAS LAS RECIPES-------------- */
export const getAllrecipes = () => {
  return async function (dispatch) {
    await axios.get('/recipes/all').then((prueb) => {
      return dispatch({ type: GET_ALL_RECIPE, payload: prueb.data });
    });
  };
};

/*  ADD LAS RECIPES A MI DATABADSE */
export const postAddRecipes = (payload) => {
  return async function (dispatch) {
    const data = await axios.post('/recipes', payload);
    console.log(data);
    return data;
  };
};

/* ---------------LISTAR TODAS LAS  DIETAS--------------- */

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

/* BUSCAR LAS RECIPES POR NOMBRE */
export const getNamerecipes = (name) => {
  return async function (dispatch) {
    try {
      let json = await axios.get('recipes/all?name=' + name);
      return dispatch({
        type: SEARCH_NAME_RECYPE,
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

/* --------------BUSCAR RECIPE POR ID-------------- */
export const recipesDetils = (id) => {
  return async function (dispatch) {
    let json = await axios.get('recipes/' + id);
    return dispatch({
      type: RECIPE_DETAILS,
      payload: json.data,
    });
  };
};

/*------------------- FITET BY DIETS------------------- */

export function filterBydiet(diet) {
  return {
    type: FILTER_BY_DIET,
    payload: diet,
  };
}

/*   ----------------ORDENAR a-z,z-a-----------------*/
export function filterByorder(order) {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
}

/* ----------------ORDER POR PUNTUACION SCORE---------------- */
export function filterByscore(score) {
  return {
    type: ORDER_BY_SCORE,
    payload: score,
  };
}

/* ----------------------PAGINADO---------------------- */

export function paginado(numero) {
  return (dispatch) => {
    dispatch({ type: PAGINADO, payload: numero });
  };
}
