import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllrecipes, getAllDiet } from '../../redux/actions/index';
import Card from './Card';
import Paginado from './Paginado';
import './styles/home.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
    dispatch(getAllDiet());
  }, [dispatch]);

  const recipe = useSelector((state) => state.recipes);
  const allDiet = useSelector((state) => state.diets);
  const page = useSelector((state) => state.page);

  /*----------------- Paginado Nuevo----------------- */
  let currenRecipes = [];
  const tamañoRecipe = recipe.length;
  const tamañoPorpagina = 9;
  let indexFinal = tamañoPorpagina * page; // 9 pagina
  let inicial = indexFinal - tamañoPorpagina; // 9-9=0
  currenRecipes = recipe.slice(inicial, indexFinal);
  console.log(recipe[107]);
  return (
    <div>
      {/* Paginado */}
      <Paginado tamañoRecipe={tamañoRecipe} tamañoPorpagina={tamañoPorpagina} />
      {/* Card */}

      {currenRecipes?.map((recipe) => (
        <Card data={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default Home;
