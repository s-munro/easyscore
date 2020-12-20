import React from "react";

import "../styles.css";

const CourseCardInstructor = ({ professor }) => {
  return (
    <div className="professor-main-container">
      <div className="professor-score">{professor.rating}</div>
      <div>{professor.name}</div>
      <div className="grade">A: {professor.average_grades[0]}%</div>
      <div className="grade">B: {professor.average_grades[1]}%</div>
    </div>
  );
};

export default CourseCardInstructor;
