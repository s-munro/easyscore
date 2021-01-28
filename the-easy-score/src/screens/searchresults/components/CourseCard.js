import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "../results.css";

const CourseCard = ({ course }) => {
  const score = Math.round(course.rating);

  return (
    // <div style={{ backgroundColor: "red" }}>Hi</div>
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
              let creditType = "";
              if (credit === 0) {
                creditType = "A&H";
              } else if (credit === 1) {
                creditType = "Diversity in U.S.";
              } else if (credit === 2) {
                creditType = "S&H Credit";
              } else if (credit === 3) {
                creditType = "N&M Credit";
              } else if (credit === 4) {
                creditType = "World Culture";
              } else if (credit === 5) {
                creditType = "Public Oral Comm.";
              } else if (credit === 6) {
                creditType = "English Composition";
              } else if (credit === 7) {
                creditType = "Mathematical Modeling";
              } else if (credit === 8) {
                creditType = "300+ Level";
              } else if (credit === 9) {
                creditType = "400+ Level";
              } else if (credit === 10) {
                creditType = "Grad";
              } else if (credit === 11) {
                creditType = "Intensive Writing";
              } else if (credit === 7) {
                creditType = "Mathematical Modeling";
              } else if (credit === 12) {
                creditType = "100-299 Level";
              } else if (credit === 13) {
                creditType = "Honors";
              } else if (credit === "0GENEDMM") {
                creditType = "World Language";
              } else return null;
              return (
                <p key={creditType} className="requirement filterCardReq">
                  {creditType}
                </p>
              );
            })}
          </div>
        </div>
        <div className="course-card-click-more d-flex justify-content-end">
          <Link
            to={`/courses/${course.full_code}_${course.name.replace(
              / /g,
              "_"
            )}`}
          >
            <div className="d-flex align-items-center small-icon-font">
              <span className="padding-right">More</span>
              {/* <i class="fas fa-arrow-right"></i> */}
              <ArrowForwardIcon
                fontSize="inherit"
                className="padding-right-2"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
