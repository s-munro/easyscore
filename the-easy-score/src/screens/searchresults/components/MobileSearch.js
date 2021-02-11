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
} from "../../../actions/filtersActions";

import { FormControl, Button, InputGroup } from "react-bootstrap";

import "../results.css";

const MobileSearchForm = (props) => {
  const history = useHistory();

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

  return (
    <div className="searchPage-form-container container-fluid no-gutters w-100">
      <form onSubmit={handleSubmit}>
        <div className="row w-100 d-flex justify-content-center ml-0 mr-0">
          <InputGroup className="inputAndBtnContainer col w-100 d-flex pr-0">
            <div className="col d-flex justify-content-center w-100 pr-0 pl-0">
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
                  name="submit-search"
                  className="searchPageSrchBtn"
                  type="submit"
                  onSubmit={handleSubmit}
                  id="basic-addon2"
                >
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup.Append>
            </div>
          </InputGroup>
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
})(MobileSearchForm);
