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

  // https://theeasyscore.com/results&searchquery='keyword'=_''&_'requirement'=_''&_'level'=_''&_'credit'=_''&_'timing'=_''&_'next_sem'=_'0'&_'days'=_[]

  return (
    <div className="home-form-container">
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

        <label>
          <input
            type="text"
            name="keyword"
            placeholder="Enter keyword to search"
            value={"hey"}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="text"
            name="keyword"
            placeholder="Enter keyword to search"
            value={"hey"}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="text"
            name="keyword"
            placeholder="Enter keyword to search"
            value={"hey"}
            onChange={handleChange}
          />
        </label>

        <select name="requirement">
          <option value="">Choose a requirement</option>
          <option value={0}>A&H credit</option>
          <option value={1}>Diversity in U.S. Credit</option>
          <option value={6}>English Composition</option>
          <option value={11}>Intensive Writing Credit</option>
          <option value={7}>Mathematical Model</option>
          <option value={3}>N&amp;M credit</option>
          <option value={5}>Public Oral Communication Credit</option>
          <option value={2}>S&H credit</option>
          <option value={4}>World Culture credit</option>
          <option value="0GENEDMM">World Language Class</option>
        </select>

        <select name="level" id="level">
          <option value="">All course numbers</option>
          <option value={12}>100–299</option>
          <option value={8}>300–399</option>
          <option value={9}>400–499</option>
          <option value={10}>Graduate Level Courses</option>
          <option value={13}>Honors Level Courses</option>
        </select>

        <select name="credit" id="credit">
          <option value="">All credit hours</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7+</option>
        </select>

        <select name="timing" id="timing">
          <option value="">All times of day</option>
          <option value="1">Morning (7:00 a.m.–10:59 a.m.)</option>
          <option value="2">Afternoon (11 a.m.–4:59 p.m.)</option>
          <option value="3">Evening (5 p.m.–11:59 p.m.)</option>
        </select>

        <select name="next_sem" id="next_sem">
          <option value="0">All past semesters</option>
          <option value="1">Next Semester Courses only</option>
        </select>

        <div>
          <label>
            <input type="checkbox" name="day" value="M" />
          </label>
          <label>
            <input type="checkbox" name="day" value="T" />
          </label>
          <label>
            <input type="checkbox" name="day" value="W" />
          </label>
          <label>
            <input type="checkbox" name="day" value="R" />
          </label>
          <label>
            <input type="checkbox" name="day" value="F" />
          </label>
          <label>
            <input type="checkbox" name="day" value="S" />
          </label>
          <label>
            <input type="checkbox" name="day" value="N" />
          </label>
        </div>

        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
