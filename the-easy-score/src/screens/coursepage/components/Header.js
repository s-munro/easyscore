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
    <div className="col-12 mt-3 pr-0">
      <header className="row w-100">
        <div className="col m-0 jumbo-score">{rating}</div>

        <div className="col courseContentContainer pr-0 mr-0">
          <div className="row w-100 p-0 courseName">
            <div className="col courseName">
              {course.full_code}: {course.name}
            </div>
          </div>

          <div className="row w-100 d-flex justify-content-start mt-0 align-items-center reqsContentContainer hide-on-450">
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-5 mr-1 reqsContent-requirements-title">
              Requirements:{" "}
            </div>
            <div className="col-xl-10 col-lg-9 col-md-9 col-sm-12 col-12 d-flex flex-wrap align-items-center justify-content-start reqTagsContainer mobile-hide-">
              {showFulfilled === true
                ? course.credits_fulfilled.map((credit, i) => {
                  switch (credit) {
                    case "0":
                      return <div key={i} className="requirements">A&H<span className="lightgray"> |</span></div>;
                    case 1:
                      return <div key={i} className="requirements">Diversity in U.S.<span className="lightgray"> |</span></div>;
                    case 2:
                      return <div key={i} className="requirements">S&H Credit<span className="lightgray"> |</span></div>;
                    case 3:
                      return <div key={i} className="requirements">N&M Credit<span className="lightgray"> |</span></div>;
                    case 4:
                      return <div key={i} className="requirements">World Culure<span className="lightgray"> |</span></div>;
                    case 5:
                      return <div key={i} className="requirements">Public Oral Comm.<span className="lightgray"> |</span></div>;
                    case 6:
                      return <div key={i} className="requirements">English Composition<span className="lightgray"> |</span></div>;
                    case 7:
                      return <div key={i} className="requirements">Mathematical Modeling<span className="lightgray"> |</span></div>;
                    case 8:
                      return <div key={i} className="requirements">300+ Level<span className="lightgray"> |</span></div>;
                    case 9:
                      return <div key={i} className="requirements">400+ Level<span className="lightgray"> |</span></div>;
                    case 10:
                      return <div key={i} className="requirements">Grad<span className="lightgray"> |</span></div>;
                    case 11:
                      return <div key={i} className="requirements">Intensive Writing<span className="lightgray"> |</span></div>;
                    case 12:
                      return <div key={i} className="requirements">100-299 Level<span className="lightgray"> |</span></div>;
                    case 13:
                      return <div key={i} className="requirements">Honors<span className="lightgray"> |</span></div>;
                    case "0GENEDMM":
                      return <div key={i} className="requirements">World Language<span className="lightgray"> |</span></div>;
                    default:
                      return null;
                  }
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
