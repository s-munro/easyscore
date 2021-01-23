import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setInstructors } from "../../../../actions/fetchDataActions";

import {
  setInstructorNextSemesterFilterValue,
  resetInstructorFilters,
} from "../../../../actions/filtersActions";

import { Card, Button, Form } from "react-bootstrap";
import { Typography, Slider } from "@material-ui/core";

const ProfFiltersCard = (props) => {
  const handleFiltersReset = (e) => {
    props.setInstructors(
      props.coursePage.instructors.filter((instructor) => {
        return instructor.is_teaching_next_semester === 1;
      })
    );
    props.resetInstructorFilters();
  };

  const applyFilters = (semesterValue) => {
    // let availableInstructors = []

    const filterNextSemester = (semesterValue) => {
      const availableInstructors = props.coursePage.instructors.filter(
        (instructor) => {
          return instructor.is_teaching_next_semester === semesterValue;
        }
      );
      return availableInstructors;
    };

    props.setInstructors(filterNextSemester(semesterValue));
  };

  const handleSwitchChange = (e) => {
    if (props.coursePage.filters.next_sem === 1) {
      props.setInstructorNextSemesterFilterValue(0);
      applyFilters(0);
    }
    if (props.coursePage.filters.next_sem === 0) {
      props.setInstructorNextSemesterFilterValue(1);
      applyFilters(1);
    }
  };

  const handleSliderChange = (e) => {
    console.log(e);
  };

  useEffect(() => {
    handleFiltersReset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-5">
      <Card>
        <Card.Body>
          <Card.Title className="filterCardTitle">Filter</Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Avail. Next Term
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
          <Typography
            className="mb-2 text-muted"
            id="easy-score-filter"
            gutterBottom
          >
            By Easy Score
          </Typography>
          <Slider
            // value={value}
            // defaultValue={80}
            // getAriaValueText={valuetext}
            defaultValue={10}
            aria-labelledby="easy-score-filter"
            step={1}
            min={0}
            max={60}
            onChange={handleSliderChange}
            // marks={marks}
            valueLabelDisplay="auto"
          />
          <br />
          <br />
          <Typography
            className="mb-2 text-muted"
            id="discrete-slider-always"
            gutterBottom
          >
            By Percentage of A's
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
          <Typography className="mb-2 text-muted" id="slider" gutterBottom>
            By Min. Semesters Taught
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
          {/* <Button className="filterBtn" onClick={applyFilters}>
            Apply
          </Button> */}
          <Button className="filterBtn" onClick={handleFiltersReset}>
            Reset
          </Button>
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
  resetInstructorFilters,
})(ProfFiltersCard);
