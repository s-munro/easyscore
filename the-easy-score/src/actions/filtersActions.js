// SEARCH PAGE EXPORTS
export const SET_KEYWORD_FILTER_VALUE = "SET_KEYWORD_FILTER_VALUE";
export const SET_LEVEL_FILTER_VALUE = "SET_LEVEL_FILTER_VALUE";
export const SET_REQUIREMENTS_FILTER_VALUE = "SET_REQUIREMENTS_FILTER_VALUE";
export const SET_CREDITS_FILTER_VALUE = "SET_CREDITS_FILTER_VALUE";
export const SET_TIME_FILTER_VALUE = "SET_TIME_FILTER_VALUE";
export const RESET_FILTER_VALUES = "RESET_FILTER_VALUES";

// COURSE PAGE EXPORTS **
export const SET_INSTRUCTORS_NEXT_SEMESTER_FILTER =
  "SET_INSTRUCTORS_NEXT_SEMESTER_FILTER";
export const SET_PROFNAME_KEYWORD_FILTER_VALUE =
  "SET_PROFNAME_KEYWORD_FILTER_VALUE";
export const SET_INSTRUCTORS_ON_PAGE = "SET_INSTRUCTORS_ON_PAGE";

// COURSES ** Filters-related actions ****************

export const setKeywordFilterValue = (value) => {
  return { type: SET_KEYWORD_FILTER_VALUE, payload: value };
};

export const setLevelFilterValue = (value) => {
  if (value !== "") {
    return { type: SET_LEVEL_FILTER_VALUE, payload: parseInt(value) };
  } else {
    return { type: SET_LEVEL_FILTER_VALUE, payload: value };
  }
};

export const setRequirementsFilterValue = (value) => {
  if (value !== "") {
    return { type: SET_REQUIREMENTS_FILTER_VALUE, payload: parseInt(value) };
  } else {
    return { type: SET_REQUIREMENTS_FILTER_VALUE, payload: value };
  }
};

export const setCreditsFilterValue = (value) => {
  if (value !== "") {
    return { type: SET_CREDITS_FILTER_VALUE, payload: parseInt(value) };
  } else {
    return { type: SET_CREDITS_FILTER_VALUE, payload: value };
  }
};

export const setTimeFilterValue = (value) => {
  if (value !== "") {
    return { type: SET_TIME_FILTER_VALUE, payload: parseInt(value) };
  } else {
    return { type: SET_TIME_FILTER_VALUE, payload: value };
  }
};

export const resetFilterValues = () => {
  return { type: RESET_FILTER_VALUES, payload: "" };
};

// instructor page related actions
export const setInstructorNextSemesterFilterValue = (value) => {
  return {
    type: SET_INSTRUCTORS_NEXT_SEMESTER_FILTER,
    payload: parseInt(value),
  };
};

export const resetInstructorFilters = () => {
  return { type: SET_INSTRUCTORS_NEXT_SEMESTER_FILTER, payload: 1 };
};

export const setInstructorsKeywordFilterValue = (value) => {
  return { type: SET_PROFNAME_KEYWORD_FILTER_VALUE, payload: value };
};

export const setInstructorsFuse = (instructors) => {
  // const fuseArray = instructors.map((instructor) => {
  //   return instructor.item;
  // });

  return { type: SET_INSTRUCTORS_ON_PAGE, payload: instructors };
};
