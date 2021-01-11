import React from "react";

import { connect } from "react-redux";
import { setCourses, resetFilterValues } from "../../../../actions/index";

import CourseLevelPopover from "./popovercontent/CourseLevelPopover";
import RequirementsPopover from "./popovercontent/RequirementsPopover";
import CreditHoursPopover from "./popovercontent/CreditHoursPopover";
import TimeofDayPopover from "./popovercontent/TimeofDayPopover";

import { Card, Button } from "antd";

const FiltersCard = (props) => {
  // const handleFiltersSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(props.filters);
  //   console.log(props.displayedCourses);
  // };

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
        <RequirementsPopover />
        <br />
        <TimeofDayPopover />
        <br />
        <br />

        {/* <Button onClick={handleFiltersSubmit}>Apply Filters</Button> */}
        <Button onClick={handleFiltersReset}>Reset Filters</Button>
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
