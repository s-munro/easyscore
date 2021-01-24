import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setNavStyle } from "../../actions/index";

import MobileSearchForm from "./mobileSearch/MobileSearchForm";
import SearchForm from "../../components/SearchForm";

import Hidden from "@material-ui/core/Hidden";
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
        <Hidden only={["sm", "xs"]}>
          <SearchForm nav={false} />
        </Hidden>
        <Hidden only={["lg", "md"]}>
          <MobileSearchForm />
        </Hidden>
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
