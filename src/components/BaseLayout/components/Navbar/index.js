// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <NavLink
      activeClassName="selected"
      className="nav-link"
      exact
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="selected"
      className="nav-link"
      to="/contact"
    >
      Contact
    </NavLink>
  </nav>
);

export default Navbar;
