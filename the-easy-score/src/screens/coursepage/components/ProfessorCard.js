import React, { useEffect, useState } from "react";
import ScoreDoughnut from "./ScoreDoughnut";
import GradeDistChart2 from "./GradeDistChart2";

import { Card } from "react-bootstrap";

import "../course.css";

const ProfessorCard = ({ instructor }) => {
  // console.log("instructor: ", instructor);
  const [transformedName, setTransformedName] = useState(instructor.name);

  useEffect(() => {
    transformProfessorName(instructor.name);
  }, [instructor]);

  const transformProfessorName = (instructorName) => {
    console.log("doing it!!!");
    const nameArray = instructorName.split(",");
    const firstName = nameArray[0];
    const lastNameString = nameArray[1];
    const lastNameInitial = lastNameString.charAt(0);
    setTransformedName(`${firstName}, ${lastNameInitial}.`);
  };

  return (
    <div className="w-100 prof-card">
      <Card>
        <div className="container row">
          <div className="col profCardRightHalf">
            <div className="row profName">{transformedName}</div>
            <div className="row profCardContentRightHalf">
              <div className="col align-items-center doughnutContainer">
                <ScoreDoughnut easyScore={instructor.rating} />
              </div>
              <div className="col profCardMiddle ">
                <div>Semesters Taught: <b>{instructor.semesters_taught}</b></div>
                <div>
                  Avg. Class Size: <b>{instructor.average_number_of_students}</b>
                </div>
                <div>
                  Avail. Next Semester:{" "}
                  {instructor.is_teaching_next_semester === 0 ? (
                    <span>
                      <b>False</b>
                    </span>
                  ) : (
                    <span>
                      <b>True</b>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <GradeDistChart2 average_grades={instructor.average_grades} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfessorCard;
