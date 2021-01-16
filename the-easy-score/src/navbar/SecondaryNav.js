import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { connect } from "react-redux";

import "../App.css";

const SecondaryNav = (props) => {
  const initialFormValue = {
    keyword: "",
  };

  const history = useHistory();

  const [urlValues, setUrlValues] = useState(initialFormValue);

  const handleChange = (e) => {
    e.persist();
    setUrlValues({ ...urlValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const newUrl = `'keyword'=_'${urlValues.keyword}'&_'requirement'=_''&_'level'=_''&_'credit'=_''&_'timing'=_''&_'next_sem'=_''&_'days'=_[]`;

    history.push(`/search/${newUrl}`);
  };
  return (
    <nav className="nav-bar-2">
      <div className="logoContainer">
        <Link to="/">
          <div className="homeLogo">The Easy Score</div>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="keyword"
            placeholder="Search Keyword"
            value={urlValues.keyword}
            onChange={handleChange}
          />
        </label>
        <button>Search</button>
      </form>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(SecondaryNav);
