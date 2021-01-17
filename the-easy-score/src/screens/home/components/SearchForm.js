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
} from "../../../actions/index";

import {
  requirementsValues,
  courseLevelValues,
  creditHoursValues,
  timeofDayValues,
} from "../../../data/FilterSelectsData";

import { FormControl, Button, InputGroup } from "react-bootstrap";
import FilterSelect from "../../../components/FilterSelect";

import "../home.css";

const SearchForm = (props, { push }) => {
  const history = useHistory();

  useEffect(() => {
    props.resetFilterValues();
    // const placeholderValues = [
    //   "Search for keyword, i.e., 'Biology'",
    //   "Search for keyword, i.e., 'Chem 117",
    // ];
    // let i = 0;
    // setInterval(() => {
    //   document.getElementById("searchForm").placeholder = placeholderValues[i];
    //   i = (i + 1) % placeholderValues.length;
    // }, 2000);
  }, []);

  const handleChange = (e) => {
    console.log(e);

    if (e.target.name === "keyword") {
      console.log("keyword");
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
      console.log("nope");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUrl = `'keyword'=_'${props.filters.keyword.value}'&_'requirement'=_'${props.filters.requirements.value}'&_'level'=_'${props.filters.courseLevel.value}'&_'credit'=_'${props.filters.creditHours.value}'&_'timing'=_'${props.filters.timeofDay.value}'&_'next_sem'=_''&_'days'=_[]`;

    history.push(`/search/${newUrl}`);
  };

  return (
    <div className="home-form-container w-100">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            value={props.filters.keyword.value}
            onChange={handleChange}
            placeholder="Search for keyword, i.e., 'Biology'"
            name="keyword"
            id="searchForm"
          />
          <InputGroup.Append>
            <Button type="submit" onSubmit={handleSubmit} id="basic-addon2">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <div className="filters-container w-100 d-flex justify-content-between align-items-center mt-3">
          <FilterSelect
            className="homePageFilter"
            select_id={"courseLevel"}
            handleSelectChange={handleChange}
            selectValues={courseLevelValues}
          />
          <FilterSelect
            className="homePageFilter"
            select_id={"creditHours"}
            handleSelectChange={handleChange}
            selectValues={creditHoursValues}
          />
          <FilterSelect
            className="homePageFilter"
            select_id={"requirements"}
            handleSelectChange={handleChange}
            selectValues={requirementsValues}
          />
          <FilterSelect
            className="homePageFilter"
            select_id={"timeofDay"}
            handleSelectChange={handleChange}
            selectValues={timeofDayValues}
          />
        </div>
      </form>
    </div>
  );
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
