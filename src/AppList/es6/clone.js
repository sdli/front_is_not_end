import React from "react";
import MD from "react-markdown";
import { WingBlank } from "antd-mobile";
import CodeBlock from "../../utils/code-block";

const code1 = `
\`\`\`js
function deepClone(obj){
    var newObj= obj instanceof Array?[]:{};
    for(var i in obj){
       newObj[i]=typeof obj[i]=='object'?  
       deepClone(obj[i]):obj[i];    
    }
    return newObj;
}
\`\`\`
`;

export default () => {
  return (
    <WingBlank>
      <h3>ES5中我们有以下克隆方案</h3>
      <MD source={code1} renderers={{ code: CodeBlock }} />
      <h3>如果为ES6呢？如何实现ES6中的克隆？</h3>
    </WingBlank>
  );
};
