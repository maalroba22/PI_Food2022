import React from 'react';
import chef from './img/chef1.png';
import { Link } from 'react-router-dom';
/* import './css/order.css'; */
import './landin.css';
import chefs from '../../assets/img/chef1.png';
import glasses from '../../assets/img/glasses.png';
import vector1 from '../../assets/img/Vector1.png';
import vector2 from '../../assets/img/Vector2.png';

export default function Landing() {
  return (
    <>
      {/*  <div className="team">
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
      </div> */}
      <div className="intro">
        <div className="i__left">
          <div className="i__name">
            <h1> Pi Spinacular 2022</h1>
            <span>Manuel Romero</span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium esse voluptate qui iste exercitationem nisi laudantium
              corporis aperiam. Suscipit a eum repellendus voluptate ea,
              temporibus omnis placeat ut asperiores perferendis!
            </span>

            <Link to="/home">
              <button className="button i__button">Entrar</button>
            </Link>
          </div>
        </div>
        <div className="i__right">
          <img src={vector1} alt="vector 1" />
          <img src={vector2} alt="vector 1" />
          <img src={chefs} alt="vector 1" /* width="330px" height="380px" */ />
          <div
            className="blur"
            style={{ background: 'rgb(238 210 255)' }}
          ></div>
          <div
            className="blur"
            style={{
              background: '#C1F5FF',
              top: '17rem',
              width: '21rem',
              height: '11rem',
              left: '-9rem',
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
