import React from "react";
import "./styles.css";

import SearchForm from "./components/SearchForm";

const Home = (props) => {
  return (
    <main className="home-main">
      <div>
        <h2>Easy Score Home Page</h2>
      </div>
      <SearchForm push={props.history.push} />
    </main>
  );
};

export default Home;
