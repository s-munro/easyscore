import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
  setInstructorsKeywordFilterValue,
} from "../../../actions";

import { FormControl } from "react-bootstrap";

const ProfessorSearch = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.setInstructorsKeywordFilterValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <FormControl
        value={props.coursePage.filters.profName}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder="Search for professor"
        name="profSearch"
        id="searchForm"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    coursePage: state.coursePage,
  };
};

export default connect(mapStateToProps, {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
  setInstructorsKeywordFilterValue,
})(ProfessorSearch);
