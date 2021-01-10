import React from "react";
import { connect } from "react-redux";
import { setLevelFilterValue } from "../../../../../actions/index";
import { Select, Button } from "antd";

const CourseLevelPopover = (props) => {
  const { Option } = Select;

  const handleChange = (e) => {
    props.setLevelFilterValue(e);
  };

  return (
    <div>
      <Select
        style={{ width: 200 }}
        placeholder="Filter Course Level"
        onChange={handleChange}
      >
        <Option value="">Any Course Level</Option>
        <Option value={12}>100-299</Option>
        <Option value={8}>300-399</Option>
        <Option value={9}>400-499</Option>
        <Option value={10}>Graduate Level Courses</Option>
        <Option value={13}>Honors Level Courses</Option>
      </Select>
      <br />
      <Button>Submit</Button>
      <Button>Clear</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    courses: state.courses,
    displayedCourses: state.displayedCourses,
  };
};

export default connect(mapStateToProps, { setLevelFilterValue })(
  CourseLevelPopover
);
