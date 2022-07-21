import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllrecipes } from '../../redux/actions/index';
import { useSelector } from 'react-redux';
import Search from './Search';
import Card from './Card';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
  }, [dispatch]);
  const recipe = useSelector((state) => state.recipes);

  return (
    <div>
      <Search />
      <div className="filter__buscar">
        <div>
          {/* filtrar asendente y desendente */}
          <select>
            <option value="asc">Ascendente</option>
            <option value="desc">Desendente</option>
          </select>
        </div>
        {/* Buscar por Dietas */}
        <div>
          <select>
            <option value="1">diet 1</option>
            <option value="1">diet 2</option>
            <option value="1">diet 3</option>
            <option value="1">diet 4</option>
            <option value="1">diet 5</option>
          </select>
        </div>
        {/* Filtrar por nivel de Comida hhealscore */}
        <div>
          <select>
            <option value="1">healscore 1</option>
            <option value="1">healscore 2</option>
            <option value="1">healscore 3</option>
            <option value="1">healscore 4</option>
            <option value="1">healscore 5</option>
          </select>
        </div>
      </div>
      <Card recipe={recipe} />
    </div>
  );
};

export default Home;
