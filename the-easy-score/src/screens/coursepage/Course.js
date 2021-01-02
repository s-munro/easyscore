import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { fetchResults, changeUrl } from "../../actions/index";
import { getData } from "../../utils/api/getData";

import Header from "./components/Header";
import ProfessorCard from "./components/ProfessorCard";
import Loading from "../../components/Loading";

const Course = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello!");
    const newUrl = `'keyword'=_'${params.courseid}'&_'requirement'=_''&_'level'=_''&_'credit'=_''&_'timing'=_''&_'next_sem'=_''&_'days'=_[]`;
    changeUrl(newUrl);
    dispatch(fetchResults(getData, newUrl));
  }, []);

  // const instructors = course.instructors;
  // console.log("instructors: ", instructors);

  return (
    <div>
      {props.isLoading === true ? (
        <Loading />
      ) : (
        <div>
          {props.courses.length > 0 ? (
            <div>
              <Header course={props.courses[0]} />
              {props.courses[0].instructors.map((instructor, index) => {
                return <ProfessorCard instructor={instructor} key={index} />;
              })}
            </div>
          ) : null}
        </div>
      )}
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
