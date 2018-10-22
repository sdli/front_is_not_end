import React from "react";
import App from "./App";
import ESList from "./AppList/es56.router"
import ReactList from "./AppList/react.router"

import { HashRouter, Route } from "react-router-dom";

const BasicRouter = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/es" component={ESList} />
      <Route path="/react" component={ReactList} />
    </div>
  </HashRouter>
);

export default BasicRouter;