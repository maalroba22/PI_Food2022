import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { recipesDetils } from '../../redux/actions/index';

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(recipesDetils(id));
  }, [dispatch]);
  let data = useSelector((state) => state.details);
  console.log(data.map((el) => el));
  return (
    <div className="container__detalle">
      <div className="detalle_contenido">
        {data.map((el) => (
          <div className="detalle__img" key={el.id}>
            <p>{el.name}</p>
            <img src={el.image} alt=" Not Fount" />
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
    </div>
  );
}
