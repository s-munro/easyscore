import React from "react";
import { FormControl } from "react-bootstrap";

const FilterSelect = ({
  selectValues,
  handleSelectChange,
  select_id,
  selectValue,
  filterSelectClass,
}) => {
  return (
    <div>
      <FormControl
        as="select"
        name={select_id}
        onChange={handleSelectChange}
        value={selectValue}
        className={filterSelectClass ? "filterSelect" : null}
      >
        {selectValues.map((value) => {
          return (
            <option key={value.value} value={value.value}>
              {value.title}
            </option>
          );
        })}
      </FormControl>
    </div>
  );
};

export default FilterSelect;
