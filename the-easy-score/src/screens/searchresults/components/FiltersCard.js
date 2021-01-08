import React from "react";
import CourseLevelFilter from "../../../components/filters/CourseLevelFilter";
import CreditHoursFilter from "../../../components/filters/CreditHoursFilter";
import DaysFilter from "../../../components/filters/DaysFilter";
import RequirementsFilter from "../../../components/filters/RequirementsFilter";
import SemestersFilter from "../../../components/filters/SemestersFilter";
import TimeofDayFilter from "../../../components/filters/TimeofDayFilter";

import "../results.css";

const FiltersCard = () => {
  return (
    <div className="filters-card-container">
      <h3>Filter By:</h3>
      <CourseLevelFilter />
      <CreditHoursFilter />
      <DaysFilter />
      <RequirementsFilter />
      <SemestersFilter />
      <TimeofDayFilter />
    </div>
  );
};

export default FiltersCard;
