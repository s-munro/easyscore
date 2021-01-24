import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  setKeywordFilterValue,
  setLevelFilterValue,
  setRequirementsFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  resetFilterValues,
} from "../../../actions/filtersActions";

import {
  requirementsValues,
  courseLevelValues,
  creditHoursValues,
  timeofDayValues,
} from "../../../data/FilterSelectsData";

import { FormControl, Button, InputGroup } from "react-bootstrap";
import FilterSelect from "../../../components/FilterSelect";

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

import "../home.css";

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

const MobileSearchForm = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { formType } = props;
  const [showModal, setShowModal] = useState(false);

  const handleClickOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    props.resetFilterValues();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUrl = `'keyword'=_'${props.filters.keyword.value}'&_'requirement'=_'${props.filters.requirements.value}'&_'level'=_'${props.filters.courseLevel.value}'&_'credit'=_'${props.filters.creditHours.value}'&_'timing'=_'${props.filters.timeofDay.value}'&_'next_sem'=_''&_'days'=_[]`;

    history.push(`/search/${newUrl}`);
  };

  const handleFiltersReset = () => {
    props.resetFilterValues();
  };

  if (formType !== "nav") {
    return (
      <div className="home-form-container w-100">
        <form onSubmit={handleSubmit}>
          <InputGroup className="inputAndBtnContainer">
            <FormControl
              className="inputContainer"
              value={props.filters.keyword.value}
              onChange={handleChange}
              placeholder="Search for keyword, i.e., 'Biology'"
              name="keyword"
              id="searchForm-nonNav"
            />
            <InputGroup.Append>
              <Button
                className="homeSrchBtn"
                type="submit"
                onSubmit={handleSubmit}
                id="basic-addon2"
              >
                <i className="fa fa-search"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <div className="row d-flex justify-content-center">
            <Button
              className="homeFilterBtn shadow-none"
              onClick={handleClickOpen}
              // block
            >
              Open Course Filters
            </Button>
          </div>

          {/***************** Begin Popup Dialog  *******************/}
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
                  {/* Filters */}
                </WhiteTextTypography>
              </Toolbar>
            </AppBar>
            <List>
              <div className="col mr-4">
                <div className="row mt-3 mb-2 d-flex justify-content-center">
                  <ListItem>
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
                    <FilterSelect
                      select_id={"creditHours"}
                      handleSelectChange={handleChange}
                      selectValues={creditHoursValues}
                      selectValue={props.filters.creditHours.value}
                    />
                  </ListItem>
                </div>
                <Divider />
                <div className="row mt-3 mb-2 d-flex justify-content-center">
                  <ListItem>
                    <br />
                    <FilterSelect
                      select_id={"requirements"}
                      handleSelectChange={handleChange}
                      selectValues={requirementsValues}
                      selectValue={props.filters.requirements.value}
                    />
                  </ListItem>
                </div>
                <Divider />
                <div className="row mt-3 mb-2 d-flex justify-content-center">
                  <ListItem>
                    <br />
                    <FilterSelect
                      select_id={"timeofDay"}
                      handleSelectChange={handleChange}
                      selectValues={timeofDayValues}
                      selectValue={props.filters.timeofDay.value}
                    />
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
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    courses: state.courses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps, {
  setKeywordFilterValue,
  setLevelFilterValue,
  setRequirementsFilterValue,
  setCreditsFilterValue,
  setTimeFilterValue,
  resetFilterValues,
})(MobileSearchForm);
