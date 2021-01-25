import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setNavStyle, setFooterStyle } from "../../actions/index";
// import Sidebar from "../../components/Sidebar.js";

const About = (props) => {
  useEffect(() => {
    props.setNavStyle(3);
    props.setFooterStyle(1);
  }, []);

  return (
    <div className="container">
      <div>About</div>
      {/* <Sidebar /> */}
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
