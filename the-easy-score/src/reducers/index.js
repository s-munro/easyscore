import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions";

const initialState = {
  params: "",
  isLoading: false,
  errorText: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false };
    case FETCH_DATA_FAILURE:
      return { ...state, isLoading: false, errorText: action.payload };
    default:
      return state;
  }
};

export default reducer;
