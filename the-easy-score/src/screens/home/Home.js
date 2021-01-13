import React from "react";
import Nav from "../../navbar/Nav";
import Frame from "../home/components/computerscreen.jpg"
import "./home.css";
import SecondaryNav from "../../navbar/SecondaryNav";
import SearchForm from "./components/SearchForm";
import SlideShow from "./components/SlideShow";

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
            We are The <b className="miniLogoEasy">Easy</b><b className="miniLogoScore">Score</b> -using our scoring system based on grade 
            distribution data, we do the work of grade 
            hunting for you and find an easy A for your courses! {" "}
          </p>
          <h3>Choose the <b class="miniLogoScore">easy</b> option!</h3>
          <div className="homeGraphicContainer">
            <div className="homeGraphicEasyScore"></div>
            <div className="homeGraphicArrow"></div>
          </div>
          <p>An <b className="miniLogoEasy">Easy</b><b className="miniLogoScore">Score</b>! <br></br>And your future grade!</p>
        </div>

        <div className="homePageRightMain">
          <div className="homePageRightBckGrd"></div>
          <div className="iframeContainer">
            <div className="homePageImage">
              <SlideShow />
            </div>
          </div>
        </div>
        {/* <SearchForm push={props.history.push} /> */}
      </main>
    </div>
  );
};

export default Home;
