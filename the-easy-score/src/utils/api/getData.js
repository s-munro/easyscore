import axios from "axios";

export const getData = () => {
  //this will call axios
  return axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://theeasyscore.com/results&jsonquery=`,
  });
};
