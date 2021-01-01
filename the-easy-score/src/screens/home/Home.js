import React from "react";
import "./home.css";

import SearchForm from "./SearchForm";

const Home = (props) => {
  return (
    <main className="home-main">
      <div>
        <h2>Choose the <b id='home-emphasis'>easy</b> option</h2>
      </div>
      <SearchForm push={props.history.push} />
    </main>
  );
};

export default Home;
