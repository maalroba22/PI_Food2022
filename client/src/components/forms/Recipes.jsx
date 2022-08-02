import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDiet, postAddRecipes } from '../../redux/actions/index';
import { Link, useHistory } from 'react-router-dom';

import food from '../../assets/img/food1.svg';

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
    stepbyStep: [],
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

  function handleStep(e) {
    setInput({
      ...input,
      stepbyStep: [e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postAddRecipes(input));
    // alert('receta Creada con Exito');
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
  function handleDelete(el) {
    console.log(el);
    setInput({
      ...input,
      diet: input.diet.filter((d) => d !== el),
    });
  }

  return (
    <>
      <Link to="/home">
        <button>Volver</button>
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
          <h1>CREAR NUEVA RECETA</h1>
          <form onSubmit={handleSubmit}>
            <div className="input__text">
              <input
                className={errors.name && 'danger'}
                type="text"
                placeholder="Agregar un nombre de Receta:"
                onChange={inputHandleChangue}
                name="name"
                value={input.name}
              />
            </div>
            {errors.name && <p className="danger">{errors.name}</p>}

            <div>
              <textarea
                name="summary"
                cols="47"
                rows="3"
                value={input.summary}
                onChange={inputHandleChangue}
                placeholder="Ingrese una Description de la Receta"
              />
            </div>
            {errors.summary && <p className="danger">{errors.summary}</p>}
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

            <div className="input__text">
              <textarea
                name="stepbyStep"
                cols="47"
                rows="3"
                value={input.stepbyStep}
                placeholder="Ingrese los pasos par crear la receta"
                onChange={handleStep}
              />
            </div>

            <div className="input__text">
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
                  <option value={el.name}>{el.name}</option>
                ))}
              </select>
              <ul>
                {input.diet.map((el) => (
                  <div className="dev__diet" key={el.id}>
                    <li>{el}</li>
                    {
                      <span
                        key={el.id}
                        className="buton__x"
                        onClick={() => handleDelete(el)}
                      >
                        x
                      </span>
                    }
                  </div>
                ))}
              </ul>
            </div>

            {!input.name || !input.summary ? (
              <input
                type="submit"
                value=" Guardar Recipes"
                className="boton-inactivo"
                disabled
              />
            ) : (
              <input type="submit" value=" Guardar Recipes" className="boton" />
            )}
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
  if (!input.summary) {
    errors.summary = '! summary  is required';
  }

  return errors;
}
