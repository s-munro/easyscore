import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../App.css";

const Footer = (props) => {
  //
  if (props.footerStyle === 1) {
    return (
      <footer className="row w-100 d-flex flex-column justify-content-end align-items-center">
        <div className="col-12 d-flex justify-content-center align-items-center footer-container">
          <p>
            <small>© Copyright 2021 The EasyScore. All rights reserved.</small>
          </p>
        </div>
      </footer>
    );
  } else if (props.footerStyle === 2) {
    return (
      <footer className="row w-100 secondaryFooter d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <p>
            <small>© Copyright 2021 The EasyScore. All rights reserved.</small>
          </p>
          {/* </div> */}
          <Link className="aboutFooterLink" to="/about">
            <div>
              <small>About</small>
            </div>
          </Link>
          <Link className="" to="/contact">
            <div>
              <small>Contact</small>
            </div>
          </Link>
        </div>
      </footer>
    );
  } else if (props.footerStyle === 3) {
    return (
      <footer className="container">
        <div className="row w-100">
          <div className="footer-3-container">
            <p>
              <small>
                © Copyright 2021 The EasyScore. All rights reserved.
              </small>
            </p>
          </div>
        </div>
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
