import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { getAllrecipes, getAllDiet } from '../../redux/actions/index';
import Filtros from './filters/Filtros';
import Card from './Card';
import Paginado from './Paginado';
import './styles/home.css';
import Navbar from './navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
    dispatch(getAllDiet());
  }, [dispatch]);

  const recipe = useSelector((state) => state.recipes);
  const allDiet = useSelector((state) => state.diets);
  const page = useSelector((state) => state.page);

  const [order, setOrder] = useState(''); //para guardar los ordenamientos
  const [socre, setScore] = useState('');

  /* funcion para Reiniciar los filtros */
  function handleClick() {
    dispatch(getAllrecipes());
  }
  /*----------------- Paginado Nuevo----------------- */
  let currenRecipes = [];
  const tamañoRecipe = recipe.length;
  const tamañoPorpagina = 9;
  let indexFinal = tamañoPorpagina * page; // 9 pagina
  let inicial = indexFinal - tamañoPorpagina; // 9-9=0
  currenRecipes = recipe.slice(inicial, indexFinal);

  return (
    <div>
      {/* -------------------Navbar------------------- */}
      <Navbar />

      {/* ------------Filtros----------*/}
      <Filtros
        diet={allDiet}
        setorder={setOrder}
        setscore={setScore}
        onclick={handleClick}
      />
      <hr />
      {/* --------------Paginado-------------- */}
      <Paginado tamañoRecipe={tamañoRecipe} tamañoPorpagina={tamañoPorpagina} />

      <Link to="/addrecipe">
        <h3>Crear Nueva Receta</h3>
      </Link>

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
