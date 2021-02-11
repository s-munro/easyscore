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
    <main className="row w-100">
      <div className="col-12 d-flex justify-content-center">
        <h1 className="logoTitle">
          <b>Easy</b>
          <span className="scoreLogo">Score</span>
        </h1>
      </div>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <Hidden smDown>
          <SearchForm nav={false} />
        </Hidden>
        <Hidden mdUp>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <MobileSearchForm />
            <Button
              className="homeFilterBtn homeModalBtn btn-top-padding shadow-none"
              onClick={handleModal}
              name="view-filters-button"
            >
              Filters
            </Button>
          </div>
        </Hidden>
      </div>
      <FiltersModal />
    </main>
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
