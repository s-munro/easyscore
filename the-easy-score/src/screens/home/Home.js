import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setNavStyle, setFooterStyle, setShowModal } from "../../actions/index";

import MobileSearchForm from "./mobileSearch/MobileSearchForm";
import FiltersModal from "../../components/FiltersModal";
import SearchForm from "../../components/SearchForm";

import Hidden from "@material-ui/core/Hidden";
import { Button } from "react-bootstrap";
import "./home.css";

const Home = (props) => {
  useEffect(() => {
    props.setNavStyle(1);
    props.setFooterStyle(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModal = (e) => {
    e.preventDefault();
    props.setShowModal(!props.showModal);
  };

  return (
    <div className="container">
      <main>
        <div className="logoTitleContainer">
          <h1 className="logoTitle">
            <b>Easy</b>
            <span className="scoreLogo">Score</span>
          </h1>
        </div>
        <Hidden smDown>
          <SearchForm nav={false} />
        </Hidden>
        <Hidden mdUp>
          <MobileSearchForm />
          <Button
            className="homeFilterBtn homeModalBtn btn-top-padding shadow-none"
            onClick={handleModal}
            // block
          >
            Filters
          </Button>
        </Hidden>
        <FiltersModal />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
    footerStyle: state.footerStyle,
    showModal: state.showModal,
  };
};

export default connect(mapStateToProps, {
  setNavStyle,
  setFooterStyle,
  setShowModal,
})(Home);
