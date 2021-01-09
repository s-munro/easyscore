import React, { useState } from "react";
import { connect } from "react-redux";
import { changeUrl } from "../../../actions/index";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// import SearchIcon from "@material-ui/icons/Search";

// import Popup from "./Popup";

const initialUrlValues = {
  keyword: "",
  requirement: "",
  level: "",
  credit: "",
  timing: "",
  next_sem: "",
};

const SearchForm = ({ push, changeUrl, searchUrl }) => {
  const [urlValues, setUrlValues] = useState(initialUrlValues);

  const handleChange = (e) => {
    console.log(e);
    setUrlValues({ ...urlValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  1. replace spaces in keyword with underscores:
    // let noSpaceKeyword = urlValues.keyword.replace(" ", "_");
    // let noEqualsKeyword = noSpaceKeyword.replace(":", "=");
    //  2. make api call
    // setUrlValues({ ...urlValues, keyword: noEqualsKeyword });
    const newUrl = `'keyword'=_'${urlValues.keyword}'&_'requirement'=_'${urlValues.requirement}'&_'level'=_'${urlValues.level}'&_'credit'=_'${urlValues.credit}'&_'timing'=_'${urlValues.timing}'&_'next_sem'=_'${urlValues.next_sem}'&_'days'=_[]`;
    changeUrl(newUrl);

    push(`/search/${newUrl}`);
  };

  return (
    <div className="home-form-container">
      <form onSubmit={handleSubmit}>
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
            {/* <p className="buttonSymbol">></p> */}
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

          {/* <select className="homeFilterDisplay" name="next_sem" onChange={handleChange}>

          <option value="">Semesters</option>
          <option value={0}>Previous</option>
          <option value={1}>Upcoming</option>
        </select> */}

          {/* <div>
          <label>
            Mon:
            <input
              type="checkbox"
              name="day"
              value="M"
              onChange={handleChange}
            />
          </label>
          <label>
            Tues:
            <input
              type="checkbox"
              name="day"
              value="T"
              onChange={handleChange}
            />
          </label>
          <label>
            Wed:
            <input
              type="checkbox"
              name="day"
              value="W"
              onChange={handleChange}
            />
          </label>
          <label>
            Thurs:
            <input
              type="checkbox"
              name="day"
              value="R"
              onChange={handleChange}
            />
          </label>
          <label>
            Fri:
            <input
              type="checkbox"
              name="day"
              value="F"
              onChange={handleChange}
            />
          </label>
          <label>
            Sat:
            <input
              type="checkbox"
              name="day"
              value="S"
              onChange={handleChange}
            />
          </label>
          <label>
            Sun:
            <input
              type="checkbox"
              name="day"
              value="N"
              onChange={handleChange}
            />
          </label>
        </div>
 */}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchUrl: state.searchUrl,
    isLoading: state.isLoading,
    courses: state.courses,
  };
};

export default connect(mapStateToProps, { changeUrl })(SearchForm);
