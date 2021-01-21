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

          
         <div className="reqsTags">
           <p className="reqsMetText">Requirements met:</p>
           <div className="reqsContainer">
            <p className="requirement">Humanties</p>
            <p className="requirement">Arts</p>
           </div>
         </div>

         <div className="course-page-credits-container"> 
          <div className="course-page-credits-title">Credits: </div>
          <div className="course-page-credits"><b> {course.credits}</b></div>
         </div> 
         
        </div>   

        <hr />
      </header>
    </div>
  );
};

export default Header;
