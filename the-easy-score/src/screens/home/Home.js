import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setNavStyle } from "../../actions/index";

import SearchForm from "./components/SearchForm";
import Nav from "../../navbar/Nav";
import "./home.css";
// Sheena,
// React boostrap FormControl documentation below, covers styling I think:
// https://react-bootstrap.github.io/components/forms/
// the documentation is fucking massive

const Home = (props) => {
  useEffect(() => {
    props.setNavStyle(1);
  }, []);

  return (
    <div className="container">
      <Nav />
      <main>
        <div className="logoTitleContainer">
         <h1 className="logoTitle"><b>Easy</b><span className="scoreLogo">Score</span></h1>
        </div>
        <SearchForm />
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
