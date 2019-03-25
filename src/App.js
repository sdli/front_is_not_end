import React from "react";
import "./App.css";

// 图标
import Logo from "./assets/react_logo.svg";
import DockerLogo from "./assets/docker.svg";
import NodejsLogo from "./assets/nodejs.svg";
import JSLogo from "./assets/js.svg";

import { TabBar } from "antd-mobile";
import EsList from "./AppList/routers/es56.list";
import ReactList from "./AppList/routers/react.list";
import NodeJsList from "./AppList/routers/nodejs.list";
import DockerList from "./AppList/routers/docker.list";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "ES56",
      hidden: false,
      fullScreen: true
    };
  }

  render() {
    return (
      <React.Fragment>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="ES5/ES6"
            key="ES56"
            icon={
              <div className="svg_div">
                <JSLogo />
              </div>
            }
            selectedIcon={
              <div className="svg_div">
                <JSLogo />
              </div>
            }
            selected={this.state.selectedTab === "ES56"}
            onPress={() => {
              this.setState({
                selectedTab: "ES56"
              });
            }}
            data-seed="logId"
          >
            <EsList />
          </TabBar.Item>
          <TabBar.Item
            title="React"
            key="React"
            icon={
              <div className="svg_div">
                <Logo />
              </div>
            }
            selectedIcon={
              <div className="svg_div">
                <Logo />
              </div>
            }
            selected={this.state.selectedTab === "React"}
            onPress={() => {
              this.setState({
                selectedTab: "React"
              });
            }}
            data-seed="logId1"
          >
            <ReactList />
          </TabBar.Item>
          <TabBar.Item
            title="NodeJS"
            key="NodeJS"
            icon={
              <div className="svg_div">
                <NodejsLogo />
              </div>
            }
            selectedIcon={
              <div className="svg_div">
                <NodejsLogo />
              </div>
            }
            selected={this.state.selectedTab === "NodeJS"}
            onPress={() => {
              this.setState({
                selectedTab: "NodeJS"
              });
            }}
            data-seed="logId1"
          >
            <NodeJsList />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="svg_div">
                <DockerLogo />
              </div>
            }
            selectedIcon={
              <div className="svg_div">
                <DockerLogo />
              </div>
            }
            title="Docker/K8s"
            key="Docker"
            selected={this.state.selectedTab === "Docker"}
            onPress={() => {
              this.setState({
                selectedTab: "Docker"
              });
            }}
            data-seed="logId1"
          >
            <DockerList />
          </TabBar.Item>
        </TabBar>
      </React.Fragment>
    );
  }
}

export default MainApp;
