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

  return (
    <Card className="col professor-card-container pt-3 pb-3 mb-5 w-100 ">
      <div className="row w-100 mr-0 ml-0">
        <div className="w-100 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 top-half">
          <div className="row profName no-gutters">{transformedName} </div>
          <div className="row profYears no-gutters">
            {instructor.years_taught}
          </div>
          <div className="row w-100 d-flex flex-row justify-content-start align-items-center mobile-d-flex-center no-gutters mt-1 mobile-margin-top-2">
            <div className="col-xl-3 col-lg-5 col-4 mobile-d-flex-end">
              <ScoreDoughnut easyScore={instructor.rating} />
            </div>
            <div className="col-xl-7 col-lg-7 col-6 d-flex flex-column justify-content-center align-items-start pl-2">
              <div className="card-small-text">
                Semesters Taught: <b>{instructor.semesters_taught}</b>
              </div>
              <div className="card-small-text">
                Avg. Class Size: <b>{instructor.average_number_of_students}</b>
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
        <div className="w-100 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center bottom-half mobile-top-margin-5">
          <div className="row w-100 d-flex justify-content-center">
            <GradeDistChart2
              average_grades={instructor.average_grades}
              key={index}
              pixels={pixels}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfessorCard;
