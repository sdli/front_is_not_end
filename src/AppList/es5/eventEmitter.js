import React from "react"
import MD from "react-markdown";
import {WingBlank } from "antd-mobile";
import CodeBlock from "../../utils/code-block"

const code1 = `
\`\`\`js
function eventsEmitter(){
    
    code here
    ...
}

var events = new eventsEmitter();
events.on("Ready",()=>{console.log("Ready！")});
events.on("Finished",()=>{console.log("Finished！")});

events.emit("ready"); // 打印Ready！
events.emit("Finished"); // 打印Finished!
\`\`\`
`;

export default ()=>{
    return (
        <WingBlank>
            <h3>Event Emitter:</h3>
            <h5>我们会经常遇到一个关键词“on”，无论在Jquery还是Echarts，还有各类第三库中，都会出现此类的绑定和触发，比如on("ready"),on("start")等等。</h5>
            <h5>包括我们用到的Nodejs第三方库Express，实际上是由Utils/events继承来。那么如何实现一个此类方法呢？</h5>
            
            <MD 
                source={code1}
                renderers={{code: CodeBlock}}
            />
            <h5>填写上方空白位置，实现最终效果打印出ready和finished</h5>
        </WingBlank>
    );
}

