import "./assets/sass/bulma.scss";
import "material-design-icons/iconfont/material-icons.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Container from "./layout/Container";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Container} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
