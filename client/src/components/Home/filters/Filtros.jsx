import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByorder } from '../../../redux/actions';

export default function Filtros({ diet, setorder }) {
  const dispatch = useDispatch();

  function handleOderByname(e) {
    dispatch(filterByorder(e.target.value));
    setorder(e.target.value);
  }
  return (
    <div className="container__filtros">
      {/* ------------Ordenar de a-z z-a------------ */}
      <select onChange={(e) => handleOderByname(e)} name="orderaz" id="orderaz">
        <option value="asc">A-z</option>
        <option value="des">Z-A</option>
      </select>
      {/*-------------All dietas al select------------ */}
      <select name="diet" id="diet">
        <option value="default" defaultValue>
          Seleccione tipo de dieta....
        </option>
        {diet?.map((el) => (
          <option vakue={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>

      {/* Filtrar por puntaje Score */}
      <select name="score" id="score">
        <option value="desc">Mas Alto..</option>
        <option value="asc">Mas Bajo..</option>
      </select>
    </div>
  );
}
