import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link
      to="/"
    >
      Home
    </Link>
    <NavLink
      to="/Calculator"
    >
      Calculator
    </NavLink>

    <NavLink
      to="/Quotes"
    >
      Quotes
    </NavLink>
  </nav>
);

export default NavBar;
