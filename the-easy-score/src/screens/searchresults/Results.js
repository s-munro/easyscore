import React from "react";
import { connect } from "react-redux";
import { fetchResults } from "../../actions";

// import getData from "../../utils/api/axiosCall";

import "./styles.css";

const Results = () => {
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
    params: state.params,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchResults })(Results);
