import React from "react";
import { FormControl } from "react-bootstrap";

// Sheena,
// React boostrap FormControl documentation below, covers styling I think:
// https://react-bootstrap.github.io/components/forms/
// the documentation is fucking massive

const FilterSelect = ({ selectValues, handleSelectChange, select_id }) => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      <FormControl as="select" name={select_id} onChange={handleSelectChange}>
        {selectValues.map((value) => {
          return (
            <option key={value.value} value={value.value}>
              {value.title}
            </option>
          );
        })}
        {/* </select> */}
      </FormControl>
    </div>
  );
};

export default FilterSelect;
