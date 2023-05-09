import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav>
      <h2>Math Magicians</h2>
      <div className="navItemsContainer">
        <button
          type="button"
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? 'close' : 'open'}
        </button>
        <Link to="/" className="navItems">Home</Link>
        <NavLink to="/Calculator" className="navItems">Calculator</NavLink>
        <NavLink to="/Quotes" className="navItems">Quotes</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
