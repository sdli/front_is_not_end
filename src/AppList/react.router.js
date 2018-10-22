import React from "react";

// react
import setState from "./react/setState";

// react test
import jest from "./react/jest";

// react immutable
import immutable from "./react/immutable"

import { HashRouter, Route } from "react-router-dom";

const ES_router = ({match}) => (
    <HashRouter>
      <div>
        <Route path={`${match.path}/setState`} component={setState} />
        <Route path={`${match.path}/jest`} component={jest} />
        <Route path={`${match.path}/immutable`} component={immutable} />
      </div>
    </HashRouter>
  );

export default ES_router;