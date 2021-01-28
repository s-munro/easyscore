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

          <div className="row w-100 d-flex justify-content-start mt-0 align-items-center reqsContentContainer">
            <div className="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-5 reqsContent-requirements-title">
              Requirements:{" "}
            </div>
            <div className="col-8 d-flex align-items-center reqTagsContainer">
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
                      <p key={creditType} className="col-12 m-0 requirements">
                        {creditType}
                      </p>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="row w-100 course-page-credits-container">
            <div className="col-3 course-page-credits-title">Credits: </div>
            <div className="col-8 pl-0 course-page-credits">
              <b> {course.credits}</b>
            </div>
          </div>
        </div>

        <hr />
      </header>
    </div>
  );
};

export default Header;
