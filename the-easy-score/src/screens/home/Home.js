import React from "react";
import Nav from "../../navbar/Nav";
import "./home.css";
import SecondaryNav from "../../navbar/SecondaryNav";
import SearchForm from "./components/SearchForm";

const Home = (props) => {
  return (
    <div>
      <SecondaryNav />
      <main className="home-main">
        <div className="homePageLeftMain">
          <h2>
            Welcome to The <b className="miniLogoEasy">Easy</b><b className="miniLogoScore">Score</b>
          </h2>
          <p>
            {" "}
            We are The EasyScore -using our scoring system based on grade 
            distribution data, we do the work of grade 
            hunting for you and find an easy A for your courses! {" "}
          </p>
          <h3>Choose the <b id="miniemphasiseasy">easy</b> option!</h3>
          <div className="homeGraphicContainer">
            <div className="homeGraphicEasyScore"></div>
            <div className="homeGraphicArrow"></div>
          </div>
          <p>An <b className="miniLogoEasy">Easy</b><b className="miniLogoScore">Score</b>! <br></br>And your future grade!</p>
        </div>

        <div className="homePageRightMain">
          <div className="homePageRightBckGrd">
            <div className="homePageImage"><img src="../home/components/computerscreen.jpg"></img></div>
          </div>
          <div className="homePageSlideShow"></div>
        </div>
        {/* <SearchForm push={props.history.push} /> */}
      </main>
    </div>
  );
};

export default Home;
