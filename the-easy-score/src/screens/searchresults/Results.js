import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import { fetchResults, setCourses } from "../../store/actions/fetchDataActions";
import { setNavStyle, setFooterStyle, setShowModal } from "../../store/actions/";
import { filterToKeyword } from "./helpers/index";

import NoResults from "../../components/NoResults";
import Loading from "../../components/Loading";
import ResultsNumber from "../../components/ResultsNumber";
import Courses from "./components/Courses";
import SearchForm from "../../components/SearchForm";
import MobileSearch from "./components/MobileSearch";
import FiltersModal from "../../components/FiltersModal";
import TablePagination from "../../components/TablePagination";
import FiltersCard from "./components/filters/FiltersCard";



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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchResults(params.axiosUrl));
    dispatch(setCourses(props.courses));
    filterToKeyword(params.axiosUrl, setKeyword);
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.axiosUrl]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = props.displayedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleModal = (e) => {
    e.preventDefault();
    props.setShowModal(!props.showModal);
  };

  return (
    <div className="row w-100">
      <div className="mt-3 col-12 d-flex flex-column align-items-center p-0">
        <div className="row w-100">
          <Hidden smDown>
            <SearchForm nav={false} />
            <hr></hr>
          </Hidden>
          <Hidden mdUp>
            <MobileSearch />
            <Button
              name="view-filters-button"
              className="homeFilterBtn homeModalBtn btn-top-padding-2 shadow-none"
              onClick={handleModal}
              block
            >
              Filters
            </Button>
            <FiltersModal />
          </Hidden>
        </div>
      </div>
      {props.isLoading === true ? (
        <div className="col-12 justify-content-center align-items-center">
          <div className="col-12 justify-content-center align-items-center d-flex mt-5">
            <Loading />
          </div>
        </div>
      ) : (
        <div className="col-12 mt-5 d-flex flex-column align-items-center">
          <div className="row w-100">
            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12 p-0 non-mobile-zero-padding-right">
              <FiltersCard setCurrentPage={setCurrentPage} />
            </div>
            <div className="col-xl-9 col-lg-9 col-md-7 col-sm-12 col-12">
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
              <div className="row w-100 m-0">
                {props.displayedCourses.length > 0 ? (
                  <div className="col-12 p-0">
                    <Courses currentCourses={currentCourses} />
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
        </div>
      )}
      {props.isLoading === false ? (
        <div className="row w-100 d-flex justify-content-center">
          <TablePagination
            count={Math.ceil(props.displayedCourses.length / 3)}
            page={currentPage}
            rowsPerPage={4}
            rowsPerPageOptions={[4]}
            paginate={paginate}
          />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.fetch.isLoading,
    courses: state.fetch.courses,
    displayedCourses: state.courses.displayedCourses,
    errorText: state.fetch.errorText,
    footerStyle: state.ui.footerStyle,
    showModal: state.ui.showModal,
  };
};

export default connect(mapStateToProps, {
  fetchResults,
  setCourses,
  setNavStyle,
  setFooterStyle,
  setShowModal,
})(Results);
