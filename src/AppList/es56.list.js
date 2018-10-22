import React from "react"
import { List, SearchBar } from "antd-mobile"
import style from "./style.less"
import configs from "../configs/esList"
import {
    withRouter
  } from "react-router-dom";
  
const Item = List.Item;

const ESList = withRouter(({ history })=>(
    <React.Fragment>
        <SearchBar className={style.fix_search} placeholder="输入关键词搜索"  />
        <div style={{paddingTop: 50}}>
            <List renderHeader={() => 'ES5'}>
                {
                    configs.es5.map(val=>(
                        <Item key={"es5" + val[1]} extra={val[1]} arrow="horizontal" onClick={()=>history.push(val[2])}>{val[0]}</Item>
                    ))
                }
            </List>
            <List renderHeader={() => 'ES5'}>
                {
                    configs.es6.map(val=>(
                        <Item key={"es6" + val[1]} extra={val[1]} arrow="horizontal" onClick={()=>history.push(val[2])}>{val[0]}</Item>
                    ))
                }
            </List>                
        </div>
    </React.Fragment>)
)

export default ESList;