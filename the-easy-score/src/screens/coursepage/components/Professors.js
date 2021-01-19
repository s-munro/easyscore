import React from "react";
import ProfessorCard from "./ProfessorCard";

const Professors = (props) => {
  return (
    <div className="row justify-content-center">
      {props.currentInstructors.map((instructor, index) => {
        return (
          <div
            key={index}
            className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5"
          >
            <ProfessorCard instructor={instructor} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Professors;