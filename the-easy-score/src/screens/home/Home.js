import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setNavStyle } from "../../actions/index";

import SearchForm from "./components/SearchForm";
import Nav from "../../navbar/Nav";
import "./home.css";

const Home = (props) => {
  useEffect(() => {
    props.setNavStyle(1);
  }, []);

  return (
    <div className="container">
      <main>
        <div className="logoTitleContainer">
          <h1 className="logoTitle">
            <b>Easy</b>
            <span className="scoreLogo">Score</span>
          </h1>
        </div>
        <SearchForm button={true} filters={true} />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
  };
};

export default connect(mapStateToProps, { setNavStyle })(Home);
