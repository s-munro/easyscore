import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link>
          <li>Help</li>
        </Link>
        <Link>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
