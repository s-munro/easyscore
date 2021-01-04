import React from "react";
import "../course.css";

const ProfessorCard = ({ instructor }) => {
  console.log("professorcard professor: ", instructor);
  return (
    <div className="professor-card">
      {/* LEFT PORTION OF PROFESSOR CARD  */}
      <div className="professor-card-left-third-container">
        <div className="professor-card-left-third-top-portion">
          <div className="professor-card-easy-score">{instructor.rating}</div>
          <div className="left-third-info-text-container">
            <div className="explanation">Prof EasyScore</div>
            <div className="explanation">Based on grade distribution</div>
          </div>
        </div>
        <div className="professor-card-professor-name">{instructor.name}</div>
      </div>

      {/* CENTRAL PORTION OF PROFESSOR CARD */}
      <div className="professor-card-center-container">
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">A</div>
          <div className="grade-percentage-grade-percentage">
            {instructor.average_grades[0]}%
          </div>
        </div>
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">B</div>
          <div className="grade-percentage-grade-percentage">
            {instructor.average_grades[1]}%
          </div>
        </div>
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">C</div>
          <div className="grade-percentage-grade-percentage">
            {instructor.average_grades[2]}%
          </div>
        </div>
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">D</div>
          <div className="grade-percentage-grade-percentage">
            {instructor.average_grades[3]}%
          </div>
        </div>
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">F/I</div>
          <div className="grade-percentage-grade-percentage">
            N/A
            {/* {100 -
              (instructor.average_grades[0] +
                instructor.average_grades[1] +
                instructor.average_grades[2] +
                instructor.average_grades[3])} */}
          </div>
        </div>
      </div>

      {/* RIGHT PORTION OF PROFESSOR CARD */}
      <div className="professor-card-right-third-container">
        <div className="card-right-third-top-half">
          <div className="card-semesters-taught-title">Semesters Taught</div>
          <div className="card-semesters-taught-number">
            {instructor.semesters_taught}
          </div>
        </div>
        <div className="card-right-third-bottom-half">
          <div className="card-class-size-title">Avg. Class Size</div>
          <div className="card-class-size-number">
            {instructor.average_number_of_students}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorCard;
