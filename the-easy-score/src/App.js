import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./footer/Footer";

import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Course from "./screens/coursepage/Course";
import Results from "./screens/searchresults/Results";
import Home from "./screens/home/Home";

// import Test from "./testpage/Test";

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
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route path="/about" render={(props) => <About {...props} />} />
        <Route
          path="/courses/:courseid"
          render={(props) => <Course {...props} />}
        />
        <Route
          path="/search/:axiosUrl"
          render={(props) => <Results {...props} />}
        />
        {/* <Route path="/test" render={(props) => <Test {...props} />} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
