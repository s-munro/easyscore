import React from "react";
import CourseCard from "./CourseCard";

const Courses = (props) => {
  return (
    <div className="row">
      {props.currentCourses.map((course) => {
        return (
          <div
            key={course.url}
            className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 mb-5 d-flex justify-content-center"
          >
            <CourseCard course={course} key={course.url} />
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
