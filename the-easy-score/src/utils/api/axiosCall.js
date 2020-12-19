import axios from "axios";

const getData = () => {
  //this will call axios
  return axios.create({
    baseURL: "https://theeasyscore.com/results&jsonquery=",
  });
};

export default getData;
