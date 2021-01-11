import React from "react";

import { connect } from "react-redux";
import { setCourses, resetFilterValues } from "../../../../actions/index";

import CourseLevelPopover from "./popovercontent/CourseLevelPopover";
import RequirementsPopover from "./popovercontent/RequirementsPopover";
import CreditHoursPopover from "./popovercontent/CreditHoursPopover";
import TimeofDayPopover from "./popovercontent/TimeofDayPopover";

import "../../results.css";

import { Card, Button } from "antd";

const FiltersCard = (props) => {
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
      console.log("wahoo!");
    };

    const filterByCreditHours = (func) => {
      if (props.filters.creditHours.value !== "") {
        console.log("yep!");
        const filteredCourses = func.filter((course) => {
          return course.credits === props.filters.creditHours.value;
        });
        props.setCourses(filteredCourses);
      } else {
        props.setCourses(func);
      }
    };

    filterByTime();
    // console.log("time filtered: ", timeFilteredCourses);
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

      <Card title={"Filter Results By:"} style={{ width: 275 }}>
        <CourseLevelPopover />
        <br />
        <CreditHoursPopover />
        <br />
        {/* <RequirementsPopover />
        <br /> */}
        <TimeofDayPopover />
        <br />
        <br />

        <Button onClick={handleFiltersSubmit} style={{ color: "f5222d" }}>
          Apply Filters
        </Button>
        <Button onClick={handleFiltersReset} style={{ color: "f5222d" }}>
          Reset Filters
        </Button>
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

export default connect(mapStateToProps, { setCourses, resetFilterValues })(
  FiltersCard
);
