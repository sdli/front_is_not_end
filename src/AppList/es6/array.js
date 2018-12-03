import React from "react"
import MD from "react-markdown";
import {WingBlank } from "antd-mobile";
import CodeBlock from "../../utils/code-block"

const code1 = `
\`\`\`js
var array = [1,[2,3,[4,5]]]
\`\`\`
`;

export default ()=>{
    return (
        <WingBlank>
            <h3>1. 数组扁平化:</h3>
            <h5>如果我们遇到一个反复嵌套的数组，如何从中快速提取数据呢？</h5>
            <h5>例如：</h5>
            
            <MD 
                source={code1}
                renderers={{code: CodeBlock}}
            />
            <h5>想出多个办法进行数组扁平化。</h5>
        </WingBlank>
    );
}

