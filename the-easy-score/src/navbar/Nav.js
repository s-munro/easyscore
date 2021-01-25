import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
} from "../actions/filtersActions";

import {
  requirementsValues,
  courseLevelValues,
  creditHoursValues,
  timeofDayValues,
} from "../data/FilterSelectsData";

import SearchForm from "../components/SearchForm";
import Hidden from "@material-ui/core/Hidden";
import FilterListIcon from "@material-ui/icons/FilterList";
import FilterSelect from "../components/FilterSelect";

import { Button } from "react-bootstrap";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

// import "../App.css";
import "./Nav.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Nav = (props) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  const handleClickOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "keyword") {
      props.setKeywordFilterValue(e.target.value);
    } else if (e.target.name === "courseLevel") {
      props.setLevelFilterValue(e.target.value);
    } else if (e.target.name === "creditHours") {
      props.setCreditsFilterValue(e.target.value);
    } else if (e.target.name === "timeofDay") {
      props.setTimeFilterValue(e.target.value);
    } else if (e.target.name === "requirements") {
      props.setRequirementsFilterValue(e.target.value);
    } else {
    }
  };

  const handleFiltersReset = () => {
    props.resetFilterValues();
  };

  if (props.navStyle === 1) {
    return (
      /************** NAV 1 ******************/
      <nav className=" nav-bar">
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
      </nav>
    );
  } else if (props.navStyle === 2) {
    return (
      /**************** NAV 2 ******************/
      <div>
        <Hidden smDown>
          <nav className=" nav-2">
            <Link className="nav-bar-2-logo" to="/">
              <div>
                <b className="nav-bar-2-easy-text">Easy</b>Score
              </div>
            </Link>
            <Link className="nav-bar-2-text-link" to="/about">
              <div>About</div>
            </Link>
            <Link className="nav-bar-2-text-link" to="/contact">
              <div>Contact</div>
            </Link>
          </nav>
        </Hidden>
        {/************** NAV 2 MOBILE ******************/}
        <Hidden mdUp>
          <nav>
            <Link className="nav-bar-2-logo" to="/">
              <div>
                <b className="nav-bar-2-easy-text">Easy</b>Score
              </div>
            </Link>
          </nav>
        </Hidden>
      </div>
    );
  } else {
    return (
      <div>
        <Hidden smDown>
          <nav className="">
            <Link className="nav-bar-3-logo" to="/">
              <div>
                <b className="nav-bar-3-easy-text">Easy</b>Score
              </div>
            </Link>
            <SearchForm formType={"nav"} />
            <FilterListIcon onClick={handleClickOpen} />
          </nav>
        </Hidden>
        {/************** MOBILE NAV 3 ******************/}
        <Hidden mdUp>
          <nav className="">
            <div className="d-flex justify-content-between">
              <Link className="mobile-nav-bar-3-logo" to="/">
                <div>
                  <b className="mobile-nav-bar-3-easy-text">Easy</b>Score
                </div>
              </Link>
              <div className="d-flex">
                {/* <Link className="" to="/about">
                  <div>About</div>
                </Link>
                <Link className="" to="/contact">
                  <div>Contact</div>
                </Link> */}
              </div>
            </div>
            <SearchForm formType={"nav"} />
          </nav>
        </Hidden>
        {/*******************  POPUP MODAL *******************/}
        <Dialog
          // fullScreen
          open={showModal}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <WhiteTextTypography variant="h6" className={classes.title}>
                Filters
              </WhiteTextTypography>
            </Toolbar>
          </AppBar>
          <List>
            <div className="col mr-4">
              <div className="row mt-3 mb-2 d-flex justify-content-center">
                <ListItem>
                  {/* <ListItemText primary="Course Level" /> */}
                  <FilterSelect
                    select_id={"courseLevel"}
                    handleSelectChange={handleChange}
                    selectValues={courseLevelValues}
                    selectValue={props.filters.courseLevel.value}
                  />
                </ListItem>
              </div>
              <Divider />
              <div className="row mt-3 mb-2 d-flex justify-content-center">
                <ListItem>
                  {/* <ListItemText primary="Credit Hours" /> */}
                  <div className="d-flex justify-content-center align-items-center">
                    <FilterSelect
                      select_id={"creditHours"}
                      handleSelectChange={handleChange}
                      selectValues={creditHoursValues}
                      selectValue={props.filters.creditHours.value}
                    />
                  </div>
                </ListItem>
              </div>
              <Divider />
              <div className="row mt-3 mb-2 d-flex justify-content-center">
                <ListItem>
                  {/* <ListItemText primary="Requirements Fulfilled" /> */}
                  <br />
                  <div className="d-flex justify-content-center align-items-center">
                    <FilterSelect
                      select_id={"requirements"}
                      handleSelectChange={handleChange}
                      selectValues={requirementsValues}
                      selectValue={props.filters.requirements.value}
                    />
                  </div>
                </ListItem>
              </div>
              <Divider />
              <div className="row mt-3 mb-2 d-flex justify-content-center">
                <ListItem>
                  {/* <ListItemText primary="Time of Day" /> */}
                  <br />
                  <div className="d-flex justify-content-center align-items-center">
                    <FilterSelect
                      select_id={"timeofDay"}
                      handleSelectChange={handleChange}
                      selectValues={timeofDayValues}
                      selectValue={props.filters.timeofDay.value}
                    />
                  </div>
                </ListItem>
              </div>
              <Divider />
              <div className="row mt-3 mb-2 d-flex justify-content-center">
                <Button
                  className="homeFilterBtn homeApply shadow-none"
                  onClick={handleClose}
                >
                  Apply
                </Button>
                <Button
                  className="homeFilterBtn shadow-none"
                  onClick={handleFiltersReset}
                >
                  Reset
                </Button>
              </div>
            </div>
          </List>
        </Dialog>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
    filters: state.filters,
  };
};

export default connect(mapStateToProps, {
  setKeywordFilterValue,
  setLevelFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  setRequirementsFilterValue,
})(Nav);
