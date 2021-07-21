import axios from "axios";

import { BASE_URL } from '../static/url';

export const getCourses = async (query) => {
  return axios.get(`${BASE_URL + '=' + query}`);
};

export const getCourseData = async (courseCode) => {
  return axios.get(`${BASE_URL}/course=${courseCode}`);
};
