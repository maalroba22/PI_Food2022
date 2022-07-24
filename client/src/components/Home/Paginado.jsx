import React from 'react';

export default function Paginado({ recipepage, recipe, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(recipe / recipepage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      {pageNumbers?.map((number) => (
        <button key={number.id} className="page__number">
          <a onClick={() => paginado(number)}>{number}</a>
        </button>
      ))}
    </nav>
  );
}
