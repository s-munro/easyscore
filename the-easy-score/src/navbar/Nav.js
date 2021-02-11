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

import { setShowModal } from "../actions/index";

import SearchForm from "../components/SearchForm";
import Hidden from "@material-ui/core/Hidden";
import FilterListIcon from "@material-ui/icons/FilterList";

import FiltersModal from "../components/FiltersModal";

import "./Nav.css";

const Nav = (props) => {
  const handleClickOpen = () => {
    props.setShowModal(true);
  };

  if (props.navStyle === 1) {
    return (
      /************** NAV 1 ******************/
      <nav className="row w-100 mt-2">
        <div className="col-xl 10 col-lg-10 col-md-10 col-sm-9 col-6" />
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-3 p-0 d-flex justify-content-end">
          <Link to="/about">
            <div>About</div>
          </Link>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-3">
          <Link to="/contact">
            <div>Contact</div>
          </Link>
        </div>
      </nav>
    );
  } else if (props.navStyle === 2) {
    return (
      /**************** NAV 2 ******************/
      <nav className="row w-100 mt-2 d-flex align-items-center">
        <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-6">
          <Link className="mobile-nav-bar-3-logo" to="/">
            <b className="nav-bar-3-easy-text">Easy</b>Score
          </Link>
        </div>

        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-3 p-0 d-flex justify-content-end">
          <Link className="nav-bar-2-text-link" to="/about">
            About
          </Link>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3">
          <Link className="nav-bar-2-text-link" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <div className="row w-100 nav-3-top-margin d-flex align-items-center">
        <Hidden smDown>
          <div className="col-12">
            <nav className="row d-flex align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-3">
                <Link className="mobile-nav-bar-3-logo" to="/">
                  <b className="mobile-nav-bar-3-easy-text">Easy</b>Score
                </Link>
              </div>
              <div className="d-flex align-items-center col-xl-8 col-lg-8 col-md-6">
                <SearchForm formType={"nav"} />
                <div className="filter-icon-handler ml-2">
                  <FilterListIcon
                    onClick={handleClickOpen}
                    className="modal-icon margin-left"
                  />
                </div>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-1 d-flex justify-content-end">
                <Link className="" to="/about">
                  About
                </Link>
              </div>
              <div className="col-xl-1 col-lg-1 col-md-2 d-flex justify-content-end">
                <Link className="" to="/contact">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </Hidden>
        {/************** MOBILE NAV 3 ******************/}
        <Hidden mdUp>
          <div className="col-12 w-100">
            <nav className="row d-flex align-items-center">
              <div className="col-md-8 col-sm-8 col-6">
                <Link className="mobile-nav-bar-3-logo" to="/">
                  <b className="mobile-nav-bar-3-easy-text">Easy</b>Score
                </Link>
              </div>
              <div className="col-md-2 col-sm-2 col-4 d-flex justify-content-center mobile-450-margin-right-2">
                <Link className="" to="/about">
                  About
                </Link>
              </div>
              <div className="col-md-2 col-sm-2 col-2 d-flex justify-content-end ">
                <Link className="" to="/contact">
                  Contact
                </Link>
              </div>
              <div className="col-md-12 col-sm-12 col-12 d-flex align-items-center mobile-nav-3-padding-top">
                <SearchForm formType={"nav"} />
                <FilterListIcon
                  onClick={handleClickOpen}
                  className="modal-icon margin-left"
                />
              </div>
            </nav>
          </div>
        </Hidden>
        <FiltersModal />
      </div>
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
  setShowModal,
})(Nav);
