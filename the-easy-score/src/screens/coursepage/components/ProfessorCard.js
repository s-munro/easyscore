import React, { useEffect, useState } from "react";
import ScoreDoughnut from "./ScoreDoughnut";
import GradeDistChart from "./GradeDistChart";

import { Card } from "react-bootstrap";

import "../course.css";

const ProfessorCard = ({ instructor }) => {
  const [transformedName, setTransformedName] = useState(instructor.name);

  useEffect(() => {
    transformProfessorName(instructor.name);
  }, []);

  const transformProfessorName = (instructorName) => {
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
          <div className="col">
            <div className="row">{transformedName}</div>
            <div className="row">
              <div className="col">
                <ScoreDoughnut easyScore={instructor.rating} />
              </div>
              <div className="col">
                <div>Semesters Taught: {instructor.semesters_taught}</div>
                <div>
                  Avg. Class Size: {instructor.average_number_of_students}
                </div>
                <div>
                  Teaching Next Semester:{" "}
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
            Graph
            <GradeDistChart average_grades={instructor.average_grades} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfessorCard;
