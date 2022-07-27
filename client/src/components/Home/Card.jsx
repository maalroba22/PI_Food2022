import React from 'react';
import './styles/card.css';
import { Link } from 'react-router-dom';

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
          <ul>
            {data.diets.map((d) => (
              <li key={d.name}>{d.name}</li>
            ))}
          </ul>

          <button className="btn__detalle">Detalle</button>
        </div>
      </div>
    </div>
  );
}
