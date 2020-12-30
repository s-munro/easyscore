import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./navbar/Nav";
import Footer from "./footer/Footer";

import Contact from "./screens/contact/Contact";
import Course from "./screens/coursepage/Course";
import Professor from "./screens/professorpage/Professor";
import Results from "./screens/searchresults/Results";
import Home from "./screens/home/Home";

import "./App.css";

// set up loading component for when isLoading true
// set up routing for contact?
// set up routing for help?
// plug in actual data to course page
// filter components
// global state for filters?

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route
          path="/courses/:courseid"
          render={(props) => <Course {...props} />}
        />
        <Route
          path="/professors/:id"
          render={(props) => <Professor {...props} />}
        />
        <Route
          path="/search/:axiosUrl"
          render={(props) => <Results {...props} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
