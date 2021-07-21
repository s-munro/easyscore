import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Fuse from "fuse.js";
import { FormControl } from "react-bootstrap";

import { setInstructors } from "../../../store/actions/fetchDataActions";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
  setInstructorsKeywordFilterValue,
  setInstructorsFuse,
  fuseResetFiltersExceptNextSemester,
} from "../../../store/actions/filtersActions";


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
    props.fuseResetFiltersExceptNextSemester();
    setQuery(e.target.value);
  };

  useEffect(() => {
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
      props.setInstructorsFuse(instructorsResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <FormControl
      className="profSearch"
      value={query}
      onChange={handleChange}
      placeholder="Search for professor"
      name="profSearch"
      id="searchForm"
    />
  );
};

const mapStateToProps = (state) => {
  return {
    coursePage: state.courses.coursePage,
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
  fuseResetFiltersExceptNextSemester,
})(ProfessorSearch);
