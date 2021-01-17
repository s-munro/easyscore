import React, { useEffect, useState } from "react";

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
    <div className="w-100">
      <Card>
        <div>
          {instructor.rating}
          {transformedName}
          {instructor.average_grades[0]}%{instructor.average_grades[1]}%
          {instructor.average_grades[2]}%{instructor.average_grades[3]}%
          {instructor.semesters_taught}
          {instructor.average_number_of_students}
        </div>
      </Card>
    </div>
  );
};

export default ProfessorCard;
