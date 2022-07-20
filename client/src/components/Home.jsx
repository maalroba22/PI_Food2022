import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllrecipes } from '../redux/actions/index';
import { useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllrecipes());
  }, [dispatch]);
  const recipe = useSelector((state) => state.recipes);

  return (
    <div className="cointainer">
      <div className="card">
        <h1>Listode de Recetas 2022</h1>
        {recipe?.map((recipes) => {
          return (
            <div className="card" key={recipes.id}>
              <div className="card_Header">
                <h2> {recipes.name}</h2>
                <img src={recipes.image} alt="imagen de la receta" />
              </div>
              <div>{recipes.imagen}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
