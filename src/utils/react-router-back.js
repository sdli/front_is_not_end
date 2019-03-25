/**
 * created by steven leo
 * 防止App的主页每次返回都要重新刷新
 */

import React from "react";

// 如果为app主页，则将主页设置为fixed属性
const Page_Settings_ForFixed_App_Router = {
  position: "fixed",
  height: "100%",
  width: "100%",
  top: 0,
  zIndex: 1
};

export default (WrappedComponent, ifSPAMainPage) => {
  return props => {
    const { isExact } = props.match;
    return (
      <div
        style={
          ifSPAMainPage
            ? {
                ...Page_Settings_ForFixed_App_Router,
                display: isExact ? "block" : "none"
              }
            : { opacity: isExact ? 1 : 0 }
        }
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};
