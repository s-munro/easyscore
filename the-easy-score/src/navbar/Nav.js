import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
} from "../actions/filtersActions";

import SearchForm from "../components/SearchForm";
import Hidden from "@material-ui/core/Hidden";
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
<<<<<<< HEAD
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
=======
      <div>
        <Hidden smDown>
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
        </Hidden>
        {/************** MOBILE NAV 3 ******************/}
        <Hidden mdUp>
          <nav className="container">
            <div className="d-flex justify-content-between">
              <Link className="navBarThreeLogo" to="/">
                <div>
                  <b className="navBarTwoEasy">Easy</b>Score
                </div>
              </Link>
              <div className="d-flex">
                <Link className="" to="/about">
                  <div>About</div>
                </Link>
                <Link className="" to="/contact">
                  <div>Contact</div>
                </Link>
              </div>
            </div>
            <SearchForm formType={"nav"} />
          </nav>
        </Hidden>
      </div>
>>>>>>> 575e4c86740172ff932cbaa2afa74d571b733762
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
