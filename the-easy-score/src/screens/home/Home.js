import React from "react";
import Nav from "../../navbar/Nav";
import Frame from "../home/components/computerscreen.jpg";
import "./home.css";
import SecondaryNav from "../../navbar/SecondaryNav";
import SearchForm from "./components/SearchForm";
import SlideShow from "./components/SlideShow";

// Sheena,
// React boostrap FormControl documentation below, covers styling I think:
// https://react-bootstrap.github.io/components/forms/
// the documentation is fucking massive

const Home = (props) => {
  const requirementsValues = [
    { value: "", title: "Any Requirement" },
    { value: 0, title: "A&H Credit" },
    { value: 1, title: "Diversity in U.S. Credit" },
    { value: 6, title: "English Composition" },
    { value: 11, title: "Intensive Writing" },
    { value: 7, title: "Mathematical Model" },
    { value: 3, title: "N&M Credit" },
    { value: 5, title: "Public Oral Communication" },
    { value: 2, title: "S&H Credit" },
    { value: 4, title: "World Culture Credit" },
    { value: "0GENEDMM", title: "World Landuage Class" },
  ];

  const courseLevelValues = [
    { value: "", title: "Any Course Level" },
    { value: 12, title: "100-299" },
    { value: 8, title: "300-399" },
    { value: 9, title: "400-499" },
    { value: 10, title: "Graduate Level Courses" },
    { value: 13, title: "Honors Level Courses" },
  ];

  const creditHoursValues = [
    { value: "", title: "Any Credit Hours" },
    { value: 1, title: "1" },
    { value: 2, title: "2" },
    { value: 3, title: "3" },
    { value: 4, title: "4" },
    { value: 5, title: "5" },
    { value: 6, title: "6" },
    { value: 7, title: "7+" },
  ];

  const timeofDayValues = [
    { value: "", title: "Any time of day" },
    { value: 1, title: "Morning (7:00 a.m.–10:59 a.m.)" },
    { value: 2, title: "Afternoon (11 a.m.–4:59 p.m.)" },
    { value: 3, title: "Evening (5 p.m.–11:59 p.m.)" },
  ];

  const handleSelectChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div>
      <Nav />
      <main>
        <h1>
          Easy<span>Score</span>
        </h1>
        <SearchForm />
      </main>
      {/* <main className="home-main">
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
      {/* </main> */}
    </div>
  );
};

export default Home;
