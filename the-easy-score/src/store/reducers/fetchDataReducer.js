import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/fetchDataActions";

const initialState = {
  isLoading: false,
  courses: [],
  errorText: "",
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false, courses: action.payload };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorText: action.payload,
        courses: [],
      };
    default:
      return state;
  }
};
