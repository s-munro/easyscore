export const SET_NAV_STYLE = "SET_NAV_STYLE";
export const SET_FOOTER_STYLE = "SET_FOOTER_STYLE";

export const setNavStyle = (style) => {
  return { type: SET_NAV_STYLE, payload: parseInt(style) };
};

export const setFooterStyle = (style) => {
  return { type: SET_FOOTER_STYLE, payload: parseInt(style) };
};
