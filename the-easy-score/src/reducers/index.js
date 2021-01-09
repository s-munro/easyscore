import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CHANGE_URL,
} from "../actions";

const initialState = {
  searchUrl: "",
  isLoading: false,
  courses: [],
  errorText: "",
  display: {
    displayPopups: {
      courseLevel: false,
    },
  },
  // displayPopups: {
  //   courseLevel: false,
  //   creditHours: false,
  //   days: false,
  //   requirements: false,
  //   semesters: false,
  //   timeofDay: false,
  // },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_URL:
      return { ...state, searchUrl: action.payload };
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

export default reducer;
