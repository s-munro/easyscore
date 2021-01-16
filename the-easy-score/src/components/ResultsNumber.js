import React from "react";

const ResultsNumber = ({ number, results, header, keyword }) => {
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
        <span>{keyword}</span>
      </div>
    );
  }
  // return (
  //   <div>
  //     {{ header } === 0 ? (
  //       <div>
  //         Showing ({number}) {results} for
  //       </div>
  //     ) : (
  //       <div>
  //         Loading ({number}) {results}...
  //       </div>
  //     )}
  //   </div>
  // );
};

export default ResultsNumber;
