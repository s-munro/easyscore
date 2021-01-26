import React from "react";
import { Spin } from "antd";
import "../App.css";

const Loading = () => {
  return (
    <div>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
