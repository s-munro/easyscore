import React, { useState } from "react";

import TimeofDayPopup from "./filterpopups/TimeofDayPopup";

import "./filters.css";

const TimeofDayFilter = () => {
  const [displayDropDown, setDisplayDropdown] = useState(false);

  const handleClick = (e) => {
    setDisplayDropdown(!displayDropDown);
  };

  return (
    <div>
      <div className="filter-button" onClick={handleClick}>
        Credit Hours
      </div>
      {displayDropDown === true ? <TimeofDayPopup /> : null}
    </div>
  );
};

export default TimeofDayFilter;
