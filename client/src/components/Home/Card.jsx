import React from 'react';
import './styles/card.css';

export default function Card({ /* id, name, image, diets */ data }) {
  return (
    <div className="container">
      <div key={data.id} className="card">
        <div className="card__img">
          <img src={data.image} alt="img Not fount" />
        </div>
        <div className="card__header">
          <h5>{data.name}</h5>
        </div>

        <div className="card__footer">
          <p>{data.diets[0]?.name}</p>
          <button className="btn__detalle">Detalle</button>
        </div>
      </div>
    </div>
  );
}
