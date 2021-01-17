import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
} from "../../../actions";

import { FormControl } from "react-bootstrap";

const ProfessorSearch = (props) => {
  const { history } = useHistory();

  const handleChange = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <FormControl
        value={props.filters.keyword.value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder="Search for professors"
        name="professor"
        id="searchForm"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps, {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
})(ProfessorSearch);
