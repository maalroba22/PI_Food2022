import React from 'react';

export default function Card({ recipe }) {
  return (
    <div className="container">
      {recipe?.map((el) => {
        return (
          <div key={el.id} className="card">
            <div className="card__neme">
              <h2>{el.name}</h2>
            </div>
            <div className="card__body">
              <img src={el.image} alt="img Not fount" />
              <h5>{el.diet}</h5>
            </div>
            <div className="card__footer">
              <button>Detalle</button>
              <p>favorito</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
