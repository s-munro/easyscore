import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchResults } from "../../actions";
import { useParams } from "react-router-dom";

import { getData } from "../../utils/api/getData";
import { filterToKeyword } from "./hooks/";

import Header from "./components/Header";
import CourseCard from "./components/CourseCard";
import NoResults from "./components/NoResults";
import Loading from "../../components/Loading";
import ResultsNumber from "../../components/ResultsNumber";

import "./results.css";

const Results = (props) => {
  const [keyword, setKeyword] = useState("");
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResults(getData, params.axiosUrl));
    filterToKeyword(params.axiosUrl, setKeyword);
  }, []);

  return (
    <main className="results-container">
      <Header keyword={keyword} courses={props.courses} header={0} />

      {props.isLoading === true ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="courseDisplayContainer">
          {props.courses.length > 0 ? (
            [
              <ResultsNumber
                number={props.courses.length}
                results={"course(s)"}
                header={1}
              />,
              props.courses.map((course) => {
                return <CourseCard course={course} key={course.url} />;
              }),
            ]
          ) : (
            <NoResults />
          )}
        </div>
      )}
    </main>
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

export default connect(mapStateToProps, { fetchResults })(Results);
