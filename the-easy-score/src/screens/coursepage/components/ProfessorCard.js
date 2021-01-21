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
      <Card className="container row prof-card">
      

          <div className="row profName">{transformedName} 2019-2021</div>


          <div className="row profCardContentContainer">

            <div className="align-items-center profCardRightContentHalf doughnutContainer">
              <ScoreDoughnut easyScore={instructor.rating} />
            </div>

            <div className="profCardRightContentHalf profCardMiddle">
              <div>Semesters Taught: <b>{instructor.semesters_taught}</b></div>
              <div>Avg. Class Size: <b>{instructor.average_number_of_students}</b></div>
              <div>
                  Avail. Next Term:{" "}
                  {instructor.is_teaching_next_semester === 0 ? (
                    <span>
                      <b>No</b>
                    </span>
                  ) : (
                    <span>
                      <b>Yes</b>
                    </span>
                  )}
              </div>
            </div>

            <div className="profCardEnd">
              <GradeDistChart2 average_grades={instructor.average_grades} />
            </div>

          </div>   



      </Card>

  );
};

export default ProfessorCard;
