import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  setInstructors,
  setInstructorNextSemesterFilterValue,
} from "../../../../actions/index";

import { Card, Button, Form } from "react-bootstrap";
import { Typography, Slider } from "@material-ui/core";

const ProfFiltersCard = (props) => {
  const [minSemestersTaught, setMinSemestersTaught] = useState(1);

  useEffect(() => {
    // applyFilters();
  }, []);

  const handleFiltersReset = (e) => {
    props.setInstructors(props.coursePage.instructors);
  };

  const handleSliderChange = (e, value) => {
    console.log(value);
  };

  const applyFilters = () => {
    // let availableInstructors = []

    const filterNextSemester = () => {
      const availableInstructors = props.coursePage.displayedInstructors.filter(
        (instructor) => {
          return (
            instructor.is_teaching_next_semester ===
            props.coursePage.filters.next_sem
          );
        }
      );
      return availableInstructors;
    };

    props.setInstructors(filterNextSemester());
  };

  const handleSwitchChange = (e) => {
    if (props.coursePage.filters.next_sem === 1) {
      props.setInstructorNextSemesterFilterValue(0);
    }
    if (props.coursePage.filters.next_sem === 0) {
      props.setInstructorNextSemesterFilterValue(1);
    }
  };

  return (
    <div className="mb-5">
      <Card>
        <Card.Body>
          <Card.Title>Filter/Sort</Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Next Semester Only
          </Card.Subtitle>
          <Form.Check
            type="switch"
            id="professor-filter-next-semester-switch"
            checked={props.coursePage.filters.next_sem === 1}
            value={props.coursePage.filters.next_sem}
            // label="Next Semester Only"
            onChange={handleSwitchChange}
          />
          <br />
          <Typography id="discrete-slider-always" gutterBottom>
            Avg. Class Size
          </Typography>
          <Slider
            // value={value}
            // defaultValue={80}
            // getAriaValueText={valuetext}
            defaultValue={10}
            aria-labelledby="discrete-slider-always"
            step={1}
            min={0}
            max={60}
            onChange={handleSliderChange}
            // marks={marks}
            valueLabelDisplay="auto"
          />
          <br />
          <br />
          <Typography id="slider" gutterBottom>
            Min. Semesters Taught
          </Typography>
          <Slider
            // getAriaValueText={valueLabelFormat}
            // valueLabelFormat={valueLabelFormat}
            onChange={handleSliderChange}
            defaultValue={10}
            step={1}
            min={0}
            max={60}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
          <br />
          <br />
          <Button onClick={applyFilters}>Apply Filters</Button>
          <Button onClick={handleFiltersReset}>Reset Filters</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    coursePage: state.coursePage,
  };
};

export default connect(mapStateToProps, {
  setInstructors,
  setInstructorNextSemesterFilterValue,
})(ProfFiltersCard);
