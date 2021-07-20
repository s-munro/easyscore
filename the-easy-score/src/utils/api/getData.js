import axios from "axios";

export const getData = () => {
  return axios.create({
    baseURL: `https://theeasyscore.com/results&jsonquery=`,
  });
};
