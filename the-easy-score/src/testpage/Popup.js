import React from "react";
import { Select } from "semantic-ui-react";
import "./test.css";

const Popup = () => {
  const levelOptions = [
    { key: "100-199", value: "100-199", text: "one hunnid" },
    { key: "200-299", value: "200-299", text: "two hunnid" },
    { key: "300-399", value: "300-399", text: "three hunnid" },
    { key: "400-499", value: "400-499", text: "four hunnid" },
  ];
  return (
    <div className="popup-menu">
      <Select
        className="select-space"
        placeholder="Course Level"
        options={levelOptions}
      />
    </div>
  );
};

export default Popup;
