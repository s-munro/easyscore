import React from "react";
import ProfessorCard from "./ProfessorCard";

const Professors = (props) => {
  return (
    <div className="row">
      {props.currentInstructors.map((instructor, index) => {
        return (
          <div
            key={index}
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-5"
          >
            <ProfessorCard instructor={instructor} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Professors;
