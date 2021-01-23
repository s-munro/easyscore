// SEARCHFORM FILTERS EXPORTS
export const SET_KEYWORD_FILTER_VALUE = "SET_KEYWORD_FILTER_VALUE";
export const SET_LEVEL_FILTER_VALUE = "SET_LEVEL_FILTER_VALUE";
export const SET_REQUIREMENTS_FILTER_VALUE = "SET_REQUIREMENTS_FILTER_VALUE";
export const SET_CREDITS_FILTER_VALUE = "SET_CREDITS_FILTER_VALUE";
export const SET_TIME_FILTER_VALUE = "SET_TIME_FILTER_VALUE";
export const RESET_FILTER_VALUES = "RESET_FILTER_VALUES";

// RESULTS PAGE FILTERS EXPORTS
export const SEARCH_PAGE_FILTERS_COURSE_LEVEL_FILTER_VALUE =
  "SEARCH_PAGE_COURSE_LEVEL_FILTER_VALUE";
export const SEARCH_PAGE_FILTERS_COURSE_NEXT_SEMESTER_FILTER_VALUE =
  "SEARCH_PAGE_COURSE_NEXT_SEMESTER_FILTER_VALUE";
export const SEARCH_PAGE_FILTERS_COURSE_REQUIREMENTS_VALUE =
  "SEARCH_PAGE_COURSE_REQUIREMENTS_FILTER_VALUE";
export const SEARCH_PAGE_FILTERS_COURSE_CREDIT_HOURS_VALUE =
  "SEARCH_PAGE_COURSE_CREDIT_HOURS_FILTER_VALUE";
export const SEARCH_PAGE_FILTERS_COURSE_TIME_FILTER_VALUE =
  "SEARCH_PAGE_FILTERS_COURSE_TIME_FILTER_VALUE";
export const SEARCH_PAGE_FILTERS_RESET = "SEARCH_PAGE_FILTERS_RESET";

// COURSE PAGE EXPORTS **
export const SET_INSTRUCTORS_NEXT_SEMESTER_FILTER =
  "SET_INSTRUCTORS_NEXT_SEMESTER_FILTER";
export const SET_PROFNAME_KEYWORD_FILTER_VALUE =
  "SET_PROFNAME_KEYWORD_FILTER_VALUE";
export const SET_INSTRUCTORS_ON_PAGE = "SET_INSTRUCTORS_ON_PAGE";
export const SET_COURSE_PAGE_EASY_SCORE_FILTER_VALUE =
  "SET_COURSE_PAGE_EASY_SCORE_FILTER_VALUE";
export const SET_COURSE_PAGE_PERCENTAGE_A_FILTER_VALUE =
  "SET_COURSE_PAGE_PERCENTAGE_A_FILTER_VALUE";
export const SET_COURSE_PAGE_MINIMUM_SEMESTERS_FILTER_VALUE =
  "SET_COURSE_PAGE_MINIMUM_SEMESTERS_FILTER_VALUE";

// SEARCHFORM ** SearchForm.js Filter-related actions ***

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

// SEARCH PAGE FILTERS
export const setSearchPageFiltersCourseLevel = (level) => {
  if (level !== "") {
    return {
      type: SEARCH_PAGE_FILTERS_COURSE_LEVEL_FILTER_VALUE,
      payload: parseInt(level),
    };
  } else {
    return {
      type: SEARCH_PAGE_FILTERS_COURSE_LEVEL_FILTER_VALUE,
      payload: level,
    };
  }
};

export const setSearchPageFiltersCourseNextSemester = (nextSemesterValue) => {
  return {
    type: SEARCH_PAGE_FILTERS_COURSE_NEXT_SEMESTER_FILTER_VALUE,
    payload: nextSemesterValue,
  };
};

export const setSearchPageFiltersCourseRequirements = (requirements) => {
  if (requirements !== "") {
    return {
      type: SEARCH_PAGE_FILTERS_COURSE_REQUIREMENTS_VALUE,
      payload: parseInt(requirements),
    };
  } else {
    return {
      type: SEARCH_PAGE_FILTERS_COURSE_REQUIREMENTS_VALUE,
      payload: requirements,
    };
  }
};

export const setSearchPageFiltersCourseCreditHours = (creditHours) => {
  if (creditHours !== "") {
    return {
      type: SEARCH_PAGE_FILTERS_COURSE_CREDIT_HOURS_VALUE,
      payload: parseInt(creditHours),
    };
  } else {
    return {
      type: SEARCH_PAGE_FILTERS_COURSE_CREDIT_HOURS_VALUE,
      payload: creditHours,
    };
  }
};

export const setSearchPageFiltersTimeofDay = (timeofDay) => {
  if (timeofDay !== "") {
    return {
      type: SEARCH_PAGE_FILTERS_COURSE_TIME_FILTER_VALUE,
      payload: parseInt(timeofDay),
    };
  } else {
    return {
      type: SEARCH_PAGE_FILTERS_COURSE_TIME_FILTER_VALUE,
      payload: timeofDay,
    };
  }
};

export const resetSearchPageFilters = () => {
  return { type: SEARCH_PAGE_FILTERS_RESET };
};

// COURSES ** Results.js Filters-related actions ****************

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

export const setInstructorEasyScoreFilterValue = (value) => {
  return {
    type: SET_COURSE_PAGE_EASY_SCORE_FILTER_VALUE,
    payload: parseInt(value),
  };
};

export const setInstructorPercentageAsFilterValue = (value) => {
  return {
    type: SET_COURSE_PAGE_PERCENTAGE_A_FILTER_VALUE,
    payload: parseInt(value),
  };
};

export const setInstructorMinimumSemestersFilterValue = (value) => {
  return {
    type: SET_COURSE_PAGE_MINIMUM_SEMESTERS_FILTER_VALUE,
    payload: parseInt(value),
  };
};
