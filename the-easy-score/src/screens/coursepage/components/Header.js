import React from "react";
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
      </header>
    </div>
  );
};

export default Header;
