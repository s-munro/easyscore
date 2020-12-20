import React from "react";
import "../styles.css";

import CourseCardInstructor from "./CourseCardInstructor";
const mockCourse = {};

const CourseCard = ({ course }) => {
  console.log("coursecard course: ", course);
  return (
    <div className="course-card">
      <div className="course-card-top-half">
        <div className="top-half-top-twothirds">
          <div className="top-half-top-third-left-side">98/100</div>
          <div className="top-half-top-third-right-side">
            <div className="explanation">Easy Score Course Average</div>
            <div className="explanation">**Based on grade distribution</div>
          </div>
        </div>
        <div className="top-half-bottom-third">
          HPER-N324 FOOD CHEMISTRY LABORATORY
        </div>
      </div>
      <div className="course-card-bottom-half">
        <div>{course.instructors.length} Professors available</div>
        <div className="course-card-professors-container">
          {course.instructors.length > 3
            ? course.instructors.slice(0, 3).map((professor) => {
                return (
                  <CourseCardInstructor
                    professor={professor}
                    key={professor.name}
                  />
                );
              })
            : course.instructors.map((professor) => {
                return (
                  <CourseCardInstructor
                    professor={professor}
                    key={professor.name}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
