import React from "react";
import MD from "react-markdown";
import { WingBlank } from "antd-mobile";
import CodeBlock from "../../utils/code-block";

const code1 = `
\`\`\`js
var array = Array.from(new Set(arr1.concat(arr2)));
\`\`\`
`;

export default () => {
  return (
    <WingBlank>
      <h3>1. 两个数组寻找并集:</h3>
      <h5>例如：</h5>
      <MD source={code1} renderers={{ code: CodeBlock }} />
      <h3>2. 两个数组如何寻找交集呢？:</h3>
    </WingBlank>
  );
};
