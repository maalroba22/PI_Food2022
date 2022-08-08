import React from 'react';
import { paginado } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import './styles/Paginado.css';

export default function Paginado({ tamañoRecipe, tamañoPorpagina }) {
  const dispach = useDispatch();
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(tamañoRecipe / tamañoPorpagina); i++) {
    pageNumbers.push(i + 1);
  }

  function handelClickpage(numero) {
    dispach(paginado(numero));
  }
  return (
    <div className="container__paginado ">
      {pageNumbers.map((page) => {
        return (
          <button
            className="button__paginado"
            key={page}
            onClick={() => handelClickpage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
