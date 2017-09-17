import React, { Component } from "react";
import "./App.scss";
import { Navbar, Jumbotron, Button } from "react-bootstrap";
import Header from "./Header/Header";
import Header2 from "./Header/Header2";
import Main from "./Main";

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;
