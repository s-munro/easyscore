import React, { useState } from "react";

import SemestersPopup from "./filterpopups/SemestersPopup";

import "./filters.css";

const SemestersFilter = () => {
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
      {displayDropDown === true ? <SemestersPopup /> : null}
    </div>
  );
};

export default SemestersFilter;
