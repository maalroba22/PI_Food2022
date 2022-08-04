import React from 'react';
import Search from './Search';
import logonav from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div className="container__navbar">
      <div className="navbar__logo">
        <img src={logonav} alt="Logo Not Fount" width="50px" height="50px" />
      </div>

      <Search />
      <Link to="/addrecipe">
        <h3>Crear Nueva Receta</h3>
      </Link>
    </div>
  );
};

export default Navbar;
