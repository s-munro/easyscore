import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchResults, setCourses, setNavStyle } from "../../actions";
import { useParams } from "react-router-dom";

import { filterToKeyword } from "./hooks/";

import CourseCard from "./components/CourseCard";
import NoResults from "./components/NoResults";
import Loading from "../../components/Loading";
import ResultsNumber from "../../components/ResultsNumber";
import Courses from "./components/Courses";
import Pagination from "../../components/Pagination";

import SearchForm from "../home/components/SearchForm";

import FiltersCard from "./components/filters/FiltersCard";

import "./results.css";

const Results = (props) => {
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(12);
  const params = useParams();

  console.log("yello!");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResults(params.axiosUrl));
    dispatch(setCourses(props.courses));
    filterToKeyword(params.axiosUrl, setKeyword);
    props.setNavStyle(2);
  }, []);

  useEffect(() => {
    dispatch(fetchResults(params.axiosUrl));
    dispatch(setCourses(props.courses));
  }, [params.axiosUrl]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = props.displayedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="mt-5">
        <SearchForm />
      </div>
      <hr></hr>
      <div>
        {props.isLoading === true ? (
          <div>
            <Loading />
          </div>
        ) : (
          <div className="row mt-5">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
              <FiltersCard />
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
              <div className="row">
                <div className="col mb-4">
                  <ResultsNumber
                    number={props.displayedCourses.length}
                    results={"courses"}
                    keyword={keyword}
                    header={0}
                  />
                </div>
              </div>
              <div className="row">
                {props.displayedCourses.length > 0 ? (
                  <div>
                    <Courses currentCourses={currentCourses} />
                    <Pagination
                      itemsPerPage={coursesPerPage}
                      totalItems={props.displayedCourses.length}
                      paginate={paginate}
                    />
                  </div>
                ) : (
                  //********  RENDER NO RESULTS IF NO RESULTS  *******/
                  <NoResults />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    courses: state.courses,
    displayedCourses: state.displayedCourses,
    errorText: state.errorText,
  };
};

export default connect(mapStateToProps, {
  fetchResults,
  setCourses,
  setNavStyle,
})(Results);
