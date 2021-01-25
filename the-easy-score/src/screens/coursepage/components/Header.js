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
    <div className="container">

      <header className="mt-5 testT">

        <div className="jumbo-score">
          {rating}
        </div>

        <div className="courseContentContainer">

            <div className="courseName">
              {course.full_code}: {course.name}
            </div>
 
            <div className="reqsContentContainer">
              
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
                        <p key={creditType} className="requirement">
                          {creditType}
                        </p>
                      );
                    })
                  : null}
            </div>

            <div className="course-page-credits-container">
             <div className="course-page-credits-title">Credits: </div>
             <div className="course-page-credits">
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
