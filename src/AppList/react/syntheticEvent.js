import React from "react";
import MD from "react-markdown";
import { WingBlank } from "antd-mobile";
import CodeBlock from "../../utils/code-block";

const code1 = `
\`\`\`js
class EvnetTest extends React.Component {
    constructor(props) {
      super(props);
      this.timer = null;
      this.state = { name: "" };
    }
  
    // 我们想在此做函数防抖
    // 但是会失败，为什么？
    handleNameChange = e => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.setState({ name: e.target.value });
      }, 300);
    };
  
    //
    render() {
      return (
        <div>
          <input
            name="name"
            onChange={this.handleNameChange}
            placeholder="测试合成事件"
          />
          <p>state中name属性：{this.state.name}</p>
        </div>
      );
    }
  }

\`\`\`
`;
class EvnetTest extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = { name: "" };
  }

  // 我们想在此做函数防抖
  // 但是会失败，为什么？
  handleNameChange = e => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.setState({ name: e.target.value });
    }, 300);
  };

  //
  render() {
    return (
      <div>
        <input
          name="name"
          onChange={this.handleNameChange}
          placeholder="测试合成事件"
        />
        <p>state中name属性：{this.state.name}</p>
      </div>
    );
  }
}

export default () => {
  return (
    <WingBlank>
      <h3>React 合成事件:</h3>

      <MD source={code1} />

      <EvnetTest />

      <h3>问题：</h3>
      <h3>输入上方输入框内容，代码会报错，如何修正，并达到函数防抖的效果？</h3>
    </WingBlank>
  );
};
