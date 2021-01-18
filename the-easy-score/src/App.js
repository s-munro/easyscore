import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./footer/Footer";

import Contact from "./screens/contact/Contact";
import About from "./screens/about/About";
import Course from "./screens/coursepage/Course";
import Results from "./screens/searchresults/Results";
import Home from "./screens/home/Home";
import Nav from "./navbar/Nav";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Nav />
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
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
