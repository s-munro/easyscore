import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const { params } = useParams();

  console.log("params: ", params);
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
