import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setNavStyle, setFooterStyle } from "../../actions/index";
// import Sidebar from "../../components/Sidebar.js";
import "./About.css";

const About = (props) => {
  useEffect(() => {
    props.setNavStyle(3);
    props.setFooterStyle(3);
  }, []);

  return (
    <div className="container">
      <div className="row-100 mt-5">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h2 className="about-title">About</h2>
        </div>
        <hr />
        <div className="row w-100">
          <div className="col">
            <div className="about-text">
              <p>
                Here at EasyScore, we believe in working smarter, not harder. We
                accomplish this by using our intuitive and intelligent
                algorithm. We just happen to help you find the easiest teacher
                for each of your courses.
              </p>
              <p>Happy Course Hunting!</p>
              <p>
                Using previous grade distributions we accurately predict how
                easily a specific teacher grades for each taught course on a
                scale from 0 to 100. The number next to each instructor is the
                instructor's score for that course and the number next to each
                course is the average score of all the teachers who have taught
                that course.
              </p>
              <p>
                <span className="disclaimer">
                  Disclaimer: This site is not designed to be used solely for
                  selecting courses. View other resources for your courses
                  selection. This site is not officially affiliated with Indiana
                  University.
                </span>
              </p>
              <p className="small">
                **Results beyond 40 have been truncated **Teachers with fewer
                semesters taught and fewer students have been scored down
              </p>
              <p>
                <span className="source-text small">
                  Source: Official IU Grade Distribution website
                  <a
                    href="gradedistribution.registrar.indiana.edu/"
                    className="grade-dist-link"
                  >
                    gradedistribution.registrar.indiana.edu/
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    navStyle: state.navStyle,
    footerStyle: state.footerStyle,
  };
};
export default connect(mapStateToProps, { setNavStyle, setFooterStyle })(About);
