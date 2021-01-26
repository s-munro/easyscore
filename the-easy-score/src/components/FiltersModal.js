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

import { Button } from "react-bootstrap";
import FilterSelect from "../../../components/FilterSelect";

import "../screens/home/home.css;";

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

const FiltersModal = (props) => {
  const classes = useStyles();
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

  const handleFiltersReset = () => {
    props.resetFilterValues();
  };
  return (
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
  );
};

const mapStateToProps = (state) => {
  return {
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
})(FiltersModal);
