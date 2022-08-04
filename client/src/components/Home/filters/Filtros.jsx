import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllrecipes } from '../../../redux/actions';
import {
  filterByorder,
  filterByscore,
  filterBydiet,
} from '../../../redux/actions';

export default function Filtros({ diet, setorder, setscore /* onclick */ }) {
  const dispatch = useDispatch();

  function handleOderByname(e) {
    dispatch(filterByorder(e.target.value));
    setorder(e.target.value);
  }
  /* ordenar  por Score Puntuacion */

  function handleOrderScore(e) {
    dispatch(filterByscore(e.target.value));
    setscore(e.target.value);
  }

  function handleFilterDiets(e) {
    dispatch(filterBydiet(e.target.value));
  }

  /* corregir handle reset filter */
  function handleClick() {
    dispatch(getAllrecipes());
  }

  return (
    <div className="container__filtros">
      {/* ------------Ordenar de a-z z-a------------ */}
      <select onChange={handleOderByname} name="orderaz" id="orderaz">
        <option value="asc">A-z</option>
        <option value="des">Z-A</option>
      </select>
      {/*-------------All dietas al select------------ */}
      <select onClick={handleFilterDiets} name="diet" id="diet">
        <option value="defauls" disabled>
          seleccione..
        </option>
        <option value="all" defaultValue>
          All
        </option>
        {diet?.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>

      {/* Filtrar por puntaje Score */}
      <select onChange={handleOrderScore} name="score" id="score">
        <option value="asc">Mas Bajo..</option>
        <option value="des">Mas Alto..</option>
      </select>

      <button onClick={/* onclick */ handleClick}>Reset Filter</button>
    </div>
  );
}
