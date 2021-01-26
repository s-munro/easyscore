import axios from "axios";

// REDUCERS ** exports
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const SET_COURSES_ON_PAGE = "SET_COURSES_ON_PAGE";
export const FETCH_COURSE_PAGE_SUCCESS = "FETCH_COURSE_PAGE_SUCCESS";
export const SET_INSTRUCTORS_ON_PAGE = "SET_INSTRUCTORS_ON_PAGE";

// SEARCH PAGE **

export const fetchResults = (url) => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  axios
    .get(`https://theeasyscore.com/results&jsonquery=${url}`)
    .then((res) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.courses });
      dispatch({
        type: SET_COURSES_ON_PAGE,
        payload: res.data.courses.sort(function (a, b) {
          return b.rating - a.rating;
        }),
      });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.message });
    });
};

export const setCourses = (courses) => {
  return {
    type: SET_COURSES_ON_PAGE,
    payload: courses.sort(function (a, b) {
      return b.rating - a.rating;
    }),
  };
};

// COURSE PAGE
export const setInstructors = (instructors) => {
  return {
    type: SET_INSTRUCTORS_ON_PAGE,
    payload: instructors.sort(function (a, b) {
      return b.rating - a.rating;
    }),
  };
};

export const fetchCoursePage = (full_code) => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });

  axios
    .get(`https://theeasyscore.com/results&jsonquery/course=${full_code}`)
    .then((res) => {
      dispatch({ type: FETCH_COURSE_PAGE_SUCCESS, payload: res.data.course });
      const nextSemesterProfessors = res.data.course.instructors.filter(
        (professor) => {
          return professor.is_teaching_next_semester === 1;
        }
      );
      dispatch({
        type: SET_INSTRUCTORS_ON_PAGE,
        payload: nextSemesterProfessors.sort(function (a, b) {
          return b.rating - a.rating;
        }),
      });
    })
    .catch((err) => {
      dispatch({ type: FETCH_DATA_FAILURE });
    });
};
