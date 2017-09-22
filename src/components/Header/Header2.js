import React from "react";
import { Link } from "react-router-dom";
import "./Header2.scss";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => {
  return (
    <header>
      {/* <nav className=""> */}
      <div className="container-fluid">
        <ul className="nav row">
          <li className="col align-self-start">
            <Link to="/">Xinran Wang</Link>
          </li>
          <li className="col align-self-end">
            <Link to="/">Projects</Link>
          </li>
        </ul>
      </div>
      {/* </nav> */}
    </header>
  );
};

export default Header;
