import React from "react";

const Filter = ({ filterSectionId, showMenu, handleShowMenu }) => {
  return (
    <div className="filter">
      <div onClick={handleShowMenu}>{filterSectionId}</div>
    </div>
  );
};

export default Filter;
