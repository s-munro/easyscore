import React from "react";
import { Select, Button } from "antd";
import { connect } from "react-redux";
import { setCreditsFilterValue } from "../../../../../actions/index";

const CreditHoursPopover = (props) => {
  const { Option } = Select;

  const handleChange = (e) => {
    props.setCreditsFilterValue(e);
  };

  // <option value="">Credit Hours</option>
  // <option value={1}>1</option>
  // <option value={2}>2</option>
  // <option value={3}>3</option>
  // <option value={4}>4</option>
  // <option value={5}>5</option>
  // <option value={6}>6</option>
  // <option value={7}>7+</option>

  return (
    <div>
      <Select
        style={{ width: 200 }}
        placeholder="Filter Credit Hours"
        onChange={handleChange}
      >
        <Option value="">Any Credit Hours</Option>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
        <Option value={6}>6</Option>
        <Option value={7}>7+</Option>
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

export default connect(mapStateToProps, { setCreditsFilterValue })(
  CreditHoursPopover
);
