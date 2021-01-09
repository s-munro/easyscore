import React, { useState } from "react";

import CreditHoursPopup from "./filterpopups/CreditHoursPopup";

import "./filters.css";

const CreditHoursFilter = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const handleClick = (e) => {
    setDisplayPopup(!displayPopup);
  };

  return (
    <div>
      <div className="filter-button" onClick={handleClick}>
        Credit Hours
      </div>
      {displayPopup === true ? <CreditHoursPopup /> : null}
    </div>
  );
};

export default CreditHoursFilter;
