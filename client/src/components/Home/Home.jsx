import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getAllrecipes } from '../../redux/actions/index';
import Search from './Search';
import Card from './Card';
import { Link } from 'react-router-dom';
import Paginado from './Paginado';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
  }, [dispatch]);
  const recipe = useSelector((state) => state.recipes);
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

  return (
    <div>
      <Search />
      <div className="nuevo__recype">
        <Link to="/newrecipe">Crear Nueva Receta</Link>
      </div>
      <div className="filtros">
        {/* ordenar de a-z */}
        <select>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        {/* filtar por dietas */}
        <select>
          <option value="default" default>
            seleccione..
          </option>
          <option value="d1">diet 1</option>
          <option value="d2">diet 2</option>
          <option value="d3">diet 3</option>
        </select>
        {/* Filtrar por nivel de Comida hhealscore */}
        <select>
          <option value="default" default>
            Seleccionar...
          </option>
          <option value="mb">Mas Bajo</option>
          <option value="ma">Mas Alto</option>
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
      {/* mapeo allrecipe */}
      {currenRecipes?.map((el) => {
        return (
          <Link to={'/Home' + el.id}>
            <Card key={el.id} name={el.name} image={el.image} diet={el.diet} />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
