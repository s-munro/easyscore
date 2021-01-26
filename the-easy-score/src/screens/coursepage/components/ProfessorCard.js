import React, { useEffect, useState } from "react";
import ScoreDoughnut from "./ScoreDoughnut";
import GradeDistChart2 from "./GradeDistChart2";

import { Card } from "react-bootstrap";

import "../course.css";

const ProfessorCard = ({ instructor, index }) => {
  const pixels = {
    width: 250,
    height: 150,
  };

  const [transformedName, setTransformedName] = useState(instructor.name);
  const [displayDays, setDisplayDays] = useState(false);

  useEffect(() => {
    transformProfessorName(instructor.name);
    instructor.timings[1].length > 0
      ? setDisplayDays(true)
      : setDisplayDays(false);
  }, [instructor]);

  const transformProfessorName = (instructorName) => {
    const nameArray = instructorName.split(",");
    const firstName = nameArray[0];
    const lastNameString = nameArray[1];
    const lastNameInitial = lastNameString.charAt(0);
    setTransformedName(`${firstName}, ${lastNameInitial}.`);
  };

  console.log("days", instructor.timings[1].length);
  // 650 x 180
  return (
    <Card className="container professor-card-container w-100 mb-5">
      <div className="row w-100">
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 top-half"
          // style={{ backgroundColor: "red" }}
        >
          <div className="row w-100 profName">{transformedName} </div>
          <div className="row w-100 profYears">{instructor.years_taught}</div>
          <div className="row w-100">
            <div className="col doughnut">
              <ScoreDoughnut easyScore={instructor.rating} />

              <div className="col text-block">
                <div className="card-small-text">
                  Semesters Taught: <b>{instructor.semesters_taught}</b>
                </div>
                <div className="card-small-text">
                  Avg. Class Size:{" "}
                  <b>{instructor.average_number_of_students}</b>
                </div>
                <div className="card-small-text">
                  Avail. Next Term:{" "}
                  {instructor.is_teaching_next_semester === 0 ? (
                    <span className="card-small-text">
                      <b>No</b>
                    </span>
                  ) : (
                    <span className="card-small-text">
                      <b>Yes</b>
                    </span>
                  )}
                </div>
                {instructor.is_teaching_next_semester === 1 ? (
                  <div className="card-small-text">
                    Days:{" "}
                    <b>
                      {displayDays
                        ? instructor.timings[1].map((timings) => {
                            return `${timings} `;
                          })
                        : "unavailable"}
                    </b>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* SECOND HALF */}
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-center align-items-center bottom-half"
          // style={{ backgroundColor: "yellow" }}
        >
          <div className="chart">
            <GradeDistChart2
              average_grades={instructor.average_grades}
              key={index}
              pixels={pixels}
              // className="chart"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfessorCard;
