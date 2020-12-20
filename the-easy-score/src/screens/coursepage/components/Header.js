import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-third-left-side">
          <div className="search-input-text-div">
            <h3>Showing instructors for</h3>
            <h2>'HPER-N325'</h2>
            <h3>Food Chem Laboratory</h3>
          </div>
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

        <div className="header-third-center">
          <div className="course-easy-score-div">
            <div>90</div>
            <div>Course EasyScore</div>
          </div>
        </div>

        <div className="header-third-right-side">
          <div className="text-container">
            Loreeem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            debitis obcaecati est mollitia! Deleniti eaque error debitis in,
            fugit, cupiditate.
          </div>
          <div className="course-days-explanation-key-container">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>R</div>
            <div>F</div>
            Course Day Indicators
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
