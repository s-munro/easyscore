import React from "react";
import "./home.css";

import SearchForm from "./components/SearchForm";

const Home = (props) => {
  return (
    <main className="home-main">
      <div>
        <h2>Choose the <b id='home-emphasis'>easy</b> option</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
      </div>
      <SearchForm push={props.history.push} />
      {/* <div className="tidbitContainer">
        <div className="bitContainer">
         <div className="tidbitTitleContainer"> 
          <div className="tidbitIcon"></div>
          <p>Some Text</p> 
         </div>
         <p> Brief description of why use the easy score site</p>
        </div>
        <div className="bitContainer">
         <div className="tidbitTitleContainer"> 
          <div className="tidbitIcon"></div>
          <p>Some Text</p> 
         </div>
         <p> Brief description of why use the easy score site</p>
        </div>
        <div className="bitContainer">
         <div className="tidbitTitleContainer"> 
          <div className="tidbitIcon"></div>
          <p>Some Text</p> 
         </div>
         <p> Brief description of why use the easy score site</p>
        </div>
       </div>  */}
    </main>
  );
};

export default Home;
