import getData from "../utils/api/axiosCall";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchResults = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  getData()
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_DATA_SUCCESS });
    })
    .catch((err) => {
      console.log("err: ", err);
      dispatch({ type: FETCH_DATA_FAILURE });
    });
};
