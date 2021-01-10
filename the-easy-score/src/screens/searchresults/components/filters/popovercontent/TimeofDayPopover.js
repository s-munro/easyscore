import React from "react";
import { Button, Radio, Typography } from "antd";

import { connect } from "react-redux";
import { setTimeFilterValue } from "../../../../../actions/index";

const TimeofDayPopover = (props) => {
  const { Title } = Typography;

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const handleChange = (e) => {
    props.setTimeFilterValue(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    props.setTimeFilterValue("");
  };

  return (
    <div>
      <Title level={5}>Time of Day</Title>
      <Radio.Group
        onChange={handleChange}
        value={props.filters.timeofDay.value}
      >
        <Radio style={radioStyle} value={""}>
          Any Time
        </Radio>
        <Radio style={radioStyle} value={1}>
          Morning (7:00 a.m.–10:59 a.m.)
        </Radio>
        <Radio style={radioStyle} value={2}>
          Afternoon (11 a.m.–4:59 p.m.)
        </Radio>
        <Radio style={radioStyle} value={3}>
          Evening (5 p.m.–11:59 p.m.)
        </Radio>
      </Radio.Group>
      <Button onClick={handleClear}>Clear</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps, { setTimeFilterValue })(
  TimeofDayPopover
);
