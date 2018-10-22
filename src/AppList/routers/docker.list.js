import React from "react"
import { List } from "antd-mobile"
import configs from "../../configs/esList"
import {
    withRouter
  } from "react-router-dom";
  
const Item = List.Item;

const ESList = withRouter(({ history })=>(
    <React.Fragment>
        <div style={{paddingTop: 50}}>
            <List renderHeader={() => 'ES5'}>
                {
                    configs.docker.map(val=>(
                        <Item key={"es5" + val[1]} extra={val[1]} arrow="horizontal" onClick={()=>history.push(val[2])}>{val[0]}</Item>
                    ))
                }
            </List>
            <List renderHeader={() => 'ES5'}>
                {
                    configs.k8s.map(val=>(
                        <Item key={"es6" + val[1]} extra={val[1]} arrow="horizontal" onClick={()=>history.push(val[2])}>{val[0]}</Item>
                    ))
                }
            </List>                                
        </div>
    </React.Fragment>)
)

export default ESList;