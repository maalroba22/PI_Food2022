import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamerecipes } from '../../../redux/actions/index';
export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChangue(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
    dispatch(getNamerecipes(name));
  }
  return (
    <div>
      <div className="container__shear">
        <div>
          <input
            onChange={handleInputChangue}
            type="text"
            placeholder="Ingrese el Nombre de una Recype"
          />
        </div>
      </div>
    </div>
  );
}
