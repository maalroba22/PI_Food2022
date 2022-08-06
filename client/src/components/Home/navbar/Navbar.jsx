import React from 'react';
import Search from './Search';
import logonav from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logonav} alt="Logo Not Fount" width="50px" height="50px" />
      </div>

      <div className="nav__search">
        <Search />
      </div>
      <div className="nav__buton">
        <Link to="/addrecipe" className="link">
          <h3 className="button">Crear Nueva Receta</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
