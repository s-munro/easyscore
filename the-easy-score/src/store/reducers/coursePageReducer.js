import { FETCH_COURSE_PAGE_SUCCESS, SET_COURSES_ON_PAGE } from '../actions/fetchDataActions';
import { FUSE_RESET_COURSE_PAGE_FILTERS } from '../actions/filtersActions';
import {
  SET_PROFNAME_KEYWORD_FILTER_VALUE,
  SET_COURSE_PAGE_EASY_SCORE_FILTER_VALUE,
  SET_COURSE_PAGE_PERCENTAGE_A_FILTER_VALUE,
  SET_COURSE_PAGE_MINIMUM_SEMESTERS_FILTER_VALUE,
  RESET_COURSE_PAGE_FILTERS,
  SET_INSTRUCTORS_NEXT_SEMESTER_FILTER,
  SET_INSTRUCTORS_ON_PAGE
} from '../actions/filtersActions';

const initialState = {
  displayedCourses: [],
  coursePage: {
    course: [],
    instructors: [],
    displayedInstructors: [],
    filters: {
      next_sem: 1,
      profName: "",
      ratingFilter: 1,
      percentageAs: 1,
      minSemestersTaught: 1,
    },
  },
};

export const coursePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFNAME_KEYWORD_FILTER_VALUE:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          filters: {
            ...state.coursePage.filters,
            profName: action.payload,
          },
        },
      };
    case SET_COURSE_PAGE_EASY_SCORE_FILTER_VALUE:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          filters: {
            ...state.coursePage.filters,
            ratingFilter: action.payload,
          },
        },
      };
    case SET_COURSE_PAGE_PERCENTAGE_A_FILTER_VALUE:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          filters: {
            ...state.coursePage.filters,
            percentageAs: action.payload,
          },
        },
      };
    case SET_COURSE_PAGE_MINIMUM_SEMESTERS_FILTER_VALUE:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          filters: {
            ...state.coursePage.filters,
            minSemestersTaught: action.payload,
          },
        },
      };
    case RESET_COURSE_PAGE_FILTERS:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          filters: {
            ...state.coursePage.filters,
            next_sem: 1,
            ratingFilter: 1,
            percentageAs: 1,
            minSemestersTaught: 1,
          },
        },
      };
    case FUSE_RESET_COURSE_PAGE_FILTERS:
      return {
        ...state,
        coursePage: {
          ...state.coursePage,
          filters: {
            ...state.coursePage.filters,
            ratingFilter: 1,
            percentageAs: 1,
            minSemestersTaught: 1,
          },
        },
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
    default:
      return state;
  }
};
