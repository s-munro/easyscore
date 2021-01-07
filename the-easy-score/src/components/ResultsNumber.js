import React from "react";

const ResultsNumber = ({ number, results, header }) => {
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
        Loading ({number}) {results}...
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
