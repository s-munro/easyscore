import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../App.css";

const Footer = (props) => {
  //
  if (props.footerStyle === 1) {
    return (
      <footer>
        <div className="footer-container"><p>
    <small>© Copyright 2021 The EasyScore. All rights reserved.</small>
</p></div>
      </footer>
    );
  } else if (props.footerStyle === 2) {
    return (
      <footer>
        <Link className="" to="/about">
          <div>About</div>
        </Link>
        <Link className="" to="/contact">
          <div>Contact</div>
        </Link>
        {/* <div></div> */}
      </footer>
    );
  } else return null;
};

const mapStateToProps = (state) => {
  return {
    footerStyle: state.footerStyle,
  };
};
export default connect(mapStateToProps)(Footer);
