import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
} from "../actions/index";

import SearchForm from "../components/SearchForm";
// import { InputGroup, Button, FormControl } from "react-bootstrap";
import "../App.css";

const Nav = (props) => {
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "keyword") {
      props.setKeywordFilterValue(e.target.value);
    } else if (e.target.name === "courseLevel") {
      props.setLevelFilterValue(e.target.value);
    } else if (e.target.name === "creditHours") {
      props.setCreditsFilterValue(e.target.value);
    } else if (e.target.name === "timeofDay") {
      props.setTimeFilterValue(e.target.value);
    } else if (e.target.name === "requirements") {
      props.setRequirementsFilterValue(e.target.value);
    } else {
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click!!!");
    const newUrl = `'keyword'=_'${props.filters.keyword.value}'&_'requirement'=_'${props.filters.requirements.value}'&_'level'=_'${props.filters.courseLevel.value}'&_'credit'=_'${props.filters.creditHours.value}'&_'timing'=_'${props.filters.timeofDay.value}'&_'next_sem'=_''&_'days'=_[]`;

    history.push(`/search/${newUrl}`);
  };

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
          <div><b className="navBarTwoEasy">Easy</b>Score</div>
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
          <div><b className="navBarTwoEasy">Easy</b>Score</div>
        </Link>
        <Link className="navBarThreeTextLink" to="/about">
          <div>About</div>
        </Link>
        <Link className="navBarThreeTextLink" to="/contact">
          <div>Contact</div>
        </Link>
        <SearchForm formType={"nav"} />
        {/* <InputGroup>
          <FormControl
            value={props.filters.keyword.value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            placeholder="Search for keyword, i.e., 'Biology'"
            name="keyword"
          />
          <InputGroup.Append>
            <Button type="submit" onSubmit={handleSubmit} id="basic-addon2">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup> */}
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
