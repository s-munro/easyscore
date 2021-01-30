import React, { useState, useEffect } from "react";
import "../course.css";

const Header = ({ course }) => {
  const [showFulfilled, setShowFulfilled] = useState(false);
  const [rating, setRating] = useState(course.rating);
  // const [creditType, setCreditType] = useState("");

  useEffect(() => {
    if (!course.credits_fulfilled) {
      return setShowFulfilled(false);
    }
    if (course.credits_fulfilled) {
      setShowFulfilled(true);
    }
    setRating(Math.round(course.rating));
  }, [course]);

  return (
    <div className="col-12 mt-3">
      <header className="row w-100">
        <div className="col m-0 jumbo-score">{rating}</div>

        <div className="col courseContentContainer">
          <div className="row w-100 p-0 courseName">
            <div className="col courseName">
              {course.full_code}: {course.name}
            </div>
          </div>

          <div className="row w-100 d-flex justify-content-start mt-0 align-items-center reqsContentContainer hide-on-450">
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5 mr-1 reqsContent-requirements-title">
              Requirements:{" "}
            </div>
            <div className="col-xl-10 col-lg-9 col-md-9 col-sm-12 col-12 d-flex flex-wrap align-items-center justify-content-start reqTagsContainer">
              {showFulfilled === true
                ? course.credits_fulfilled.map((credit) => {
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
                      <p key={creditType} className="requirements">
                        {creditType} <span className="lightgray"> |</span>
                      </p>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="row w-100 course-page-credits-container">
            <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-3 mr-2 course-page-credits-title mobile-450-margin-right">
              Credits:{" "}
            </div>
            <div className="col-2 pl-0 course-page-credits">
              {course.credits}
            </div>
          </div>
        </div>

        <hr />
      </header>
    </div>
  );
};

export default Header;
