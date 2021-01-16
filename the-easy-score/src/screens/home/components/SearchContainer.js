import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setKeywordValue, changeUrl } from "../../../actions/index";

import CourseLevelFilter from "./filters/CourseLevelFilter";
import CreditHoursFilter from "./filters/CreditHoursFilter";
import RequirementsFilter from "./filters/RequirementsFilter";
import TimeofDayFilter from "./filters/TimeofDayFilter";

import "../home.css";

import { Input, Typography } from "antd";

const { Title } = Typography;
const { Search } = Input;

const SearchContainer = (props, { filters }) => {
  const history = useHistory();

  const handleChange = (e) => {
    props.setKeywordValue(e.target.value);
  };

  const onSearch = (e) => {
    const newUrl = `'keyword'=_'${props.filters.keyword.value}'&_'requirement'=_'${props.filters.requirements.value}'&_'level'=_'${props.filters.courseLevel.value}'&_'credit'=_'${props.filters.creditHours.value}'&_'timing'=_'${props.filters.timeofDay.value}'&_'next_sem'=_'${props.filters.next_sem.value}'&_'days'=_[]`;
    changeUrl(newUrl);

    history.push(`/search/${newUrl}`);
  };

  return (
    <div className="search-bar-search-filters-container">
      <Title>Welcome to The Easy Score</Title>
      <Search
        placeholder="Search keyword, i.e. biology"
        allowClear
        onSearch={onSearch}
        style={{ width: 600 }}
        size="large"
        onChange={handleChange}
        enterButton
      />
      <br />
      <div className="filters-container">
        <CourseLevelFilter />
        <CreditHoursFilter />
        <RequirementsFilter />
        <TimeofDayFilter />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchUrl: state.searchUrl,
    isLoading: state.isLoading,
    filters: state.filters,
  };
};

export default connect(mapStateToProps, { setKeywordValue, changeUrl })(
  SearchContainer
);
