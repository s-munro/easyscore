import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-ul">
       <div className="logoContainer"> 
        <Link to="/">
          <li className='homeLogo'>The Easy Score</li>
        </Link>
       </div> 
       <div className="homeNavLinks">
        <Link to="/help">
          <li>Help</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
       </div> 
      </ul>
    </nav>
  );
};

export default Nav;
