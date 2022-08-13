import React from 'react';
import img404 from '../../assets/img/rcipe404.png';

export default function Error404() {
  return (
    <div>
      <h1>ERROR 404</h1>
      <img src={img404} alt="Error" width="200px" />
      <h2>RECIPE NOT FOUND</h2>
    </div>
  );
}
