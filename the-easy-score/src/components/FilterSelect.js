import React from "react";
import { FormControl } from "react-bootstrap";

// Sheena,
// React boostrap FormControl documentation below, covers styling I think:
// https://react-bootstrap.github.io/components/forms/
// the documentation is fucking massive

const FilterSelect = ({
  selectValues,
  handleSelectChange,
  select_id,
  selectValue,
}) => {
  return (
    <div>
      <FormControl
        as="select"
        name={select_id}
        onChange={handleSelectChange}
        value={selectValue}
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
