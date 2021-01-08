import React, { useState } from "react";

import CreditHoursPopup from "./filterpopups/CreditHoursPopup";

import "./filters.css";

const CreditHoursFilter = () => {
  const [displayDropDown, setDisplayDropdown] = useState(false);

  const handleClick = (e) => {
    setDisplayDropdown(!displayDropDown);
  };

  return (
    <div>
      <div className="filter-button" onClick={handleClick}>
        Credit Hours
      </div>
      {displayDropDown === true ? <CreditHoursPopup /> : null}
    </div>
  );
};

export default CreditHoursFilter;
