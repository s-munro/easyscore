import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setRequirementsFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  resetFilterValues,
} from "../../../actions/index";

import { FormControl } from "react-bootstrap";
import FilterSelect from "../../../components/FilterSelect";

const SearchForm = (props, { push }) => {
  const history = useHistory();

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

  useEffect(() => {
    props.resetFilterValues();
  }, []);

  const handleChange = (e) => {
    console.log(e);

    if (e.target.name === "keyword") {
      console.log("keyword");
      props.setKeywordFilterValue(e.target.value);
    } else if (e.target.name === "courseLevel") {
      props.setLevelFilterValue(e.target.value);
    } else if (e.target.name === "creditHours") {
      props.setCreditsFilterValue(e.target.value);
    } else if (e.target.name === "timeofDay") {
      props.setTimeFilterValue(e.target.value);
    } else if (e.target.name === "requirements") {
      props.setRequirementsFilterValue(e.target.value);
    } else {
      console.log("nope");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUrl = `'keyword'=_'${props.filters.keyword.value}'&_'requirement'=_'${props.filters.requirements.value}'&_'level'=_'${props.filters.courseLevel.value}'&_'credit'=_'${props.filters.creditHours.value}'&_'timing'=_'${props.filters.timeofDay.value}'&_'next_sem'=_''&_'days'=_[]`;

    history.push(`/search/${newUrl}`);
  };

  return (
    <div className="home-form-container">
      <form onSubmit={handleSubmit}>
        <FormControl
          value={props.filters.keyword.value}
          onChange={handleChange}
          placeholder="this is a placeholder"
          name="keyword"
        />
        <div className="filters-container">
          <FilterSelect
            select_id={"courseLevel"}
            handleSelectChange={handleChange}
            selectValues={courseLevelValues}
          />
          <FilterSelect
            select_id={"creditHours"}
            handleSelectChange={handleChange}
            selectValues={creditHoursValues}
          />
          <FilterSelect
            select_id={"requirements"}
            handleSelectChange={handleChange}
            selectValues={requirementsValues}
          />
          <FilterSelect
            select_id={"timeofDay"}
            handleSelectChange={handleChange}
            selectValues={timeofDayValues}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    courses: state.courses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps, {
  setKeywordFilterValue,
  setLevelFilterValue,
  setRequirementsFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  resetFilterValues,
})(SearchForm);
