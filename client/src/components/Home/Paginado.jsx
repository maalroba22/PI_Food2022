import React from 'react';

export default function Paginado({ recipepage, recipe, paginado }) {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(recipe / recipepage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      <ul className="page__list">
        {pageNumbers?.map((number) => (
          <li key={number} className="page__number">
            <a onClick={() => paginado(number)}>{number}</a>;
          </li>
        ))}
      </ul>
    </nav>
  );
}
