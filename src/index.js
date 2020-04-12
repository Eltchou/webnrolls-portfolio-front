import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
