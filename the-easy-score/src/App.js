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

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/contact" render={(props) => <Contact {...props} />} />
        <Route path="/courses/:id" render={(props) => <Course {...props} />} />
        <Route
          path="/professors/:id"
          render={(props) => <Professor {...props} />}
        />
        <Route path="/search" render={(props) => <Results {...props} />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
