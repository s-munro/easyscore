import { combineReducers } from "redux";

import { uiReducer } from './reducers/uiReducer';
import { fetchDataReducer } from './reducers/fetchDataReducer';
import { resultsPageReducer } from "./reducers/resultsPageReducer";
import { coursePageReducer } from "./reducers/coursePageReducer";
import { filtersReducer } from './reducers/filtersReducer';

export const rootReducer = combineReducers({
  fetch: fetchDataReducer,
  ui: uiReducer,
  results: resultsPageReducer,
  courses: coursePageReducer,
  filters: filtersReducer,
});
