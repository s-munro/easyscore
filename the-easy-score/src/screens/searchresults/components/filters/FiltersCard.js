import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  setSearchPageFiltersCourseLevel,
  setSearchPageFiltersCourseNextSemester,
  setSearchPageFiltersCourseRequirements,
  setSearchPageFiltersCourseCreditHours,
  setSearchPageFiltersTimeofDay,
  resetSearchPageFilters,
} from "../../../../actions/filtersActions";

import { setCourses } from "../../../../actions/fetchDataActions";

import {
  requirementsValues,
  courseLevelFilterValues,
  creditHoursValues,
  timeofDayValues,
} from "../../../../data/FilterSelectsData";

import FilterSelect from "../../../../components/FilterSelect";

import { Card, Button, Form } from "react-bootstrap";

import "../../results.css";

const FiltersCard = (props) => {
  const handleSwitchChange = (e) => {
    if (props.resultsPage.filtersCard.next_sem.value === 1) {
      props.setSearchPageFiltersCourseNextSemester(0);
      // applyFilters(0);
    }
    if (props.resultsPage.filtersCard.next_sem.value === 0) {
      props.setSearchPageFiltersCourseNextSemester(1);
      // applyFilters(1);
    }
    // applyFilters();
  };

  const handleChange = (e) => {
    if (e.target.name === "courseLevel") {
      // console.log("courselevel etargetname");
      props.setSearchPageFiltersCourseLevel(e.target.value);
    } else if (e.target.name === "creditHours") {
      // console.log("credithours etargetname");
      props.setSearchPageFiltersCourseCreditHours(e.target.value);
    } else if (e.target.name === "timeofDay") {
      props.setSearchPageFiltersTimeofDay(e.target.value);
    } else if (e.target.name === "requirements") {
      props.setSearchPageFiltersCourseRequirements(e.target.value);
    } else {
    }
    // applyFilters();
  };

  const applyFilters = () => {
    props.setCurrentPage(1);

    props.setCourses(props.courses);

    // functions all depend on one-another, the filters are all activated by calling filterByRequirements
    const semesterFilteredCourses = props.courses.filter((course) => {
      if (props.resultsPage.filtersCard.next_sem.value === 0) {
        return course.taught_next_semester === false;
      } else if (props.resultsPage.filtersCard.next_sem.value === 1) {
        return course.taught_next_semester === true;
      }
    });

    const filterByTime = (semesterFilteredCourses) => {
      if (
        props.resultsPage.filtersCard.timeofDay.value !== "" &&
        semesterFilteredCourses.length > 0
      ) {
        let filteredCourses = semesterFilteredCourses.filter((course) => {
          let instructorsWithValue = course.instructors.some(({ timings }) =>
            timings[0].some(
              (timing) =>
                timing === props.resultsPage.filtersCard.timeofDay.value
            )
          );
          return instructorsWithValue;
        });
        // console.log("fc", filteredCourses);
        return filteredCourses;
      } else {
        return semesterFilteredCourses;
      }
    };

    const filterByCourseLevel = () => {
      const lowerLevelCourses = filterByTime(semesterFilteredCourses).filter(
        (course) => {
          return course.code <= 299;
        }
      );
      const middleLevelCourses = filterByTime(semesterFilteredCourses).filter(
        (course) => {
          return course.code >= 300 && course.code <= 399;
        }
      );
      const upperLevelCourses = filterByTime(semesterFilteredCourses).filter(
        (course) => {
          return course.code >= 400 && course.code <= 499;
        }
      );
      const graduateLevelCourses = filterByTime(semesterFilteredCourses).filter(
        (course) => {
          return course.code > 499;
        }
      );

      if (props.resultsPage.filtersCard.courseLevel.value === 12) {
        return lowerLevelCourses;
      } else if (props.resultsPage.filtersCard.courseLevel.value === 8) {
        return middleLevelCourses;
      } else if (props.resultsPage.filtersCard.courseLevel.value === 9) {
        return upperLevelCourses;
      } else if (props.resultsPage.filtersCard.courseLevel.value === 10) {
        return graduateLevelCourses;
      } else if (props.resultsPage.filtersCard.courseLevel.value === "") {
        return filterByTime(semesterFilteredCourses);
      } else {
        return filterByTime(semesterFilteredCourses);
      }
    };

    const filterByCreditHours = () => {
      // console.log("filtercredithours func: ", func);
      if (props.resultsPage.filtersCard.creditHours.value !== "") {
        // console.log("creditHours state value isnt blank");
        const creditsFilteredCourses = filterByCourseLevel().filter(
          (course) => {
            return (
              course.credits === props.resultsPage.filtersCard.creditHours.value
            );
          }
        );
        return creditsFilteredCourses;
      } else {
        // console.log("creditHours state is blank");
        return filterByCourseLevel();
      }
    };

    const filterByRequirements = () => {
      if (props.resultsPage.filtersCard.requirements.value !== "") {
        const requirementsFilteredCourses = filterByCreditHours().filter(
          (course) => {
            let desiredCredits = course.credits_fulfilled.some(
              (credit) =>
                credit === props.resultsPage.filtersCard.requirements.value
            );
            return desiredCredits;
          }
        );
        return props.setCourses(requirementsFilteredCourses);
      } else return props.setCourses(filterByCreditHours());
    };
    filterByRequirements();
  };

  const handleFiltersReset = (e) => {
    e.preventDefault();
    props.resetSearchPageFilters();
    props.setCourses(props.courses);
  };

  // filters reset and are applied on initial page render
  useEffect(() => {
    props.resetSearchPageFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // filters are applied on every handleChange
  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.resultsPage.filtersCard.next_sem.value,
    props.resultsPage.filtersCard.courseLevel.value,
    props.resultsPage.filtersCard.requirements.value,
    props.resultsPage.filtersCard.creditHours.value,
    props.resultsPage.filtersCard.timeofDay.value,
    resetSearchPageFilters,
  ]);
  const switchRed = {
    backgroundColor: "red",
  };

  return (
    <div className="mb-5">
      <Card>
        <Card.Body>
          <Card.Title className="mb-2 text-muted filterCardTitle">
            Filter results
          </Card.Title>
          <hr></hr>
          <br />

          <Card.Subtitle className="mb-2 text-muted filterCardBtnLabel">
            Avail. Next Term
          </Card.Subtitle>
          <Form.Check
            className="filterCardSwitch switch-danger"
            type="switch"
            variant={switchRed}
            id="course-filter-next-semester-switch"
            checked={props.resultsPage.filtersCard.next_sem.value === 1}
            value={props.resultsPage.filtersCard.next_sem.value}
            // label="Next Semester Only"
            onChange={handleSwitchChange}
          />
          <br />

          <FilterSelect
            select_id={"courseLevel"}
            handleSelectChange={handleChange}
            selectValues={courseLevelFilterValues}
            selectValue={props.resultsPage.filtersCard.courseLevel.value}
          />
          <br />

          <FilterSelect
            select_id={"requirements"}
            handleSelectChange={handleChange}
            selectValues={requirementsValues}
            selectValue={props.resultsPage.filtersCard.requirements.value}
          />
          <br />

          <FilterSelect
            select_id={"creditHours"}
            handleSelectChange={handleChange}
            selectValues={creditHoursValues}
            selectValue={props.resultsPage.filtersCard.creditHours.value}
          />
          <br />

          <FilterSelect
            select_id={"timeofDay"}
            handleSelectChange={handleChange}
            selectValues={timeofDayValues}
            selectValue={props.resultsPage.filtersCard.timeofDay.value}
          />
          <br />
          <br />
          <div className="filterBtnContainer">
            {/* <Button className="filterBtn" onClick={applyFilters}>
              Apply
            </Button> */}
            <Button className="filterBtn" onClick={handleFiltersReset}>
              Reset
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    displayedCourses: state.displayedCourses,
    filters: state.filters,
    resultsPage: state.resultsPage,
  };
};

export default connect(mapStateToProps, {
  setCourses,
  setSearchPageFiltersCourseLevel,
  setSearchPageFiltersCourseNextSemester,
  setSearchPageFiltersCourseRequirements,
  setSearchPageFiltersCourseCreditHours,
  setSearchPageFiltersTimeofDay,
  resetSearchPageFilters,
})(FiltersCard);
