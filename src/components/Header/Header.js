import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="container-fluid">
          <ul className="nav text-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
