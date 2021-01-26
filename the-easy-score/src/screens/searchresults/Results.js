import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchResults, setCourses } from "../../actions/fetchDataActions";
import { setNavStyle, setFooterStyle } from "../../actions/";
import { useParams } from "react-router-dom";

import { filterToKeyword } from "./hooks/";

import NoResults from "../../components/NoResults";
import Loading from "../../components/Loading";
import ResultsNumber from "../../components/ResultsNumber";
import Courses from "./components/Courses";
import TablePagination from "../../components/TablePagination";

import SearchForm from "../../components/SearchForm";
import MobileSearch from "./components/MobileSearch";
import FiltersModal from "../../components/FiltersModal";

import FiltersCard from "./components/filters/FiltersCard";

import Hidden from "@material-ui/core/Hidden";

import "./results.css";

const Results = (props) => {
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResults(params.axiosUrl));
    dispatch(setCourses(props.courses));
    filterToKeyword(params.axiosUrl, setKeyword);
    props.setNavStyle(2);
    props.setFooterStyle(2);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    dispatch(fetchResults(params.axiosUrl));
    dispatch(setCourses(props.courses));
    filterToKeyword(params.axiosUrl, setKeyword);
    setCurrentPage(1);
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
        <Hidden smDown>
          <SearchForm nav={false} />
          <hr></hr>
        </Hidden>
        <Hidden mdUp>
          <MobileSearch />
          <FiltersModal />
        </Hidden>
      </div>
      <div>
        {props.isLoading === true ? (
          <div className="row w-100 justify-content-center align-items-center">
            <div className="col justify-content-center align-items-center d-flex justify-content-center align-items-center mt-5">
              <Loading />
            </div>
          </div>
        ) : (
          <div className="row mt-5">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
              <FiltersCard setCurrentPage={setCurrentPage} />
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
                    {props.isLoading === false ? (
                      <TablePagination
                        count={Math.ceil(props.displayedCourses.length / 3)}
                        page={currentPage}
                        rowsPerPage={4}
                        rowsPerPageOptions={[4]}
                        paginate={paginate}
                      />
                    ) : null}
                  </div>
                ) : (
                  //********  RENDER NO RESULTS IF NO RESULTS  *******/
                  <div className="container">
                    <div className="ml-10">
                      <NoResults />
                    </div>
                  </div>
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
    footerStyle: state.footerStyle,
  };
};

export default connect(mapStateToProps, {
  fetchResults,
  setCourses,
  setNavStyle,
  setFooterStyle,
})(Results);
