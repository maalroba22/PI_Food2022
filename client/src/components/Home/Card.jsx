import React from 'react';

export default function Card({ id, name, image, diet }) {
  return (
    <div className="container">
      <div key={id} className="card">
        <div className="card__neme">
          <h2>{name}</h2>
        </div>
        <div className="card__body">
          <img src={image} alt="img Not fount" />
          <h5>{diet}</h5>
        </div>
        <div className="card__footer">
          <button>Detalle</button>
          <p>favorito</p>
        </div>
      </div>
    </div>
  );
}
