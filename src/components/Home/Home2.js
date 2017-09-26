import React from "react";
import { Link } from "react-router-dom";

import "./Home2.scss";

const Home2 = () => (
  <div className="pentagon">
    <div className="container">
      <div className="row">
        <div className="col col-lg-3 col-lg-offset-2" id="title">
          <h1>Developer</h1>
          <h1>Designer</h1>
          <h1>Creator</h1>
        </div>
        <div className="col align-self-end" id="description">
          <p>Hi! I'm Xinran!</p>
          <p>
            I am passionate about building beautiful, intuitive, and performant
            products for people. From ideation to design to development, I want
            to be involved in every single step of the way.
          </p>
          <Link
            to="/projects"
            type="button"
            className="btn btn-lg btn-light project-link"
          >
            Check out my work!
            <i className="fa fa-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home2;
