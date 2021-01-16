import React, { useState } from "react";
import { connect } from "react-redux";
import { changeUrl } from "../../../actions/index";

import { FormControl } from "react-bootstrap";
import FilterSelect from "../../../components/FilterSelect";

const initialUrlValues = {
  keyword: "",
  requirement: "",
  level: "",
  credit: "",
  timing: "",
  next_sem: "",
};

const SearchForm = ({ push, changeUrl, searchUrl }) => {
  const requirementsValues = [
    { value: "", title: "Any Requirement" },
    { value: 0, title: "A&H Credit" },
    { value: 1, title: "Diversity in U.S. Credit" },
    { value: 6, title: "English Composition" },
    { value: 11, title: "Intensive Writing" },
    { value: 7, title: "Mathematical Model" },
    { value: 3, title: "N&M Credit" },
    { value: 5, title: "Public Oral Communication" },
    { value: 2, title: "S&H Credit" },
    { value: 4, title: "World Culture Credit" },
    { value: "0GENEDMM", title: "World Landuage Class" },
  ];

  const courseLevelValues = [
    { value: "", title: "Any Course Level" },
    { value: 12, title: "100-299" },
    { value: 8, title: "300-399" },
    { value: 9, title: "400-499" },
    { value: 10, title: "Graduate Level Courses" },
    { value: 13, title: "Honors Level Courses" },
  ];

  const creditHoursValues = [
    { value: "", title: "Any Credit Hours" },
    { value: 1, title: "1" },
    { value: 2, title: "2" },
    { value: 3, title: "3" },
    { value: 4, title: "4" },
    { value: 5, title: "5" },
    { value: 6, title: "6" },
    { value: 7, title: "7+" },
  ];

  const timeofDayValues = [
    { value: "", title: "Any time of day" },
    { value: 1, title: "Morning (7:00 a.m.–10:59 a.m.)" },
    { value: 2, title: "Afternoon (11 a.m.–4:59 p.m.)" },
    { value: 3, title: "Evening (5 p.m.–11:59 p.m.)" },
  ];

  const handleSelectChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  const [urlValues, setUrlValues] = useState(initialUrlValues);

  const handleChange = (e) => {
    console.log(e);
    setUrlValues({ ...urlValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUrl = `'keyword'=_'${urlValues.keyword}'&_'requirement'=_'${urlValues.requirement}'&_'level'=_'${urlValues.level}'&_'credit'=_'${urlValues.credit}'&_'timing'=_'${urlValues.timing}'&_'next_sem'=_'${urlValues.next_sem}'&_'days'=_[]`;
    changeUrl(newUrl);

    push(`/search/${newUrl}`);
  };

  return (
    <div className="home-form-container">
      <FormControl />
      <div className="filters-container">
        <FilterSelect
          select_id={"courseLevel"}
          handleSelectChange={handleSelectChange}
          selectValues={courseLevelValues}
        />
        <FilterSelect
          select_id={"creditHours"}
          handleSelectChange={handleSelectChange}
          selectValues={creditHoursValues}
        />
        <FilterSelect
          select_id={"requirements"}
          handleSelectChange={handleSelectChange}
          selectValues={requirementsValues}
        />
        <FilterSelect
          select_id={"timeofDay"}
          handleSelectChange={handleSelectChange}
          selectValues={timeofDayValues}
        />
      </div>

      {/* <form onSubmit={handleSubmit}>
        <div className="homeSrchInput">
          <label>
            <input
              className="homeInputBox"
              type=" text"
              name="keyword"
              placeholder="'Biology', 'Chem-C', 'L112', etc."
              value={urlValues.keyword}
              onChange={handleChange}
            />
          </label>
          <button className="homeSrchBtn">
            <ArrowForwardIosIcon />
          </button>
        </div>
        <br></br>
        <div className="homeFilterBtnContainer">
          <select
            className="homeFilterDisplay"
            name="requirement"
            onChange={handleChange}
          >
            <option value="">Requirements</option>
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

          <select
            className="homeFilterDisplay fBtn2"
            name="level"
            onChange={handleChange}
          >
            <option value="">Course Level</option>
            <option value={12}>100–299</option>
            <option value={8}>300–399</option>
            <option value={9}>400–499</option>
            <option value={10}>Graduate Level Courses</option>
            <option value={13}>Honors Level Courses</option>
          </select>

          <select
            className="homeFilterDisplay fBtn2"
            name="credit"
            onChange={handleChange}
          >
            <option value="">Credit Hours</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7+</option>
          </select>

          <select
            className="homeFilterDisplay fBtn2"
            name="timing"
            onChange={handleChange}
          >
            <option value="">Time of day</option>
            <option value={1}>Morning (7:00 a.m.–10:59 a.m.)</option>
            <option value={2}>Afternoon (11 a.m.–4:59 p.m.)</option>
            <option value={3}>Evening (5 p.m.–11:59 p.m.)</option>
          </select>
        </div>
      </form> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchUrl: state.searchUrl,
    isLoading: state.isLoading,
    courses: state.courses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps, { changeUrl })(SearchForm);
