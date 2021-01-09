import React from "react";
import { Link } from "react-router-dom";
import "../results.css";

import CourseCardInstructor from "./CourseCardInstructor";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-card-top-half">
        <div className="top-half-top-twothirds">
          <div className="top-half-top-third-left-side">
            <div className="course-rating">{course.rating}</div>
          </div>
          <div className="top-half-top-third-right-side">
            <div className="explanation">
              Professors scored: {course.instructors.length}
            </div>
          </div>
        </div>
        <Link
          to={`/courses/${course.full_code}_${course.name.replace(/ /g, "_")}`}
        >
          <div className="top-half-bottom-third">
            {course.full_code} {course.name}
          </div>
        </Link>
      </div>
      <div className="course-card-bottom-half">
        <div className="comparisonNum">Credit Hours ({course.credits})</div>
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
