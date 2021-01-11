import axios from "axios";

export const getData = () => {
  //this will call axios
  return axios.create({
    baseURL: `https://theeasyscore.com/results&jsonquery=`,
  });
};

// https://cors-anywhere.herokuapp.com/
