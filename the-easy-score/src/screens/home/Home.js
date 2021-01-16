import React from "react";
import Nav from "../../navbar/Nav";
// import Frame from "../home/components/computerscreen.jpg";
import "./home.css";
// import SecondaryNav from "../../navbar/SecondaryNav";
import SearchForm from "./components/SearchForm";
// import SlideShow from "./components/SlideShow";

// Sheena,
// React boostrap FormControl documentation below, covers styling I think:
// https://react-bootstrap.github.io/components/forms/
// the documentation is fucking massive

const Home = (props) => {
  return (
    <div>
      <Nav />
      <main>
        <h1>
          Easy<span>Score</span>
        </h1>
        <SearchForm />
      </main>
    
    </div>
  );
};

export default Home;
