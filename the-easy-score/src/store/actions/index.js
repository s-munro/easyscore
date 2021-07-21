export const SET_NAV_STYLE = "SET_NAV_STYLE";
export const SET_FOOTER_STYLE = "SET_FOOTER_STYLE";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";

export const setNavStyle = (style) => {
  return { type: SET_NAV_STYLE, payload: parseInt(style) };
};

export const setFooterStyle = (style) => {
  return { type: SET_FOOTER_STYLE, payload: parseInt(style) };
};

export const setShowModal = (boolean) => {
  return { type: SET_SHOW_MODAL, payload: boolean };
};
