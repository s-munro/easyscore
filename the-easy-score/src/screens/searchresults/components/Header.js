import React from "react";
import ResultsNumber from "../../../components/ResultsNumber";

const Header = ({ keyword, courses }) => {
  return (
    <header className="header">
      {/* LEFT THIRD OF HEADER  */}
      <div className="header-third-left-side">
        <div className="search-input-text-div">
          <ResultsNumber
            number={courses.length}
            results={"courses"}
            header={0}
          />
          <h2>'{keyword}'</h2>
        </div>
        <div className="filter-options">
          <div className="filter-options-title">
            <div className="icon">ICON</div>
            <div>Filter by:</div>
          </div>
          <div className="filters-container">
            <div>Course Level</div>
            <div>Credit Hours</div>
            <div>Time of Day</div>
            <div>Requirements</div>
          </div>
        </div>
      </div>
      {/* END LEFT THIRD OF HEADER */}

      {/* CENTER THIRD OF HEADER */}
      <div className="header-third-center">
        <div className="easy-score-left-explanation-key-div">
          <div className="score-and-text-wrapper">
            <div>97</div>
            <p>- Example Professor Easy Score</p>
          </div>
          <div className="score-and-text-wrapper">
            <div>96/100</div>
            <p>- Example Course Easy Score</p>
          </div>
        </div>
      </div>
      {/* END CENTER THIRD OF HEADER */}

      {/* RIGHT THIRD OF HEADER */}
      <div className="header-third-right-side">
        <div className="text-container">
          Loreeem ipsum dolor sit amet, consectetur adipisicing elit. Vel
          debitis obcaecati est mollitia! Deleniti eaque error debitis in,
          fugit, cupiditate.
        </div>
        <div className="course-days-explanation-key-container">
          <div className="day">M</div>
          <div className="day">T</div>
          <div className="day">W</div>
          <div className="day">R</div>
          <div className="day">F</div>
          Course Day Indicators
        </div>
      </div>
    </header>
  );
};

export default Header;
