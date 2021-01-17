import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const Nav = (props) => {
  const { params } = useParams();

  console.log("params: ", params);

  if (props.navStyle === 1) {
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
  } else if (props.navStyle === 2) {
    return (
      <nav>
        <Link to="/">
          <div>EasyScore</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
      </nav>
    );
  } else {
    return (
      <nav>
        <div>Hello nav 3!!</div>
      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
  };
};

export default connect(mapStateToProps, {})(Nav);
