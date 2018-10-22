import React from "react";
import App from "./App";
import ESList from "./AppList/routers/es56.router"
import ReactList from "./AppList/routers/react.router"
import reactBackHelper from "./utils/react-router-back";

import { HashRouter, Route } from "react-router-dom";

const BasicRouter = () => (
  <HashRouter>
    <div>
      <Route path="/" component={reactBackHelper(App,true)} />
      <Route path="/es" component={ESList} />
      <Route path="/react" component={ReactList} />
    </div>
  </HashRouter>
);

export default BasicRouter;