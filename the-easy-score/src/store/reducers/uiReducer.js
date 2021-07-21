import {
  SET_NAV_STYLE,
  SET_FOOTER_STYLE,
  SET_SHOW_MODAL
} from '../actions';

const initialState = {
  navStyle: 1,
  footerStyle: 1,
  showModal: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_STYLE:
      return {
        ...state,
        navStyle: action.payload,
      };
    case SET_FOOTER_STYLE:
      return {
        ...state,
        footerStyle: action.payload,
      };
    case SET_SHOW_MODAL:
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};
