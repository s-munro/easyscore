import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setRequirementsFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  resetFilterValues,
} from "../actions/filtersActions";

import {
  requirementsValues,
  courseLevelValues,
  creditHoursValues,
  timeofDayValues,
} from "../data/FilterSelectsData.js";

import { FormControl, Button, InputGroup } from "react-bootstrap";
import FilterSelect from "./FilterSelect";

import "../screens/home/home.css";

const SearchForm = (props) => {
  const history = useHistory();
  const { formType } = props;

  useEffect(() => {
    props.resetFilterValues();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    const newUrl = `'keyword'=_'${props.filters.keyword.value}'&_'requirement'=_'${props.filters.requirements.value}'&_'level'=_'${props.filters.courseLevel.value}'&_'credit'=_'${props.filters.creditHours.value}'&_'timing'=_'${props.filters.timeofDay.value}'&_'next_sem'=_''&_'days'=_[]`;

    history.push(`/search/${newUrl}`);
  };

  if (formType !== "nav") {
    return (
      <div className="home-form-container w-100">
        <form onSubmit={handleSubmit}>
          <InputGroup className="inputAndBtnContainer">
            <FormControl
              className="inputContainer"
              value={props.filters.keyword.value}
              onChange={handleChange}
              placeholder="Search for keyword, i.e., 'Biology'"
              name="keyword"
              id="searchForm-nonNav"
            />
            <InputGroup.Append>
              <Button
                className="homeSrchBtn"
                type="submit"
                onSubmit={handleSubmit}
                id="basic-addon2"
              >
                <i className="fa fa-search"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <div className="filters-container w-100 d-flex justify-content-between align-items-center mt-3">
            <FilterSelect
              select_id={"courseLevel"}
              handleSelectChange={handleChange}
              selectValues={courseLevelValues}
            />
            <FilterSelect
              select_id={"creditHours"}
              handleSelectChange={handleChange}
              selectValues={creditHoursValues}
            />
            <FilterSelect
              select_id={"requirements"}
              handleSelectChange={handleChange}
              selectValues={requirementsValues}
            />
            <FilterSelect
              select_id={"timeofDay"}
              handleSelectChange={handleChange}
              selectValues={timeofDayValues}
            />
          </div>
        </form>
      </div>
    );
  }

  if (formType === "nav") {
    return (
      <div className="w-100">
        <form onSubmit={handleSubmit}>
          <InputGroup className="inputAndBtnContainer">
            <FormControl
              className="inputContainer"
              value={props.filters.keyword.value}
              onChange={handleChange}
              placeholder="Search for keyword, i.e., 'Biology'"
              name="keyword"
              id="searchForm-nav"
            />
            <InputGroup.Append>
              <Button
                className="homeSrchBtn"
                type="submit"
                onSubmit={handleSubmit}
                id="basic-addon2"
              >
                <i className="fa fa-search"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    courses: state.courses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps, {
  setKeywordFilterValue,
  setLevelFilterValue,
  setRequirementsFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  resetFilterValues,
})(SearchForm);
