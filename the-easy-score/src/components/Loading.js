import React from "react";
import { Spin } from "antd";

import "../App.css";

const Loading = () => {
  return (
    <div className="row w-100 d-flex mt-10 mb-5 justify-content-center align-items-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
