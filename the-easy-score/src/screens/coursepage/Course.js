import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { setNavStyle, setFooterStyle } from "../../actions/index";
import { fetchCoursePage } from "../../actions/fetchDataActions";

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
  // console.log("currentins", currentInstructors);
  return (
    <div className="container">
      {props.isLoading === true ? (
        <div className="w-100 d-flex justify-content-center">
          <Loading />
        </div>
      ) : (
        <div>
          <div>
            <Header course={props.coursePage.course} />
            <hr />
            <ResultsNumber
              number={props.coursePage.displayedInstructors.length}
              results={"instructors"}
              full_code={props.coursePage.course.full_code}
              course_name={props.coursePage.course.name}
              header={1}
            />
            <ProfessorSearch />
            <div className="row mt-5">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                <ProfFiltersCard />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                <div className="row w-100 profCardContainer">
                  <Professors currentInstructors={currentInstructors} />
                </div>
                {props.isLoading === false ? (
                  <div className="row paginationContainer">
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
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    errorText: state.errorText,
    coursePage: state.coursePage,
    footerStyle: state.footerStyle,
  };
};

export default connect(mapStateToProps, {
  fetchCoursePage,
  setNavStyle,
  setFooterStyle,
})(Course);
