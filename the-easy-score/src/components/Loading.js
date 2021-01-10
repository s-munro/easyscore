import React from "react";
import { Spin, Space } from "antd";
import "../App.css";

const Loading = () => {
  return (
    <div className="loading-div">
      <Space size={"large"}>
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loading;
