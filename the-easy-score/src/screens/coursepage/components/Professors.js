import React from "react";
import ProfessorCard from "./ProfessorCard";

const Professors = (props) => {
  // console.log("professors prof", props.currentInstructors);
  return (
    <div className="row ">
      {props.currentInstructors.map((instructor, index) => {
        return (
          <div
            key={index}
            className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5"
          >
            <ProfessorCard className="profTest" instructor={instructor} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Professors;
