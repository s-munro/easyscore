import React from "react";
import "./styles.css";

import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <main className="home-main">
      <div>
        <h2>Easy Score Home Page</h2>
      </div>
      <SearchForm />
    </main>
  );
};

export default Home;
