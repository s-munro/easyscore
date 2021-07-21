import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Button, Form } from "react-bootstrap";
import { Typography, Slider } from "@material-ui/core";

import { setInstructors } from "../../../../store/actions/fetchDataActions";
import {
  setInstructorNextSemesterFilterValue,
  resetInstructorFilters,
  setInstructorEasyScoreFilterValue,
  setInstructorPercentageAsFilterValue,
  setInstructorMinimumSemestersFilterValue,
} from "../../../../store/actions/filtersActions";



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
    const availableInstructors = props.coursePage.instructors.filter(
      (instructor) => {
        if (props.coursePage.filters.next_sem === 1) {
          return (
            instructor.is_teaching_next_semester ===
            props.coursePage.filters.next_sem
          );
        } else {
          return props.coursePage.instructors;
        }
      }
    );
    const filteredByRating = availableInstructors.filter((instructor) => {
      return instructor.rating >= props.coursePage.filters.ratingFilter;
    });
    const filteredByPercentageAs = filteredByRating.filter((instructor) => {
      return (
        instructor.average_grades[0] >= props.coursePage.filters.percentageAs
      );
    });
    const filteredByMinSemesters = filteredByPercentageAs.filter(
      (instructor) => {
        return (
          instructor.semesters_taught >=
          props.coursePage.filters.minSemestersTaught
        );
      }
    );
    props.setInstructors(filteredByMinSemesters);
  };

  const handleSwitchChange = (e) => {
    if (props.coursePage.filters.next_sem === 1) {
      props.setInstructorNextSemesterFilterValue(0);
    }
    if (props.coursePage.filters.next_sem === 0) {
      props.setInstructorNextSemesterFilterValue(1);
    }
  };

  const handleMinSemestersChange = (e, value) => {
    props.setInstructorMinimumSemestersFilterValue(value);
  };
  const handlePercentageAsChange = (e, value) => {
    props.setInstructorPercentageAsFilterValue(value);
  };
  const handleRatingChange = (e, value) => {
    props.setInstructorEasyScoreFilterValue(value);
  };

  useEffect(() => {
    handleFiltersReset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.coursePage.filters.next_sem,
    props.coursePage.filters.ratingFilter,
    props.coursePage.filters.percentageAs,
    props.coursePage.filters.minSemestersTaught,
  ]);

  return (
    <div className="row w-100">
      <Card className="col">
        <Card.Body className="row d-flex flex-column">
          <Card.Title className="filterCardTitle bold dark">
            Filter Professors
          </Card.Title>
          <hr></hr>
          <Typography
            className="mb-2 text-muted filter-card-text"
            id="next-sem-filter-text"
            gutterBottom
          >
            Avail. Next Term
          </Typography>

          <Form.Check
            type="switch"
            id="professor-filter-next-semester-switch"
            checked={props.coursePage.filters.next_sem === 1}
            value={props.coursePage.filters.next_sem}
            onChange={handleSwitchChange}
          />
          <br />
          <Typography
            className="mb-2 text-muted filter-card-text"
            id="easy-score-filter"
            gutterBottom
          >
            By Easy Score
          </Typography>
          <Slider
            id={"ratingFilter"}
            value={props.coursePage.filters.ratingFilter}
            aria-labelledby="easy-score-filter"
            step={1}
            min={0}
            max={100}
            name="ratingFilter"
            onChange={handleRatingChange}
            valueLabelDisplay="auto"
          />
          <br />
          <br />
          <Typography
            className="mb-2 text-muted filter-card-text"
            id="discrete-slider-always"
            gutterBottom
          >
            By Percentage of A's
          </Typography>
          <Slider
            id={"percentageAs"}
            value={props.coursePage.filters.percentageAs}
            aria-labelledby="discrete-slider-always"
            step={1}
            min={0}
            max={100}
            onChange={handlePercentageAsChange}
            name="percentageAs"
            valueLabelDisplay="auto"
          />
          <br />
          <br />
          <Typography
            className="mb-2 text-muted filter-card-text"
            id="slider"
            gutterBottom
          >
            By Min. Semesters Taught
          </Typography>
          <Slider
            id={"minSemestersTaught"}
            value={props.coursePage.filters.minSemestersTaught}
            onChange={handleMinSemestersChange}
            step={1}
            min={0}
            max={20}
            name="minSemestersTaught"
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
          <br />
          <br />
          <div className="row d-flex justify-content-around">
            <Button
              name="apply-filters"
              className="filterBtn"
              onClick={applyFilters}
            >
              Apply
            </Button>
            <Button
              name="reset-filters"
              className="filterBtn"
              onClick={handleFiltersReset}
            >
              Reset
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    coursePage: state.courses.coursePage,
  };
};

export default connect(mapStateToProps, {
  setInstructors,
  setInstructorNextSemesterFilterValue,
  resetInstructorFilters,
  setInstructorEasyScoreFilterValue,
  setInstructorPercentageAsFilterValue,
  setInstructorMinimumSemestersFilterValue,
})(ProfFiltersCard);
