import React from "react"
import MD from "react-markdown";
import {WingBlank } from "antd-mobile";
import CodeBlock from "../../utils/code-block"

const code0 = `
\`\`\`js
var a = 2  
function fn() {  
    console.log(a)  
    var a = 3  
}  
fn()
\`\`\`
`
const code1 = `
\`\`\`js
var c = 1;
function c(c) {
    console.log(c);
    var c = 3;
}
c(2);
\`\`\`
`;

const answer = `
\`\`\`js

\`\`\`
`
let err = "";
try{
    var c = 1;
    function c(c) {
        console.log(c);
        var c = 3;
    }
    c(2);
}catch(e){
    err = e.message
}

export default ()=>{
    return (
        <WingBlank>
            <h3>变量提升：</h3>
            <MD 
                source={code1}
                renderers={{code: CodeBlock}}
            />
            <h5>以上代码会出现以下报错，为什么呢？</h5>
            <p>{err}</p>
            <p>以下代码呢？</p>
            <MD 
                source={code0}
                renderers={{code: CodeBlock}}
            />
            <p className="red">解释其中原因?</p>
        </WingBlank>
    );
}

