import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SET_COURSES_ON_PAGE,
  SET_LEVEL_FILTER_VALUE,
  SET_KEYWORD_FILTER_VALUE,
  SET_REQUIREMENTS_FILTER_VALUE,
  SET_CREDITS_FILTER_VALUE,
  SET_TIME_FILTER_VALUE,
  RESET_FILTER_VALUES,
  SET_NAV_STYLE,
  FETCH_COURSE_PAGE_SUCCESS,
  SET_INSTRUCTORS_ON_PAGE,
  SET_INSTRUCTORS_NEXT_SEMESTER_FILTER,
} from "../actions";

const initialState = {
  isLoading: false,
  courses: [],
  displayedCourses: [],
  coursePage: {
    course: [],
    instructors: [],
    displayedInstructors: [],
    filters: {
      next_sem: 1,
    },
  },
  errorText: "",
  filters: {
    courseLevel: {
      isActive: false,
      value: "",
    },
    requirements: {
      isActive: false,
      value: "",
    },
    creditHours: {
      isActive: false,
      value: "",
    },
    timeofDay: {
      isActive: false,
      value: "",
    },
    keyword: {
      isActive: false,
      value: "",
    },
    next_sem: {
      isActive: false,
      value: "",
    },
  },
  navStyle: 1,
};

const reducer = (state = initialState, action) => {
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
    case SET_COURSES_ON_PAGE:
      return { ...state, displayedCourses: action.payload };
    case FETCH_COURSE_PAGE_SUCCESS:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          instructors: action.payload.instructors,
          course: action.payload,
        },
        isLoading: false,
      };
    case SET_INSTRUCTORS_NEXT_SEMESTER_FILTER:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          filters: {
            ...state.coursePage.filters,
            next_sem: action.payload,
          },
        },
      };
    case SET_INSTRUCTORS_ON_PAGE:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          displayedInstructors: action.payload,
        },
      };
    case SET_KEYWORD_FILTER_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          keyword: { ...state.filters.keyword, value: action.payload },
        },
      };
    case SET_LEVEL_FILTER_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          courseLevel: { ...state.filters.courseLevel, value: action.payload },
        },
      };
    case SET_REQUIREMENTS_FILTER_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          requirements: {
            ...state.filters.requirements,
            value: action.payload,
          },
        },
      };
    case SET_CREDITS_FILTER_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          creditHours: { ...state.filters.creditHours, value: action.payload },
        },
      };
    case SET_TIME_FILTER_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          timeofDay: { ...state.filters.timeofDay, value: action.payload },
        },
      };
    case RESET_FILTER_VALUES:
      return {
        ...state,
        filters: {
          courseLevel: { ...state.filters.courseLevel, value: action.payload },
          requirements: {
            ...state.filters.requirements,
            value: action.payload,
          },
          creditHours: { ...state.filters.creditHours, value: action.payload },
          timeofDay: { ...state.filters.timeofDay, value: action.payload },
          keyword: { ...state.filters.keyword, value: action.payload },
          next_sem: { ...state.filters.keyword, value: action.payload },
        },
      };
    case SET_NAV_STYLE:
      return {
        ...state,
        navStyle: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
