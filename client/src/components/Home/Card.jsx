import React from 'react';
import './styles/card.css';
import { Link } from 'react-router-dom';
import defaul from '../../assets/img/juse.jpg';

export default function Card({ /* id, name, image, diets */ data }) {
  return (
    <div className="menu__card">
      {/* <div key={data.id} className="card">
        <div className="card__img">
          <img
            src={data.image}
            alt="Imagen de la Receta No Fount"
            onError={(e) => {
              e.target.src = defaul;
            }}
          />
        </div>
        <div className="card__info">
          <h5>{data.name}</h5>
          <div className="info__diet">
            <ul>
              {data.diets.map((d) => (
                <li className="li__color" key={d.name}>
                  {d.name == 'dairy free' ? (
                    <img src={dayrifree} alt="vegetarian" />
                  ) : d.name == 'vegan' ? (
                    <img src={vegan} alt="vegetarian" />
                  ) : d.name == 'gluten free' ? (
                    <img src={glutenfree} alt="vegetarian" />
                  ) : d.name == 'lacto ovo vegetarian' ? (
                    <img src={laptoovo} alt="vegetarian" />
                  ) : (
                    <img src={vegetarian} alt="vegetarian" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Link to={`/details/${data.id}`}>
            <button className="btn__detalle">Detalle</button>
          </Link>
        </div>
      </div> */}
      <div className="menu__image">
        <img
          src={data.image}
          alt="Imagen de la Receta No Fount"
          onError={(e) => {
            e.target.src = defaul;
          }}
        />
      </div>
      <div className="menu__info">
        <h6>{data.name}</h6>

        {/*--------- secciones de Dietas --------*/}
        <div className="diet__info">
          {data.diets.map((el) => (
            <p key={el.name}>{el.name}</p>
          ))}
        </div>

        <Link to={`/details/${data.id}`} className="menu__btn">
          Detalle
        </Link>
      </div>
    </div>
  );
}
