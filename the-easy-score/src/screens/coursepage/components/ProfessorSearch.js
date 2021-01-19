import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Fuse from "fuse.js";

import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
  setInstructorsKeywordFilterValue,
  setInstructorsFuse,
  setInstructors,
} from "../../../actions";

import { FormControl } from "react-bootstrap";

const ProfessorSearch = (props) => {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(props.coursePage.instructors, {
    keys: ["name"],
  });
  const results = fuse.search(query);
  const instructorsResults = query
    ? results.map((instructor) => instructor.item)
    : props.coursePage.instructors;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    // console.log("results", results);
    // console.log("insres ", instructorsResults);
    if (query === "" && props.coursePage.filters.next_sem === 0) {
      props.setInstructors(props.coursePage.instructors);
    } else if (query === "" && props.coursePage.filters.next_sem === 1) {
      props.setInstructors(
        props.coursePage.instructors.filter((instructor) => {
          return instructor.is_teaching_next_semester === 1;
        })
      );
    } else if (props.coursePage.filters.next_sem === 1) {
      props.setInstructorsFuse(
        instructorsResults.filter((instructor) => {
          return instructor.is_teaching_next_semester === 1;
        })
      );
    } else {
      // console.log("wahoo");
      props.setInstructorsFuse(instructorsResults);
    }
  }, [query]);

  return (
    <div>
      <FormControl
        value={query}
        onChange={handleChange}
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
  setInstructorsFuse,
  setInstructors,
})(ProfessorSearch);
