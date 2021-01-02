import React from "react";
import "../styles.css";

const Popup = ({ title, subTitle, onExit }) => {
  return (
    <div className="popUp">
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <div onClick={onExit}>Exit</div>
    </div>
  );
};

export default Popup;
