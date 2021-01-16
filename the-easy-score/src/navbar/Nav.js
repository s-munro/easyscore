import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
    </nav>
  );
};

export default Nav;
