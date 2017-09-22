import React from "react";

import "./Footer.scss";

const Footer = () => (
  <footer className="">
    <div className="container-fluid">
      <div className="row footer">
        <div className="col-12 text-center">
          <h3>Come say hi!</h3>
          <div className="email">
            <a href="mailto:xinran.wang.92@gmail.com">
              <i className="fa fa-envelope fa-fw" />xinran.wang.92@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/xw92"
              className="btn btn-outline-dark btn-md social-media-button"
            >
              <i className="fa fa-twitter fa-fw fa-2x" />
            </a>
            <a
              href="https://github.com/xinranw"
              className="btn btn-outline-dark btn-md social-media-button"
            >
              <i className="fa fa-github fa-fw fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/xinranw/"
              className="btn btn-outline-dark btn-md social-media-button"
            >
              <i className="fa fa-linkedin fa-fw fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
