import {
  SEARCH_PAGE_FILTERS_COURSE_LEVEL_FILTER_VALUE,
  SEARCH_PAGE_FILTERS_COURSE_NEXT_SEMESTER_FILTER_VALUE,
  SEARCH_PAGE_FILTERS_COURSE_REQUIREMENTS_VALUE,
  SEARCH_PAGE_FILTERS_COURSE_CREDIT_HOURS_VALUE,
  SEARCH_PAGE_FILTERS_COURSE_TIME_FILTER_VALUE,
  SEARCH_PAGE_FILTERS_RESET
} from '../actions/filtersActions';

const initialState = {
  resultsPage: {
    displayedCourses: [],
    filtersCard: {
      courseLevel: {
        value: "",
      },
      requirements: {
        value: "",
      },
      creditHours: {
        value: "",
      },
      timeofDay: {
        value: "",
      },
      keyword: {
        value: "",
      },
      next_sem: {
        value: 1,
      },
    },
  },
};

export const resultsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PAGE_FILTERS_COURSE_LEVEL_FILTER_VALUE:
      return {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          filtersCard: {
            ...state.resultsPage.filtersCard,
            courseLevel: {
              ...state.resultsPage.filtersCard.courseLevel,
              value: action.payload,
            },
          },
        },
      };
    case SEARCH_PAGE_FILTERS_COURSE_NEXT_SEMESTER_FILTER_VALUE:
      return {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          filtersCard: {
            ...state.resultsPage.filtersCard,
            next_sem: {
              ...state.resultsPage.filtersCard.next_sem,
              value: action.payload,
            },
          },
        },
      };
    case SEARCH_PAGE_FILTERS_COURSE_REQUIREMENTS_VALUE:
      return {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          filtersCard: {
            ...state.resultsPage.filtersCard,
            requirements: {
              ...state.resultsPage.filtersCard.requirements,
              value: action.payload,
            },
          },
        },
      };
    case SEARCH_PAGE_FILTERS_COURSE_CREDIT_HOURS_VALUE:
      return {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          filtersCard: {
            ...state.resultsPage.filtersCard,
            creditHours: {
              ...state.resultsPage.filtersCard.creditHours,
              value: action.payload,
            },
          },
        },
      };
    case SEARCH_PAGE_FILTERS_COURSE_TIME_FILTER_VALUE:
      return {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          filtersCard: {
            ...state.resultsPage.filtersCard,
            timeofDay: {
              ...state.resultsPage.filtersCard.timeofDay,
              value: action.payload,
            },
          },
        },
      };
    case SEARCH_PAGE_FILTERS_RESET:
      return {
        ...state,
        resultsPage: {
          ...state.resultsPage,
          filtersCard: {
            ...state.resultsPage.filtersCard,
            courseLevel: {
              value: "",
            },
            next_sem: {
              value: 1,
            },
            requirements: {
              value: "",
            },
            creditHours: {
              value: "",
            },
            timeofDay: {
              value: "",
            },
          },
        },
      };

    default:
      return state;
  }
};