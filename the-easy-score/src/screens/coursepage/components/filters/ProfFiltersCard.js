import React from "react";
import { connect } from "react-redux";

import { Card, Button, Form } from "react-bootstrap";

const ProfFiltersCard = () => {
  const handleFiltersReset = (e) => {
    console.log(e);
  };

  const handleFiltersSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="mb-5">
      <Card>
        <Card.Body>
          <Card.Title>Filter Results</Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">
            Next Semester Only
          </Card.Subtitle>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
          <br />
          <Form.Label>Avg. Class Size</Form.Label>
          <Form.Control type="range" />
          <br />
          <Form.Label>Semesters Taught</Form.Label>
          <Form.Control type="range" />
          <br />
          <Button onClick={handleFiltersSubmit}>Apply Filters</Button>
          <Button onClick={handleFiltersReset}>Reset Filters</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default connect()(ProfFiltersCard);
