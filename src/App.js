import React from 'react';
import './App.css';
import { TabBar , Icon}  from "antd-mobile"
import EsList from "./AppList/es56.list";
import ReactList from "./AppList/react.list"

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'ES56',
      hidden: false,
      fullScreen: true,
    };
  }

  componentDidMount(){
    console.log("生成1次")
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: "100%" }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="ES5/ES6"
            key="ES56"
            icon={<Icon type="check" />}
            selectedIcon={<Icon type="check" color="blue" />}
            selected={this.state.selectedTab === 'ES56'}
            onPress={() => {
              this.setState({
                selectedTab: 'ES56',
              });
            }}
            data-seed="logId"
          >
            <EsList />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="React"
            key="React"
            selected={this.state.selectedTab === 'React'}
            onPress={() => {
              this.setState({
                selectedTab: 'React',
              });
            }}
            data-seed="logId1"
          >
            <ReactList />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MainApp;
