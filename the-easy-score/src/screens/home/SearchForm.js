import React from "react";

const SearchForm = ({ push }) => {
  const handleChange = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    push("/search");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
