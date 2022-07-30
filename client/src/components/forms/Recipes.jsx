import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDiet } from '../../redux/actions/index';

import food from '../../assets/img/food1.svg';
import './styles.css';

export default function Recipes() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  console.log(diets);

  useEffect(() => {
    dispatch(getAllDiet());
  }, [dispatch]);

  return (
    <div className="container__forms">
      <div className="container__logo">
        <img src={food} alt="img Not Fount" width="300" />
      </div>
      <div className="forms__info">
        <form action="#">
          <div>
            <input
              type="text"
              placeholder="Agregar un nombre de Receta:"
              name="name"
            />
          </div>

          <div>
            <textarea name="summary" id="summary" cols="20" rows="3" />
          </div>
          <div>
            <samp>1</samp>
            <input type="range" name="score" id="score" min="1" max="100" />
            <samp>100</samp>
          </div>
          <div>
            <input type="text" name="pasoapaso" placeholder="paso a paso" />
          </div>
          <div>
            <input type="text" name="imagen" placeholder="ruta imagen" />
          </div>
          <div>
            <select name="diet" id="diet">
              <option value="q">ppp</option>
            </select>
          </div>
          <input type="button" value="Guardar" />
        </form>
      </div>
    </div>
  );
}
