import React from "react";
import { connect } from "react-redux";
import { Button, Select } from "antd";

import { setRequirementsFilterValue } from "../../../../../actions/index";

const RequirementsPopover = (props) => {
  const { Option } = Select;

  const handleChange = (e) => {
    console.log(e);
    props.setRequirementsFilterValue(e);
  };

  return (
    <div>
      <Select
        style={{ width: 200 }}
        placeholder="Filter by Fulfilled Requirements"
        onChange={handleChange}
      >
        <Option value="">Any Requirement</Option>
        <Option value={0}>A&H Credit</Option>
        <Option value={1}>Diversity in U.S. Credit</Option>
        <Option value={6}>English Composition</Option>
        <Option value={11}>Intensive Writing</Option>
        <Option value={7}>Mathematical Model</Option>
        <Option value={3}>N&M Credit</Option>
        <Option value={5}>Public Oral Communication</Option>
        <Option value={2}>S&H Credit</Option>
        <Option value={4}>World Culture Credit</Option>
        <Option value="0GENEDMM">World Landuage Class</Option>
      </Select>
      <br />
      <Button>Submit</Button>
      <Button>Clear</Button>
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

export default connect(mapStateToProps, { setRequirementsFilterValue })(
  RequirementsPopover
);
