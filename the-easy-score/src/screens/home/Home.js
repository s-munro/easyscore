import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setNavStyle, setFooterStyle } from "../../actions/index";

import MobileSearchForm from "./mobileSearch/MobileSearchForm";
import SearchForm from "../../components/SearchForm";

import Hidden from "@material-ui/core/Hidden";
import "./home.css";

const Home = (props) => {
  useEffect(() => {
    props.setNavStyle(1);
    props.setFooterStyle(1);
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
        <Hidden only={["xs"]}>
          <SearchForm nav={false} />
        </Hidden>
        <Hidden smUp>
          <MobileSearchForm />
        </Hidden>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
    footerStyle: state.footerStyle,
  };
};

export default connect(mapStateToProps, { setNavStyle, setFooterStyle })(Home);
