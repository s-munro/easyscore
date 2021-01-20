import React from "react";
import "../course.css";

const Header = ({ course }) => {
  return (
    <div className="container">
      <header className="row mt-5 testT">

        <div className="jumbo-score ">95</div>

        <div className="col-lg">

         <div className="courseName">
            {course.full_code}: {course.name}
         </div>

         <div className="course-page-credits-container"> 
          <div className="course-page-credits-title">Credits: </div>
          <div className="course-page-credits"> {course.credits}</div>
         </div> 
         
        </div>   

        <hr />
      </header>
    </div>
  );
};

export default Header;
