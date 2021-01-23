import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
} from "../actions/index";

import SearchForm from "../components/SearchForm";
import "../App.css";

const Nav = (props) => {
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
      <nav className="nav-2">
        <Link className="navBarTwoLogo" to="/">
          <div>
            <b className="navBarTwoEasy">Easy</b>Score
          </div>
        </Link>
        <Link className="navBarTextLink" to="/about">
          <div>About</div>
        </Link>
        <Link className="navBarTextLink" to="/contact">
          <div>Contact</div>
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className="nav-3">
        <Link className="navBarThreeLogo" to="/">
          <div>
            <b className="navBarTwoEasy">Easy</b>Score
          </div>
        </Link>
        <Link className="navBarThreeTextLink" to="/about">
          <div>About</div>
        </Link>
        <Link className="navBarThreeTextLink" to="/contact">
          <div>Contact</div>
        </Link>
        <SearchForm formType={"nav"} />
      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
    filters: state.filters,
  };
};

export default connect(mapStateToProps, {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
})(Nav);
