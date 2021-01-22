import React from "react";
import { connect } from "react-redux";

import {
  setCourses,
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  resetFilterValues,
  setTimeFilterValue,
} from "../../../../actions/index";

import {
  requirementsValues,
  courseLevelValues,
  creditHoursValues,
  timeofDayValues,
} from "../../../../data/FilterSelectsData";

import FilterSelect from "../../../../components/FilterSelect";

import { Card, Button, Form } from "react-bootstrap";

import "../../results.css";

const FiltersCard = (props) => {
  const handleChange = (e) => {
    if (e.target.name === "keyword") {
      props.setKeywordFilterValue(e.target.value);
    } else if (e.target.name === "courseLevel") {
      console.log("courselevel etargetname");
      props.setLevelFilterValue(e.target.value);
    } else if (e.target.name === "creditHours") {
      console.log("credithours etargetname");
      props.setCreditsFilterValue(e.target.value);
    } else if (e.target.name === "timeofDay") {
      props.setTimeFilterValue(e.target.value);
    } else if (e.target.name === "requirements") {
      props.setRequirementsFilterValue(e.target.value);
    } else {
    }
  };

  const handleFiltersSubmit = (e) => {
    e.preventDefault();
    props.setCurrentPage(1);

    props.setCourses(props.courses);

    const timeFilteredCourses = [];

    const filterByTime = () => {
      if (props.filters.timeofDay.value !== "") {
        props.courses.filter((course) =>
          course.instructors.map((instructor) => {
            return instructor.timings.map((timing) => {
              return timing.map((timing) => {
                if (timing === props.filters.timeofDay.value) {
                  timeFilteredCourses.push(course);
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

      if (props.filters.courseLevel.value === 12) {
        return lowerLevelCourses;
      } else if (props.filters.courseLevel.value === 8) {
        return middleLevelCourses;
      } else if (props.filters.courseLevel.value === 9) {
        return upperLevelCourses;
      } else if (props.filters.courseLevel.value === 10) {
        return graduateLevelCourses;
      } else if (props.filters.courseLevel.value === "") {
        return timeFilteredCourses;
      }
    };

    const filterByCreditHours = (func) => {
      console.log("filtercredithours func: ", func);
      if (props.filters.creditHours.value !== "") {
        console.log("creditHours state value isnt blank");
        const filteredCourses = func.filter((course) => {
          if (course.credits === parseInt(props.filters.creditHours.value)) {
            console.log("equals");
          }
          return course.credits === props.filters.creditHours.value;
        });
        props.setCourses(filteredCourses);
      } else {
        console.log("creditHours state is blank");
        props.setCourses(func);
      }
    };

    filterByTime();
    filterByCreditHours(filterByCourseLevel());
  };

  const handleFiltersReset = (e) => {
    e.preventDefault();
    props.resetFilterValues();
    props.setCourses(props.courses);
  };

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
            id="custom-switch"
            // label="Check this switch"
          />
          <br />
          
          <FilterSelect
            select_id={"courseLevel"}
            handleSelectChange={handleChange}
            selectValues={courseLevelValues}
            selectValue={props.filters.courseLevel.value}
          />
          <br />
         
          <FilterSelect
            select_id={"creditHours"}
            handleSelectChange={handleChange}
            selectValues={creditHoursValues}
            selectValue={props.filters.creditHours.value}
          />
          <br />
          
          <FilterSelect
            select_id={"timeofDay"}
            handleSelectChange={handleChange}
            selectValues={timeofDayValues}
            selectValue={props.filters.timeofDay.value}
          />
          <br />
          <br />
        <div className="filterBtnContainer">
          <Button className="filterBtn" onClick={handleFiltersSubmit}>Apply</Button>
          <Button className="filterBtn" onClick={handleFiltersReset}>Reset</Button>
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
  };
};

export default connect(mapStateToProps, {
  setCourses,
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  resetFilterValues,
  setTimeFilterValue,
})(FiltersCard);
