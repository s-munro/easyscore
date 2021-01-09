import React, { useState } from "react";
import FiltersBar from "./FiltersBar";
import Popup from "./Popup";

const Test = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div>
        <FiltersBar showMenu={showMenu} handleShowMenu={handleShowMenu} />
        {showMenu ? (
          <div>
            <Popup />
          </div>
        ) : null}
      </div>
      <div>
        <h2>I'm a header!</h2>
      </div>
    </div>
  );
};

export default Test;
