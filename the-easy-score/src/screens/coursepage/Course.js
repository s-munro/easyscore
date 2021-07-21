import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { setNavStyle, setFooterStyle } from "../../store/actions/index";
import { fetchCoursePage } from "../../store/actions/fetchDataActions";

import Header from "./components/Header";
import Loading from "../../components/Loading";
import ResultsNumber from "../../components/ResultsNumber";
import ProfessorSearch from "./components/ProfessorSearch";
import ProfFiltersCard from "./components/filters/ProfFiltersCard";
import Professors from "./components/Professors";
import TablePagination from "../../components/TablePagination";

const Course = (props) => {
  const params = useParams();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const instructorsPerPage = 5;

  useEffect(() => {
    dispatch(fetchCoursePage(params.courseid));
    props.setNavStyle(3);
    props.setFooterStyle(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /******  PAGINATION  ******/
  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
  const currentInstructors = props.coursePage.displayedInstructors.slice(
    indexOfFirstInstructor,
    indexOfLastInstructor
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  /*****  END PAGINATION  *****/
  return (
    <div className="row w-100">
      {props.isLoading === true ? (
        <div
          style={{ height: "100vh" }}
          className="col d-flex justify-content-center"
        >
          <div className="col d-flex justify-content-center align-items-center">
            <Loading />
          </div>
        </div>
      ) : (
        <div className="col-12 mt-3">
          <div
            className="row w-100 desktop-left-padding"
            style={{ margin: "auto" }}
          >
            <Header course={props.coursePage.course} />
          </div>
          <hr className="desktop-left-margin" />
          <div className="row w-100" style={{ margin: "auto" }}>
            <ResultsNumber
              number={props.coursePage.displayedInstructors.length}
              results={"instructors"}
              full_code={props.coursePage.course.full_code}
              course_name={props.coursePage.course.name}
              header={1}
            />
          </div>
          <div className="row w-100 mb-4 d-flex" style={{ margin: "auto" }}>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
              <ProfessorSearch />
            </div>
          </div>
          <div
            className="row mt-5 d-flex justify-content-center w-100"
            style={{ margin: "auto" }}
          >
            <div className="col-xl-3 col-lg-4 col-md-0 col-sm-12 col-12 mb-5 d-flex justify-content-center align-items-start">
              <ProfFiltersCard />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 w-100 d-flex flex-column align-items-center">
              <div className="row w-100 profCardContainer d-flex justify-content-center">
                <Professors currentInstructors={currentInstructors} />
              </div>
              {props.isLoading === false ? (
                <div className="row d-flex justify-content-center paginationContainer">
                  <TablePagination
                    count={props.coursePage.displayedInstructors.length}
                    page={currentPage}
                    rowsPerPage={5}
                    rowsPerPageOptions={[1]}
                    paginate={paginate}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.fetch.isLoading,
    errorText: state.fetch.errorText,
    coursePage: state.courses.coursePage,
    footerStyle: state.ui.footerStyle,
  };
};

export default connect(mapStateToProps, {
  fetchCoursePage,
  setNavStyle,
  setFooterStyle,
})(Course);
