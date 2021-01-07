import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SecondaryNav = () => {
  return (
    <nav className="nav-bar-2">
      <div className="logoContainer">
        <Link to="/">
          <div className="homeLogo">The Easy Score</div>
        </Link>
      </div>

      <input type="text" name="keyword" />
    </nav>
  );
};

export default SecondaryNav;
