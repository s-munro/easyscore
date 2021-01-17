import React from "react";
import "../course.css";

const ProfessorCard = ({ instructor }) => {
  return (
    <div className="w-100">
      <div>
        {instructor.rating}
        {instructor.name}
        {instructor.average_grades[0]}%{instructor.average_grades[1]}%
        {instructor.average_grades[2]}%{instructor.average_grades[3]}%
        {instructor.semesters_taught}
        {instructor.average_number_of_students}
      </div>
    </div>
  );
};

export default ProfessorCard;
