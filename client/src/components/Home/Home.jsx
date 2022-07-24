import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
  getAllrecipes,
  filterByorder,
  getAllDiet,
} from '../../redux/actions/index';
import Search from './Search';
import Card from './Card';
import { Link } from 'react-router-dom';
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

  const [order, setorder] = useState('');
  /* paginacion */
  const [currenpage, setcurrenpage] = useState(1);
  const [recipeperpage, setrecipeperpage] = useState(9);
  const indexofLastRecipe = currenpage * recipeperpage;
  const indexOfFirsrecipe = indexofLastRecipe - recipeperpage;
  const currenRecipes = recipe.slice(indexOfFirsrecipe, indexofLastRecipe);

  /* modifico el estado de currenpage */
  const paginado = (pageNumber) => {
    setcurrenpage(pageNumber);
  };

  /* ordenar */
  const healdorder = (e) => {};

  /* dipach  mi filtro */
  const handleorder = (e) => {
    e.preventDefault();
    dispatch(filterByorder(e.target.value));
    setcurrenpage(1);
    setorder(`ordenado ${e.target.value}`);
  };

  return (
    <div>
      <Search />
      <div className="nuevo__recype">
        <Link to="/newrecipe">Crear Nueva Receta</Link>
      </div>
      <div className="filtros">
        {/* ordenar de a-z */}
        <select onChange={(e) => handleorder(e)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        {/* filtar por dietas */}
        <select>
          <option value="default" default>
            seleccione..
          </option>
          {allDiet?.map((e) => (
            <option value={e.name}>{e.name}</option>
          ))}
        </select>
        {/* Filtrar por nivel de Comida hhealscore */}
        <select onChange={(e) => healdorder(e)}>
          <option value="default" default>
            Seleccionar...
          </option>
          <option value="1">Mas Bajo</option>
          <option value="2">Mas Alto</option>
        </select>
      </div>

      {/* renderizo componente paginado */}
      {
        <Paginado
          recipepage={recipeperpage}
          recipe={recipe.length}
          paginado={paginado}
        />
      }

      <hr />
      <div className="container__home">
        {/* mapeo allrecipe */}
        {currenRecipes?.map((recipe) => {
          return (
            <Card
              /*  key={el.id}
            name={el.name}
            image={el.image}
            diet={el.diets[0].name} */
              data={recipe}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
