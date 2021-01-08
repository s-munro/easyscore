import React, { useState } from "react";

import DaysPopup from "./filterpopups/DaysPopup";

import "./filters.css";

const DaysFilter = () => {
  const [displayDropDown, setDisplayDropdown] = useState(false);

  const handleClick = (e) => {
    console.log("click");
    setDisplayDropdown(!displayDropDown);
  };

  return (
    <div>
      <div className="filter-button" onClick={handleClick}>
        Credit Hours
      </div>
      {displayDropDown === true ? <DaysPopup /> : null}
    </div>
  );
};

export default DaysFilter;
