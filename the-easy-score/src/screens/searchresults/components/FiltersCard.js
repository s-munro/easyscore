import React from "react";
import Filter from "../../../components/Filter";

const FiltersCard = () => {
  return (
    <div>
      <div>Filter By:</div>
      <Filter topic={"Requirements"} />
      <Filter topic={"Time of Day"} />
      <Filter topic={"Day of Week"} />
      <Filter topic={"Semester"} />
    </div>
  );
};

export default FiltersCard;
