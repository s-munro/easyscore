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
  console.log(
    "props.resultsPage.filtersCard.next_sem",
    props.resultsPage.filtersCard.next_sem
  );
  const handleSwitchChange = (e) => {
    console.log("yahoooo!!!");
    if (props.resultsPage.filtersCard.next_sem.value === 1) {
      props.setSearchPageFiltersCourseNextSemester(0);
      // applyFilters(0);
    }
    if (props.resultsPage.filtersCard.next_sem.value === 0) {
      props.setSearchPageFiltersCourseNextSemester(1);
      // applyFilters(1);
    }
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
  };

  const handleFiltersSubmit = (e) => {
    e.preventDefault();
    props.setCurrentPage(1);

    props.setCourses(props.courses);

    const timeFilteredCourses = [];

    const filterByTime = () => {
      if (props.resultsPage.filtersCard.timeofDay.value !== "") {
        props.courses.filter((course) =>
          course.instructors.map((instructor) => {
            return instructor.timings.map((timing) => {
              return timing.map((timing) => {
                if (timing === props.resultsPage.filtersCard.timeofDay.value) {
                  return timeFilteredCourses.push(course);
                } else {
                  return null;
                }
              });
            });
          })
        );
      } else {
        props.courses.forEach((course) => {
          timeFilteredCourses.push(course);
        });
      }
    };

    const filterByCourseLevel = () => {
      const lowerLevelCourses = timeFilteredCourses.filter((course) => {
        return course.code <= 299;
      });
      const middleLevelCourses = timeFilteredCourses.filter((course) => {
        return course.code >= 300 && course.code <= 399;
      });
      const upperLevelCourses = timeFilteredCourses.filter((course) => {
        return course.code >= 400 && course.code <= 499;
      });
      const graduateLevelCourses = timeFilteredCourses.filter((course) => {
        return course.code > 499;
      });

      if (props.resultsPage.filtersCard.courseLevel.value === 12) {
        return lowerLevelCourses;
      } else if (props.resultsPage.filtersCard.courseLevel.value === 8) {
        return middleLevelCourses;
      } else if (props.resultsPage.filtersCard.courseLevel.value === 9) {
        return upperLevelCourses;
      } else if (props.resultsPage.filtersCard.courseLevel.value === 10) {
        return graduateLevelCourses;
      } else if (props.resultsPage.filtersCard.courseLevel.value === "") {
        return timeFilteredCourses;
      } else {
        return timeFilteredCourses;
      }
    };

    const filterByCreditHours = (func) => {
      // console.log("filtercredithours func: ", func);
      if (props.resultsPage.filtersCard.creditHours.value !== "") {
        // console.log("creditHours state value isnt blank");
        const filteredCourses = func.filter((course) => {
          if (
            course.credits ===
            parseInt(props.resultsPage.filtersCard.creditHours.value)
          ) {
            // console.log("equals");
          }
          return (
            course.credits === props.resultsPage.filtersCard.creditHours.value
          );
        });
        props.setCourses(filteredCourses);
      } else {
        // console.log("creditHours state is blank");
        props.setCourses(func);
      }
    };

    filterByTime();
    filterByCreditHours(filterByCourseLevel());
  };

  const handleFiltersReset = (e) => {
    e.preventDefault();
    props.resetSearchPageFilters();
    props.setCourses(props.courses);
  };

  useEffect(() => {
    console.log("wahoo");
    props.resetSearchPageFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-5">
      <Card>
        <Card.Body>
          <Card.Title className="mb-2 text-muted">Filter</Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Avail. Next Term
          </Card.Subtitle>
          <Form.Check
            type="switch"
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
            <Button className="filterBtn" onClick={handleFiltersSubmit}>
              Apply
            </Button>
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
