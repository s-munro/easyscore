import React from "react";
import ProfessorCard from "./ProfessorCard";
import NoResults from "../../../components/NoResults";

const Professors = (props) => {
  return (
    <div className="testTest col d-flex justify-content-center p-0">
      {props.currentInstructors.length > 0 ? (
        props.currentInstructors.map((instructor, index) => {
          return (
            <div
              className="row w-100 d-flex flex-column justify-content-center"
              key={index}
              // className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mb-5"
            >
              <ProfessorCard instructor={instructor} key={index} />
            </div>
          );
        })
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default Professors;
