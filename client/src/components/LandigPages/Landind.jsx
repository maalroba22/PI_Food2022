import React from 'react';
import chef from './img/chef1.png';
import { Link } from 'react-router-dom';
import './css/order.css';

export default function Landing() {
  return (
    <>
      <div className="team">
        <Link to="/home">
          <h1>
            App<span>Recipes</span>
          </h1>
        </Link>
        <div className="team_box">
          <div className="profile">
            <img src={chef} alt="imagen" />

            <div className="info">
              <h2 className="name">Pi. Manuel Romero</h2>
              <p className="bio">Diseño de App de Recetas de Comidas 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
