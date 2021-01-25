import React from "react";


const ResultsNumber = ({
  number,
  results,
  header,
  full_code,
  course_name,
  keyword,
}) => {
  if (header === 0) {
    return (
      <div className="showingResultsText">
        Showing <b>{number} {results}</b> for
        <br />
        <span className="coursePageKeyword">'{keyword}'</span>
      </div>
    );
  } else {
    return (
      <div className="showingInstructorsText">
        Showing <b>{number} {results}</b> for <br />
        <span className="coursePageKeyword">
          {full_code} {course_name} 
        </span>
      </div>
    );
  }
};

export default ResultsNumber;
