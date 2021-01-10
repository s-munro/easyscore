import React from "react";

import { connect } from "react-redux";
import { setCourses } from "../../../../actions/index";

import CourseLevelPopover from "./popovercontent/CourseLevelPopover";
import RequirementsPopover from "./popovercontent/RequirementsPopover";
import CreditHoursPopover from "./popovercontent/CreditHoursPopover";
import TimeofDayPopover from "./popovercontent/TimeofDayPopover";

import SearchForm from "../../../home/components/SearchForm";

import { Card, Popover, Button } from "antd";

const FiltersCard = (props) => {
  const handleFiltersSubmit = (e) => {
    e.preventDefault();
    props.setCourses([]);
  };

  const handleFiltersReset = (e) => {
    e.preventDefault();
    props.setCourses(props.courses);
  };

  return (
    <div>
      {/* hey sheens, thoughts on having this stick to the page as we scroll down?  */}

      <Card title={"Filter Results By:"} style={{ width: 300 }}>
        <CourseLevelPopover />
        <br />
        <CreditHoursPopover />
        <br />
        <RequirementsPopover />
        <br />
        <TimeofDayPopover />
        <br />

        <Popover
          placement="bottomLeft"
          title={"Filter by Time of Day"}
          content={TimeofDayPopover}
          trigger="click"
        >
          <Button>Time of Day </Button>
        </Popover>

        <br />
        <br />

        <Button onClick={handleFiltersSubmit}>Apply Filters</Button>
        <br />
        <Button onClick={handleFiltersReset}>Reset Filters</Button>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    displayedCourses: state.displayedCourses,
  };
};

export default connect(mapStateToProps, { setCourses })(FiltersCard);
