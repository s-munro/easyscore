import React from "react";
import { connect } from "react-redux";
import { setLevelFilterValue, setCourses } from "../../../../../actions/index";
import { Select, Button, Typography } from "antd";

const CourseLevelPopover = (props) => {
  const { Title } = Typography;

  const { Option } = Select;

  const handleChange = (e) => {
    props.setLevelFilterValue(e);
  };

  // const handleClear = (e) => {
  //   e.preventDefault();
  //   props.setLevelFilterValue("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lowerLevelCourses = props.displayedCourses.filter((course) => {
      return course.code <= 299;
    });
    const middleLevelCourses = props.displayedCourses.filter((course) => {
      return course.code >= 300 && course.code <= 399;
    });

    const upperLevelCourses = props.displayedCourses.filter((course) => {
      return course.code >= 400 && course.code <= 499;
    });

    const graduateLevelCourses = props.displayedCourses.filter((course) => {
      return course.code > 499;
    });

    const setArrayByCourseLevel = () => {
      if (props.filters.courseLevel.value === 12) {
        return lowerLevelCourses;
      } else if (props.filters.courseLevel.value === 8) {
        return middleLevelCourses;
      } else if (props.filters.courseLevel.value === 9) {
        return upperLevelCourses;
      } else if (props.filters.courseLevel.value === 10) {
        return graduateLevelCourses;
      }
    };

    props.setCourses(setArrayByCourseLevel());
  };
  return (
    <div>
      <Title level={5}>Filter Course Level</Title>
      <Select
        style={{ width: 200 }}
        placeholder="Filter Course Level"
        onChange={handleChange}
        value={props.filters.courseLevel.value}
        className="ant-select-override"
      >
        <Option value="">Any Course Level</Option>
        <Option value={12}>100-299</Option>
        <Option value={8}>300-399</Option>
        <Option value={9}>400-499</Option>
        <Option value={10}>Graduate Level Courses</Option>
      </Select>
      <br />
      {/* <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleClear}>Clear</Button> */}
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

export default connect(mapStateToProps, { setLevelFilterValue, setCourses })(
  CourseLevelPopover
);
