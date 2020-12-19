import React from "react";

const SearchForm = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            name="keyword"
            placeholder="Enter keyword to search"
            value={"hey"}
            onChange={handleChange}
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
