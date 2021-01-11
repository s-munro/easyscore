export const filterToKeyword = (axiosUrl, stateFunction) => {
  const keywordSplit = axiosUrl
    .split(/'keyword'=_'/)
    .pop()
    .split(/'&_'requirement'=_'/);
  const keyword = keywordSplit[0];
  return stateFunction(keyword);
};
