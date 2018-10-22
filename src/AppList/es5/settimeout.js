import React from "react"
import MD from "react-markdown";
import {WingBlank } from "antd-mobile";
import CodeBlock from "../../utils/code-block"

const code1 = `
\`\`\`js
let initState = 1;
let text = "";
const potAsyncLoop = (initState,cb)=>{
    if(initState < 1000000){
        potAsyncLoop(initState++,cb)
    }else{
        cb();
    }
}

try{
    potAsyncLoop(1,()=>{console.log("finished:",initState)})
}catch(e){
    text = e.message;
}
\`\`\`
`;

let initState = 1;
let text = "";
const potAsyncLoop = (initState,cb)=>{
    if(initState < 1000000){
        potAsyncLoop(initState++,cb)
    }else{
        cb();
    }
}

try{
    potAsyncLoop(1,()=>{console.log("finished:",initState)})
}catch(e){
    text = e.message;
}


export default ()=>{
    return (
        <WingBlank>
            <h3>setTimeout：</h3>
            <h5>以下代码会导致出现 Maximum call stack size exceeded：</h5>
            <MD 
                source={code1}
                renderers={{code: CodeBlock}}
            />
            <p>比如上面代码，会出现下面的提示。</p>
            <p>{
                text
            }</p>
            <p className="red">如何避免?</p>
        </WingBlank>
    );
}