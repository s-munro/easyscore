import React, { useState } from "react";

import CourseLevelPopup from "./filterpopups/CourseLevelPopup";

import "./filters.css";

const CourseLevelFilter = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const handleClick = (e) => {
    setDisplayPopup(!displayPopup);
  };

  return (
    <div>
      <div className="filter-button" onClick={handleClick}>
        Credit Hours
      </div>
      {displayPopup === true ? <CourseLevelPopup /> : null}
    </div>
  );
};

export default CourseLevelFilter;
