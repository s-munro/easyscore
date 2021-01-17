import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { fetchResults, setNavStyle } from "../../actions/index";

import Header from "./components/Header";
import ProfessorCard from "./components/ProfessorCard";
import Loading from "../../components/Loading";
import ResultsNumber from "../../components/ResultsNumber";
import ProfessorSearch from "./components/ProfessorSearch";
import ProfFiltersCard from "./components/filters/ProfFiltersCard";

const Course = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const newUrl = `'keyword'=_'${params.courseid}'&_'requirement'=_''&_'level'=_''&_'credit'=_''&_'timing'=_''&_'next_sem'=_''&_'days'=_[]`;
    dispatch(fetchResults(newUrl));
    props.setNavStyle(3);
  }, []);

  const course = props.courses[0];

  return (
    <div className="container">
      {props.isLoading === true ? (
        <div className="w-100 d-flex justify-content-center">
          <Loading />
        </div>
      ) : (
        <div>
          {props.courses.length > 0 ? (
            <div>
              <Header course={props.courses[0]} />
              <hr />
              <ResultsNumber
                number={props.courses[0].instructors.length}
                results={"instructors"}
                full_code={course.full_code}
                course_name={course.name}
                header={1}
              />
              <ProfessorSearch />
              <div className="row mt-5">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                  <ProfFiltersCard />
                </div>
                <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                  <div className="row">
                    {course.instructors.map((instructor, index) => {
                      return (
                        <div
                          key={index}
                          className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5"
                        >
                          <ProfessorCard instructor={instructor} key={index} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    courses: state.courses,
    errorText: state.errorText,
  };
};

export default connect(mapStateToProps, { fetchResults, setNavStyle })(Course);
