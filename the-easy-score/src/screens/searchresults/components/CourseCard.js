import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import "../results.css";

const CourseCard = ({ course }) => {
  const score = Math.round(course.rating);

  return (
    <div className="course-card course-cardSpace w-100">
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

        <div className="reqsTags">
          <div className="reqsContainer filterCardReqContainer">
            {course.credits_fulfilled.map((credit) => {
              switch (credit) {
                case "0":
                  return <div>A&H</div>;
                case 1:
                  return <div>Diversity in U.S.</div>;
                case 2:
                  return <div>S&H Credit</div>;
                case 3:
                  return <div>N&M Credit</div>;
                case 4:
                  return <div>World Culure</div>;
                case 5:
                  return <div>Public Oral Comm.</div>;
                case 6:
                  return <div>English Composition</div>;
                case 7:
                  return <div>Mathematical Modeling</div>;
                case 8:
                  return <div>300+ Level</div>;
                case 9:
                  return <div>400+ Level</div>;
                case 10:
                  return <div>Grad</div>;
                case 11:
                  return <div>Intensive Writing</div>;
                case 12:
                  return <div>100-299 Level</div>;
                case 13:
                  return <div>Honors</div>;
                case "0GENEDMM":
                  return <div>World Language</div>;
                default:
                  return null;
              }
            })}
          </div>
        </div>
        <div className="course-card-click-more d-flex align-items-end justify-content-end fixed">
          <Link
            to={`/courses/${course.full_code}_${course.name.replace(
              / /g,
              "_"
            )}`}
            className="no-hover"
          >
            <div className="small-icon-font absolute-bottom-right-2 slide absolute-bottom-right">
              <span className="padding-right">More</span>
              <ArrowForwardIcon
                fontSize="inherit"
                className="slide padding-right-2"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
