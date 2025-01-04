import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      </div>
      <ul className="nav-links">
      <li>
          <NavLink to="/"  >Home</NavLink>
        </li>
        <li>
          <NavLink to="/Form" >Form</NavLink>
        </li>
      </ul>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
