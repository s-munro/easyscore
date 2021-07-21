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
} from "../../../store/actions/filtersActions";

import { FormControl, Button, InputGroup } from "react-bootstrap";
import "../home.css";

const MobileSearchForm = (props) => {
  const history = useHistory();
  const { formType } = props;

  useEffect(() => {
    props.resetFilterValues();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    switch (e.target.name) {
      case "keyword":
        return props.setKeywordFilterValue(e.target.value);
      case "courseLevel":
        return props.setLevelFilterValue(e.target.value);
      case "creditHours":
        return props.setCreditsFilterValue(e.target.value);
      case "timeofDay":
        return props.setTimeFilterValue(e.target.value);
      case "requirements":
        return props.setRequirementsFilterValue(e.target.value);
      default:
        return null;
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
                name="search-submit-button"
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
    isLoading: state.fetch.isLoading,
    courses: state.fetch.courses,
    filters: state.filters.filters,
    showModal: state.ui.showModal,
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
