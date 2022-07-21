import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllrecipes } from '../../redux/actions/index';
import { useSelector, useState } from 'react-redux';
import Search from './Search';
import Card from './Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
  }, [dispatch]);
  const recipe = useSelector((state) => state.recipes);
  /* paginacion */
  const [paginaActual, setpaginaActual] = useState(1);
  const [recipepagina, setrecipepagina] = useState(9);
  const indexofLastRecipe = paginaActual * recipepagina;
  const indexOfFirsrecipe = indexofLastRecipe - recipepagina;

  return (
    <div>
      <Search />
      <div className="nuevo__recype">
        <Link to="/newrecipe">Crear Nueva Receta</Link>
      </div>
      <div className="filter__buscar">
        <div>
          {/* filtrar asendente y desendente */}
          <span> Orden </span>
          <select>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        {/* Buscar por Dietas */}
        <div>
          <span> Dietas </span>
          <select>
            <option value="default" def>
              Seleccionar...
            </option>
            <option value="1">diet 1</option>
            <option value="1">diet 2</option>
            <option value="1">diet 3</option>
            <option value="1">diet 4</option>
            <option value="1">diet 5</option>
          </select>
        </div>
        {/* Filtrar por nivel de Comida hhealscore */}
        <div>
          <span> Puntaje </span>
          <select>
            <option value="default" def>
              Seleccionar...
            </option>
            <option value="1">Mas Bajo</option>
            <option value="1">Mas Alto</option>
          </select>
        </div>
      </div>
      <hr />
      <Card recipe={recipe} />
    </div>
  );
};

export default Home;
