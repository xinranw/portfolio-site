import React, { Component } from "react";
import "./App.scss";
import { Navbar, Jumbotron, Button } from "react-bootstrap";
import Header from "./Header/Header";
import Header2 from "./Header/Header2";
import Main from "./Main";
import Footer from "./Footer/Footer";

const App = () => (
  <div id="app" style={{ paddingTop: "56px" }}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
