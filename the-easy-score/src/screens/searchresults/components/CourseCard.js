import React from "react";
import { Link } from "react-router-dom";
import "../results.css";

import CourseCardInstructor from "./CourseCardInstructor";

const CourseCard = ({ course }) => {
  const score = Math.round(course.rating);

  return (
    // <div style={{ backgroundColor: "red" }}>Hi</div>
    <div className="course-card w-100">
      <div className="course-card-top-portion">
        <div className="couse-card-top-portion-left-side">
          <div className="course-card-easyscore">{score}</div>
        </div>

        <div className="couse-card-top-portion-right-side">
          <div className="course-card-credits-container">
            <div className="course-card-credits-title">Credits</div>
            <div className="course-card-credits">{course.credits}</div>
          </div>

          <div className="course-card-professors-scored-container">
            <div className="course-card-professors-scored-title">
              Professors scored
            </div>
            <div className="course-card-professors-scored">
              {course.instructors.length}
            </div>
          </div>
        </div>
      </div>

      <div className="course-card-bottom-sections">
        <div className="course-card-course-title">
          {course.full_code}: {course.name}
        </div>
        <div className="course-card-click-more">
          <Link
            to={`/courses/${course.full_code}_${course.name.replace(
              / /g,
              "_"
            )}`}
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
