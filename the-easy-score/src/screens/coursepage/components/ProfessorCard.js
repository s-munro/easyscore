import React from "react";
import "../styles.css";

const ProfessorCard = ({ instructor }) => {
  console.log("professorcard professor: ", instructor);
  return (
    <div className="professor-card">
      {/* LEFT PORTION OF PROFESSOR CARD  */}
      <div className="professor-card-left-third-container">
        <div className="professor-card-left-third-top-portion">
          <div className="professor-card-easy-score">92</div>
          <div className="left-third-info-text-container">
            <div className="explanation">Easy Score Course Average</div>
            <div className="explanation">**Based on grade distribution</div>
          </div>
        </div>
        <div className="professor-card-professor-name">Instructor name</div>
      </div>

      {/* CENTRAL PORTION OF PROFESSOR CARD */}
      <div className="professor-card-center-container">
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">A</div>
          <div className="grade-percentage-grade-percentage">23%</div>
        </div>
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">B</div>
          <div className="grade-percentage-grade-percentage">30%</div>
        </div>
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">C</div>
          <div className="grade-percentage-grade-percentage">40%</div>
        </div>
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">D</div>
          <div className="grade-percentage-grade-percentage">5%</div>
        </div>
        <div className="professor-card-grade-percentage-container">
          <div className="grade-percentage-grade-letter">F</div>
          <div className="grade-percentage-grade-percentage">2%</div>
        </div>
      </div>

      {/* RIGHT PORTION OF PROFESSOR CARD */}
      <div className="professor-card-right-third-container">
        <div className="card-right-third-top-half">
          <div className="card-semesters-taught-title">Semesters Taught</div>
          <div className="card-semesters-taught-number">4</div>
        </div>
        <div className="card-right-third-bottom-half">
          <div className="card-class-size-title">Avg. Class Size</div>
          <div className="card-class-size-number">24</div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorCard;
