import React, { useMemo } from "react";
import Select from "react-select";

const CreditHoursPopup = () => {
  const options = useMemo(
    () => [
      { value: "", label: "Credit Hours" },
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
      { value: 6, label: "6" },
      { value: 7, label: "7+" },
    ],
    []
  );

  return (
    <div className="select-popup-container">
      <Select options={options} defaultValue={options[0]} />
    </div>
  );
};

export default CreditHoursPopup;
