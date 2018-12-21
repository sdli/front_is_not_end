import React from "react"
import MD from "react-markdown";
import {WingBlank } from "antd-mobile";
import CodeBlock from "../../utils/code-block"
import img from "./test.png"
import "./styles.css"

export default ()=>{
    return (
        <WingBlank>
            <h3>css3中的checkbox</h3>
            <input id="check" type="checkbox" className="imgWithClick" />
            <label for="check" className="label">
                <img src={img} />
            </label>

            <h3>以上效果中，点击红色区域，图片可以放大或缩小？实现原理为什么</h3>
            <h3>如何实现点击图片即可放大，而不通过红色区域呢？</h3>
        </WingBlank>
    );
}

