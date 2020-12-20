// import { getData } from "../utils/api/getData";
import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const CHANGE_URL = "CHANGE_URL";

export const fetchResults = (func, url) => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://theeasyscore.com/results&jsonquery=${url}`
    )
    .then((res) => {
      console.log("res: ", res);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.courses });
    })
    .catch((err) => {
      console.log("err: ", err);
      dispatch({ type: FETCH_DATA_FAILURE });
    });
};

export const changeUrl = (url) => {
  return { type: CHANGE_URL, payload: url };
};
