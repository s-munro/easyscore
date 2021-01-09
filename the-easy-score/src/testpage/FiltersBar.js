import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Filter from "./Filter";

const FiltersBar = ({ showMenu, handleShowMenu }) => {
  return (
    <div className="filters-bar">
      <div>
        <Filter
          showMenu={showMenu}
          handleShowMenu={handleShowMenu}
          filterSectionId={"Requirements"}
        />
        <Filter
          showMenu={showMenu}
          handleShowMenu={handleShowMenu}
          filterSectionId={"Course Level"}
        />
        <Filter
          showMenu={showMenu}
          handleShowMenu={handleShowMenu}
          filterSectionId={"Semesters"}
        />
        <Filter
          showMenu={showMenu}
          handleShowMenu={handleShowMenu}
          filterSectionId={"Course Hours"}
        />
        <Filter
          showMenu={showMenu}
          handleShowMenu={handleShowMenu}
          filterSectionId={"Days"}
        />
        <Filter
          showMenu={showMenu}
          handleShowMenu={handleShowMenu}
          filterSectionId={"Time of Day"}
        />
      </div>
    </div>
  );
};

export default FiltersBar;
