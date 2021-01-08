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
import SecondaryNav from "../../navbar/SecondaryNav";
import FiltersCard from "./components/FiltersCard";

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
    <div className="page-container">
      <SecondaryNav />
      <main className="results-container">
        <Header keyword={keyword} courses={props.courses} header={0} />
        {/*************** BEGIN RENDERING RESULTS *********************/}
        {/* LOADING */}
        {props.isLoading === true ? (
          <div>
            <Loading />
          </div>
        ) : (
          //************* END LOADING *****/
          //************* LOAD RESULTS ****/
          //**** NUMBER */
          <div>
            <div>
              <ResultsNumber
                number={props.courses.length}
                results={"course(s)"}
                header={1}
              />
            </div>
            <div className="filtersCard-courses-container">
              <FiltersCard />
              {/********* END NUMBER, RENDER CARDS ********/}
              <div className="courseDisplayContainer">
                {props.courses.length > 0 ? (
                  [
                    props.courses.map((course) => {
                      return <CourseCard course={course} key={course.url} />;
                    }),
                  ]
                ) : (
                  //********  RENDER NO RESULTS IF NO RESULTS  *******/
                  <NoResults />
                )}
              </div>
            </div>
          </div>
        )}
      </main>
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

export default connect(mapStateToProps, { fetchResults })(Results);
