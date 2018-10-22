import React from "react"
import { List } from "antd-mobile"
import configs from "../../configs/esList"

import {
    withRouter
  } from "react-router-dom";
  
const Item = List.Item;

const ReactList = withRouter(({ history })=>(
    <React.Fragment>
        <div style={{paddingTop: 50}}>
            <List renderHeader={() => 'Nodejs Best Practice'}>
                {
                    configs.nodejs.map(val=>(
                        <Item extra={val[1]} key={"nodejs" + val[1]} arrow="horizontal" onClick={()=>history.push(val[2])}>{val[0]}</Item>
                    ))
                }
            </List>                
                   
        </div>
    </React.Fragment>)
)

export default ReactList;