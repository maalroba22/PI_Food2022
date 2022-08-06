import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { recipesDetils } from '../../redux/actions/index';
import defaul from '../../assets/img/juse.jpg';
import './detalle.css';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(recipesDetils(id));
  }, [dispatch]);
  let data = useSelector((state) => state.details);
  console.log(data.map((el) => el));
  return (
    /* <div className="container__detalle">
      <div className="detalle_contenido">
        {data.map((el) => (
          <div className="detalle__img" key={el.id}>
            <p>{el.name}</p>
            <img
              src={el.image}
              alt=" Not Fount"
              onError={(e) => {
                e.target.src = defaul;
              }}
            />
            <ul>
              {el.diets.map((d) => (
                <li key={d.name}>{d.name}</li>
              ))}
            </ul>
            <p>{el.createIndb}</p>
            <p>{el.healthScore}</p>
            <p dangerouslySetInnerHTML={{ __html: el?.stepbyStep }}></p>

            <p dangerouslySetInnerHTML={{ __html: el?.summary }}></p>
          </div>
        ))}
      </div>
    </div> */
    <div>
      {data.map((el) => (
        <div className="detalle" key={el.id}>
          <div className="detalle__left">
            <div className="detalle_name">
              <h1>{el.name}</h1>
              <img
                src={el.image}
                alt=" Not Fount"
                onError={(e) => {
                  e.target.src = defaul;
                }}
              />
              <span>
                <p>Score</p>
              </span>
              <div className="d__raange">
                <input type="range" value={el.healthScore} />
                <span>{el.healthScore}</span>
              </div>
              <p>Details</p>
              <div className="d__diets">
                {el.diets.map((d) => (
                  <div className="d__parrafo">
                    <p>{d.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* contenedor derecho */}
          <div className="detalle__right">
            <div className="d__desc">
              <h1>summary</h1>
              <p dangerouslySetInnerHTML={{ __html: el?.summary }}></p>
            </div>
            <h1>stepbyStep</h1>
            <div className="d__pasos">
              <p dangerouslySetInnerHTML={{ __html: el?.stepbyStep }}></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
