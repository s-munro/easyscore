import React from "react";

import { connect } from "react-redux";
import {
  setCourses,
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  resetFilterValues,
} from "../../../../actions/index";

import CourseLevelPopover from "./popovercontent/CourseLevelPopover";
// import RequirementsPopover from "./popovercontent/RequirementsPopover";
import CreditHoursPopover from "./popovercontent/CreditHoursPopover";
import TimeofDayPopover from "./popovercontent/TimeofDayPopover";

import FilterSelect from "../../../../components/FilterSelect";

import {
  requirementsValues,
  courseLevelValues,
  creditHoursValues,
  timeofDayValues,
} from "../../../../data/FilterSelectsData";

import "../../results.css";

import { Card, Button, Form } from "react-bootstrap";

const FiltersCard = (props) => {
  const handleChange = (e) => {
    console.log(e);

    if (e.target.name === "keyword") {
      console.log("keyword");
      props.setKeywordFilterValue(e.target.value);
    } else if (e.target.name === "courseLevel") {
      props.setLevelFilterValue(e.target.value);
    } else if (e.target.name === "creditHours") {
      props.setCreditsFilterValue(e.target.value);
    } else if (e.target.name === "timeofDay") {
      props.setTimeFilterValue(e.target.value);
    } else if (e.target.name === "requirements") {
      props.setRequirementsFilterValue(e.target.value);
    } else {
      console.log("nope");
    }
  };

  const handleFiltersSubmit = (e) => {
    e.preventDefault();

    props.setCourses(props.courses);

    const timeFilteredCourses = [];

    const filterByTime = () => {
      if (props.filters.timeofDay.value !== "") {
        props.displayedCourses.filter((course) =>
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
        props.displayedCourses.forEach((course) => {
          timeFilteredCourses.push(course);
        });
      }
    };

    const filterByCourseLevel = () => {
      console.log("its happening!!!!");
      console.log("cvvalue: ", props.filters.courseLevel.value);
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

      if (props.filters.courseLevel.value == 12) {
        console.log("low");
        return lowerLevelCourses;
      } else if (props.filters.courseLevel.value === 8) {
        console.log("mid");
        return middleLevelCourses;
      } else if (props.filters.courseLevel.value === 9) {
        console.log("high");
        return upperLevelCourses;
      } else if (props.filters.courseLevel.value === 10) {
        console.log("grad");
        return graduateLevelCourses;
      } else if (props.filters.courseLevel.value === "") {
        console.log("else");
        return timeFilteredCourses;
      }
      console.log("wahoo!");
    };

    const filterByCreditHours = (func) => {
      if (props.filters.creditHours.value !== "") {
        console.log("yep!");
        const filteredCourses = func.filter((course) => {
          return course.credits === props.filters.creditHours.value;
        });
        console.log("filteredCourses: ", filteredCourses);
        props.setCourses(filteredCourses);
      } else {
        console.log("filtered func: ", func);
        props.setCourses(func);
      }
    };

    filterByTime();
    console.log("time filtered: ", timeFilteredCourses);
    console.log("bycourselevel", filterByCourseLevel());
    filterByCreditHours(filterByCourseLevel());
  };

  const handleFiltersReset = (e) => {
    e.preventDefault();
    props.resetFilterValues();
    props.setCourses(props.courses);
  };

  return (
    <div>
      {/* hey sheens, thoughts on having this stick to the page as we scroll down?  */}

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Filter Results</Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Next Semester Only
          </Card.Subtitle>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Course Level
          </Card.Subtitle>
          <FilterSelect
            select_id={"courseLevel"}
            handleSelectChange={handleChange}
            selectValues={courseLevelValues}
            selectValue={props.filters.courseLevel.value}
          />
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Credit Hours
          </Card.Subtitle>
          <FilterSelect
            select_id={"courseLevel"}
            handleSelectChange={handleChange}
            selectValues={creditHoursValues}
            selectValue={props.filters.creditHours.value}
          />
          <br />
          <Card.Subtitle className="mb-2 text-muted">Time of Day</Card.Subtitle>
          <FilterSelect
            select_id={"courseLevel"}
            handleSelectChange={handleChange}
            selectValues={timeofDayValues}
            selectValue={props.filters.timeofDay.value}
          />
          <br />
          <br />

          <Button onClick={handleFiltersSubmit}>Apply Filters</Button>
          <Button onClick={handleFiltersReset}>Reset Filters</Button>
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
})(FiltersCard);
