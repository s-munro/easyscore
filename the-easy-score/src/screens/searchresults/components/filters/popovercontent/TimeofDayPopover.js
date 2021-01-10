import React from "react";
import { Button, Radio, Typography } from "antd";

const TimeofDayPopover = (props) => {
  const { Title } = Typography;

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Title level={5}>Time of Day</Title>
      <Radio.Group onChange={handleChange} value={2}>
        <Radio style={radioStyle} value={1}>
          Morning (7:00 a.m.–10:59 a.m.)
        </Radio>
        <Radio style={radioStyle} value={2}>
          Afternoon (11 a.m.–4:59 p.m.)
        </Radio>
        <Radio style={radioStyle} value={3}>
          Evening (5 p.m.–11:59 p.m.)
        </Radio>
        <Radio style={radioStyle} value={""}>
          Any Time
        </Radio>
      </Radio.Group>
      <Button>Clear</Button>
    </div>
  );
};

export default TimeofDayPopover;
