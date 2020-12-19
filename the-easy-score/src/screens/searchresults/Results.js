import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchResults } from "../../actions";
import { useParams } from "react-router-dom";

import { getData } from "../../utils/api/getData";

import "./styles.css";

const Results = (props) => {
  const params = useParams();

  console.log("params: ", params);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResults(getData, params.axiosUrl));
  }, []);

  return (
    <main className="results-container">
      <div>You made it to search results!</div>
    </main>
  );
};

// search button will push to this page, axios calls using url from state
// how do we get a unique url to bookmark/return to?
// ^^^^ what would be neccesary? ^^^^:
// <Route to="???????" <-- how to figure out the url & render ?
// push to route, then use useParams to draw props for axios call

const mapStateToProps = (state) => {
  return {
    searchUrl: state.searchUrl,
    isLoading: state.isLoading,
    courses: state.courses,
    errorText: state.errorText,
  };
};

export default connect(mapStateToProps, { fetchResults })(Results);
