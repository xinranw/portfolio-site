import React from "react";

import "./Home.scss";
import faceIcon from "./face-icon.svg";

const Home = () => (
  <div className="center" id="home">
    <div className="text-center">
      <img src={faceIcon} className="face-icon" alt="logo" />
      <h1 className="home-title">Hi, I'm Xinran!</h1>
      <h2 className="home-subtitle">Welcome to my site!</h2>
    </div>
  </div>
);

export default Home;
