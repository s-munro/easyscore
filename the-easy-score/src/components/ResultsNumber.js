import React from "react";

const ResultsNumber = ({ number, results, header, full_code, course_name }) => {
  console.log(header);

  if (header === 0) {
    return (
      <div>
        Showing ({number}) {results} for
      </div>
    );
  } else {
    return (
      <div>
        Showing {number} {results} for <br />
        <span>
          {full_code} {course_name}
        </span>
      </div>
    );
  }
};

export default ResultsNumber;
