import { combineReducers } from "redux";

import { uiReducer } from './reducers/uiReducer';
import { fetchDataReducer } from './reducers/fetchDataReducer';
import { resultsPageReducer } from "./reducers/resultsPageReducer";
import { coursePageReducer } from "./reducers/coursePageReducer";

export const rootReducer = combineReducers({
  fetchData: fetchDataReducer,
  ui: uiReducer,
  results: resultsPageReducer,
  course: coursePageReducer,
});
