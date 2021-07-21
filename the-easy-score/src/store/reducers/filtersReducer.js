import {
  SET_KEYWORD_FILTER_VALUE,
  SET_LEVEL_FILTER_VALUE,
  SET_REQUIREMENTS_FILTER_VALUE,
  SET_CREDITS_FILTER_VALUE,
  SET_TIME_FILTER_VALUE,
  RESET_FILTER_VALUES
} from '../actions/filtersActions';

const initialState = {
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
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
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
          next_sem: { ...state.filters.next_sem, value: action.payload },
        },
      };
    default:
      return state;
  }
};
