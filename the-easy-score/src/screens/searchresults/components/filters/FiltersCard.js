import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button, Form } from "react-bootstrap";

import {
  setSearchPageFiltersCourseLevel,
  setSearchPageFiltersCourseNextSemester,
  setSearchPageFiltersCourseRequirements,
  setSearchPageFiltersCourseCreditHours,
  setSearchPageFiltersTimeofDay,
  resetSearchPageFilters,
} from "../../../../store/actions/filtersActions";
import { setCourses } from "../../../../store/actions/fetchDataActions";
import {
  requirementsValues,
  courseLevelFilterValues,
  creditHoursValues,
  timeofDayValues,
} from "../../../../data/FilterSelectsData";

import FilterSelect from "../../../../components/FilterSelect";
import "../../results.css";

const FiltersCard = (props) => {
  const handleSwitchChange = (e) => {
    if (props.resultsPage.filtersCard.next_sem.value === 1) {
      props.setSearchPageFiltersCourseNextSemester(0);
    }
    if (props.resultsPage.filtersCard.next_sem.value === 0) {
      props.setSearchPageFiltersCourseNextSemester(1);
    }
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "courseLevel":
        return props.setSearchPageFiltersCourseLevel(e.target.value);
      case "creditHours":
        return props.setSearchPageFiltersCourseCreditHours(e.target.value);
      case "timeofDay":
        return props.setSearchPageFiltersTimeofDay(e.target.value);
      case "requirements":
        return props.setSearchPageFiltersCourseRequirements(e.target.value);
      default:
        return null;
    }
  };

  const applyFilters = () => {
    props.setCurrentPage(1);

    props.setCourses(props.courses);

    // functions all depend on one-another, the filters are all activated by calling filterByRequirements

    // eslint-disable-next-line array-callback-return
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
      switch (props.resultsPage.filtersCard.courseLevel.value) {
        case 12:
          return lowerLevelCourses;
        case 8:
          return middleLevelCourses;
        case 9:
          return upperLevelCourses;
        case 10:
          return graduateLevelCourses;
        default:
          return filterByTime(semesterFilteredCourses);
      }
    };

    const filterByCreditHours = () => {
      if (props.resultsPage.filtersCard.creditHours.value !== "") {
        const creditsFilteredCourses = filterByCourseLevel().filter(
          (course) => {
            return (
              course.credits === props.resultsPage.filtersCard.creditHours.value
            );
          }
        );
        return creditsFilteredCourses;
      } else {
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

  return (
    <div className="mb-5">
      <Card>
        <Card.Body>
          <Card.Title className="mb-2 filterCardTitle bold dark">
            Filter Courses
          </Card.Title>
          <hr></hr>
          <br />

          <Card.Subtitle className="mb-2 text-muted filterCardBtnLabel">
            Avail. Next Term
          </Card.Subtitle>
          <Form.Check
            className="filterCardSwitch switch-danger"
            type="switch"
            id="course-filter-next-semester-switch"
            checked={props.resultsPage.filtersCard.next_sem.value === 1}
            value={props.resultsPage.filtersCard.next_sem.value}
            label="Next Semester Only"
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
            <Button
              name="reset-filters"
              className="filterBtn"
              onClick={handleFiltersReset}
            >
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
    courses: state.fetch.courses,
    displayedCourses: state.courses.displayedCourses,
    filters: state.filters.filters,
    resultsPage: state.results.resultsPage,
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
