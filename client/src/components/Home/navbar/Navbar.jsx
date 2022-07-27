import React from 'react';
import Search from './Search';
import logonav from '../../../assets/img/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="container__navbar">
      <div className="navbar__logo">
        <img src={logonav} alt="Logo Not Fount" width="50px" height="50px" />
      </div>

      <Search />
    </div>
  );
};

export default Navbar;
