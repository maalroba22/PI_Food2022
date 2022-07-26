import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getAllrecipes, getAllDiet } from '../../redux/actions/index';
import Filtros from './filters/Filtros';
import Card from './Card';
import Paginado from './Paginado';
import './styles/home.css';
import Details from '../recipeDetail/Details';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
    dispatch(getAllDiet());
  }, [dispatch]);

  const recipe = useSelector((state) => state.recipes);
  const allDiet = useSelector((state) => state.diets);
  const page = useSelector((state) => state.page);

  const [order, setOrder] = useState('');

  /*----------------- Paginado Nuevo----------------- */
  let currenRecipes = [];
  const tamañoRecipe = recipe.length;
  const tamañoPorpagina = 9;
  let indexFinal = tamañoPorpagina * page; // 9 pagina
  let inicial = indexFinal - tamañoPorpagina; // 9-9=0
  currenRecipes = recipe.slice(inicial, indexFinal);

  /* funcion para reiniciar el currenPage */

  return (
    <div>
      <Details />
      {/* ------------Filtros----------*/}
      <Filtros diet={allDiet} setorder={setOrder} />
      <hr />
      {/* --------------Paginado-------------- */}
      <Paginado tamañoRecipe={tamañoRecipe} tamañoPorpagina={tamañoPorpagina} />
      {/* ----------Card ----------*/}
      <div className="container__home">
        {currenRecipes?.map((recipe) => (
          <Card data={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
