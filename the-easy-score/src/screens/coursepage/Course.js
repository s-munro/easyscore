import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { fetchResults, changeUrl } from "../../actions/index";
import { getData } from "../../utils/api/getData";

import Header from "./components/Header";
import ProfessorCard from "./components/ProfessorCard";

const Course = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log("professorcard props courses: ", props.courses);

  useEffect(() => {
    const newUrl = `'keyword'=_'${params.courseid}'&_'requirement'=_''&_'level'=_''&_'credit'=_''&_'timing'=_''&_'next_sem'=_''&_'days'=_[]`;
    changeUrl(newUrl);
    return dispatch(fetchResults(getData, newUrl));
  }, []);

  return (
    <div>
      <Header course={props.courses} />
      <div>Hey here's the course!</div>
      <ProfessorCard course={props.courses} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchUrl: state.searchUrl,
    isLoading: state.isLoading,
    courses: state.courses,
    errorText: state.errorText,
  };
};

export default connect(mapStateToProps, { fetchResults, changeUrl })(Course);
