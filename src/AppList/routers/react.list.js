import React from "react";
import { List } from "antd-mobile";
import configs from "../../configs/esList";

import { withRouter } from "react-router-dom";

const Item = List.Item;

const ReactList = withRouter(({ history }) => (
  <React.Fragment>
    <div style={{ paddingTop: 50 }}>
      <List renderHeader={() => "REACT Best Practice"}>
        {configs.react.map(val => (
          <Item
            extra={val[1]}
            key={"react" + val[1]}
            arrow="horizontal"
            onClick={() => history.push(val[2])}
          >
            {val[0]}
          </Item>
        ))}
      </List>
      <List renderHeader={() => "Redux"}>
        {configs.redux.map(val => (
          <Item
            extra={val[1]}
            key={"redux" + val[1]}
            arrow="horizontal"
            onClick={() => history.push(val[2])}
          >
            {val[0]}
          </Item>
        ))}
      </List>
      <List renderHeader={() => "React Test Tools"}>
        {configs.reactTest.map(val => (
          <Item
            extra={val[1]}
            key={"jest" + val[1]}
            arrow="horizontal"
            onClick={() => history.push(val[2])}
          >
            {val[0]}
          </Item>
        ))}
      </List>
      <List renderHeader={() => "REACT Best Practice"}>
        {configs.immutable.map(val => (
          <Item
            extra={val[1]}
            key={"immutable" + val[1]}
            arrow="horizontal"
            onClick={() => history.push(val[2])}
          >
            {val[0]}
          </Item>
        ))}
      </List>
    </div>
  </React.Fragment>
));

export default ReactList;
