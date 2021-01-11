import React, { useState } from "react";

import RequirementsPopup from "./filterpopups/RequirementsPopup";

import "./filters.css";

const RequirementsFilter = () => {
  const [displayDropDown, setDisplayDropdown] = useState(false);

  const handleClick = (e) => {
    setDisplayDropdown(!displayDropDown);
  };

  return (
    <div>
      <div className="filter-button" onClick={handleClick}>
        Credit Hours
      </div>
      {displayDropDown === true ? <RequirementsPopup /> : null}
    </div>
  );
};

export default RequirementsFilter;
