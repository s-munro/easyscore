import React from "react";
import { Button } from "antd";
import { Select } from "semantic-ui-react";

const TimeofDayPopover = () => {
  const timeofDayOptions = [
    { key: 1, value: 12, text: "100-299" },
    { key: 2, value: 8, text: "300-399" },
    { key: 3, value: 9, text: "400-499" },
    { key: 4, value: 10, text: "Graduate Level Courses" },
    { key: 5, value: 13, text: "Honors Level Courses" },
  ];

  return (
    <div>
      <Select
        className="select-space"
        placeholder="Time of Day"
        options={timeofDayOptions}
      />
      <Button>Clear</Button>
    </div>
  );
};

export default TimeofDayPopover;
