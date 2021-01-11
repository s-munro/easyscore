// import { getData } from "../utils/api/getData";
import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const CHANGE_URL = "CHANGE_URL";
export const SET_COURSES_ON_PAGE = "SET_COURSES_ON_PAGE";
export const SET_LEVEL_FILTER_VALUE = "SET_LEVEL_FILTER_VALUE";
export const SET_REQUIREMENTS_FILTER_VALUE = "SET_REQUIREMENTS_FILTER_VALUE";
export const SET_CREDITS_FILTER_VALUE = "SET_CREDITS_FILTER_VALUE";
export const SET_TIME_FILTER_VALUE = "SET_TIME_FILTER_VALUE";
export const RESET_FILTER_VALUES = "RESET_FILTER_VALUES";

export const fetchResults = (func, url) => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  axios
    .get(`https://theeasyscore.com/results&jsonquery=${url}`)
    .then((res) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.courses });
      dispatch({ type: SET_COURSES_ON_PAGE, payload: res.data.courses });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.message });
    });
};

export const changeUrl = (url) => {
  return { type: CHANGE_URL, payload: url };
};

export const setCourses = (courses) => {
  return { type: SET_COURSES_ON_PAGE, payload: courses };
};

//*************************  FILTERS ACTIONS  ******************************/
export const setLevelFilterValue = (value) => {
  return { type: SET_LEVEL_FILTER_VALUE, payload: value };
};

export const setRequirementsFilterValue = (value) => {
  return { type: SET_REQUIREMENTS_FILTER_VALUE, payload: value };
};
export const setCreditsFilterValue = (value) => {
  return { type: SET_CREDITS_FILTER_VALUE, payload: value };
};
export const setTimeFilterValue = (value) => {
  return { type: SET_TIME_FILTER_VALUE, payload: value };
};

export const resetFilterValues = () => {
  return { type: RESET_FILTER_VALUES, payload: "" };
};
