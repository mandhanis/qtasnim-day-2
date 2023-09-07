import React from "react";
import { Link } from "react-router-dom";
import LogoLogin from '../../style/logo-nav.svg';

const NavLink = () => {
  return (
    <nav>
      <ul className="navbar">
        <div>
          <li>
            <img src={LogoLogin} alt="LogoLogin" className='logonav' />
          </li>
        </div>
        <div className="nav mt-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-recipe">Add Recipe</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavLink;
