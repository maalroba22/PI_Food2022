import React from 'react';
import './styles/card.css';

export default function Card({ /* id, name, image, diet */ data }) {
  return (
    <div className="container">
      <div key={data.id} className="card">
        <div className="card__header">
          <h4>{data.name}</h4>
        </div>

        <div className="card__img">
          <img src={data.image} alt="img Not fount" />
        </div>
        <div className="card__derecha">
          <p>{data.diets[0].name}</p>
          <div className="card__footer">
            <button>Detalle</button>
            <p>favorito</p>
          </div>
        </div>
      </div>
    </div>
  );
}
