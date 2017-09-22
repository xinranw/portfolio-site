import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Home2 from "./Home/Home2";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home2} />
      <Route exact path="/home1" component={Home} />
      <Route path="/projects" component={Portfolio} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </main>
);

export default Main;
