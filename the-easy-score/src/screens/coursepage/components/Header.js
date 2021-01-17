import React from "react";
import ResultsNumber from "../../../components/ResultsNumber";
import "../course.css";

const Header = ({ course }) => {
  return (
    <div className="container">
      <header className="row mt-5">
        <div className="jumbo-score col-sm">95</div>
        <div className="col-lg">
          <div className="col-sm">
            {course.full_code}: {course.name}
          </div>
          <div className="col-sm">Credits: {course.credits}</div>
        </div>
        <hr />

        {/* <div className="header-third-left-side">
          <div className="search-input-text-div">
            <ResultsNumber
              number={course.instructors.length}
              results={"instructors"}
              header={0}
            />
            <h2>{course.full_code}</h2>
            <h3>{course.name}</h3>
            <h3>{course.rating}</h3>
          </div>
        </div> */}
      </header>
    </div>
  );
};

export default Header;
