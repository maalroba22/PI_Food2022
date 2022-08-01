import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDiet, postAddRecipes } from '../../redux/actions/index';
import { Link, useHistory } from 'react-router-dom';

import food from '../../assets/img/food1.svg';
import defaul from '../../assets/img/default.png';
import './styles.css';

export default function Recipes() {
  const dispatch = useDispatch();
  const histori = useHistory();
  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getAllDiet());
  }, []);

  const [input, setInput] = useState({
    name: '',
    summary: '',
    healthScore: '',
    stepbyStep: '',
    image: '',
    diet: [],
    createIndb: true,
  });
  console.log(input);

  //usamos un state para el error
  const [errors, setErrors] = useState({});

  function inputHandleChangue(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  function rangeHhandleChangue(e) {
    setInput({
      ...input,
      healthScore: e.target.value,
    });
  }
  function selectHandleChangue(e) {
    setInput({
      ...input,
      diet: [...input.diet, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postAddRecipes(input));
    alert('receta Creada con Exito');
    setInput({
      name: '',
      summary: '',
      healthScore: 1,
      stepbyStep: '',
      image: '',
      diet: [],
    });
    histori.push('/home');
  }

  /* Validacion de informacion */

  return (
    <>
      <Link to="/home">
        <button>Volver</button>
        <h1>CREAR NUEVA RECETA</h1>
      </Link>
      <div className="container__forms">
        <div className="container__logo">
          <div>
            {!input.image.trim() ? (
              <img src={food} alt="no hay imagen" width="300px" />
            ) : (
              <img
                src={input.image}
                alt="no hay imagen"
                width="300px"
                height="270px"
              />
            )}
          </div>
        </div>
        <div className="forms__info">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className={errors.name && 'danger'}
                type="text"
                placeholder="Agregar un nombre de Receta:"
                onChange={inputHandleChangue}
                name="name"
                value={input.name}
              />
              {errors.name && <p className="danger">{errors.name}</p>}
            </div>

            <div>
              <textarea
                name="summary"
                cols="47"
                rows="3"
                value={input.summary}
                onChange={inputHandleChangue}
              />
            </div>
            <div>
              <span>{input.healthScore}</span>
              <input
                type="range"
                name="healthScore"
                min="1"
                max="100"
                value={input.healthScore}
                onChange={rangeHhandleChangue}
              />
            </div>
            <div>
              <input
                type="text"
                name="stepbyStep"
                placeholder="paso a paso"
                value={input.stepbyStep}
                onChange={inputHandleChangue}
              />
            </div>

            <div>
              <input
                type="text"
                name="image"
                placeholder="ruta imagen"
                value={input.image}
                onChange={inputHandleChangue}
              />
            </div>
            <div>
              <select name="diet" onChange={(e) => selectHandleChangue(e)}>
                {diets?.map((el) => (
                  <option value={el.name} key={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
              <ul>
                <li>{input.diet.map((el) => el + '')}</li>
              </ul>
            </div>
            <input className="boton" type="submit" value="Guardar" />
          </form>
        </div>
      </div>
    </>
  );
}

// creamos la funcion de validacion
export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = '! Recipe  is required';
  }

  return errors;
}
