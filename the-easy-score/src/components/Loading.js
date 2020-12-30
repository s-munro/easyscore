import Loader from "react-loader-spinner";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div>
      <Loader type="ThreeDots" color="lightgray" height={40} width={40} />
    </div>
  );
};

export default Loading;
