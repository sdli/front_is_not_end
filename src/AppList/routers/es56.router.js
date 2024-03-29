import React from "react";

// import es5 group
import ES5_setTimeout from "../es5/settimeout";
import ES5_eventEmitter from "../es5/eventEmitter";
import ES5_variable from "../es5/var";

// import css3 group
import CSS3Checkbox from "../css3/checkbox";

// import es6 group
import ES6_array from "../es6/array";
import ES6_set from "../es6/set";
import ES6_clone from "../es6/clone";

import { HashRouter, Route } from "react-router-dom";

const ES_router = ({ match }) => (
  <HashRouter>
    <div>
      {/* es5 */}
      <Route path={`${match.path}/es5/variable`} component={ES5_variable} />
      <Route path={`${match.path}/es5/event`} component={ES5_setTimeout} />
      <Route
        path={`${match.path}/es5/eventEmitter`}
        component={ES5_eventEmitter}
      />

      {/* es6 */}
      <Route path={`${match.path}/es6/array`} component={ES6_array} />
      <Route path={`${match.path}/es6/set`} component={ES6_set} />
      <Route path={`${match.path}/es6/clone`} component={ES6_clone} />

      {/* css3 */}
      <Route path={`${match.path}/css3/checkbox`} component={CSS3Checkbox} />
    </div>
  </HashRouter>
);

export default ES_router;
