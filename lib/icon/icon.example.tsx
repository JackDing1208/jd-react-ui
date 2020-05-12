import React from "react";
import Icon from "./Icon";
import Code from "../Code"

const IconExample: React.FunctionComponent = () => {
  return (
    <div className={"example"}>
      <p className={"example-title"}>组件展示</p>
      <div className={"example-row"}>
        <Icon className={"example-icon"} name="github"/>
        <Icon className={"example-icon"} name="javascript"/>
        <Icon className={"example-icon"} name="qq"/>
        <Icon className={"example-icon"} name="wechat"/>
        <Icon className={"example-icon"} name="react"/>
        <Icon className={"example-icon"} name="vue"/>
      </div>
      <div className={"example-row"}>
        <Icon className={"example-icon"} size={"50px"} name="cross"/>
        <Icon className={"example-icon"} size={"20px"} name="quit"/>
        <Icon className={"example-icon"} name="user" onClick={()=>{console.log("xxx")}}/>
      </div>
      <p className={"example-title"}>示例代码</p>
      <Code code={require('!!raw-loader!./icon.example.tsx').default}/>
    </div>
  );
};

export default IconExample;
