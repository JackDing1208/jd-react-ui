import React from "react";
import Button from "./Button";
import Code from "../Code"

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div className={"example"}>
      <p className={"example-title"}>组件展示</p>
      <div className={"example-row"}>
        <Button className={"example-button"}>{"按钮"}</Button>
        <Button className={"example-button"} icon={"qq"}>{"QQ登录"}</Button>
        <Button className={"example-button"}  icon={"wechat"}>{"微信登录"}</Button>
      </div>
      <div className={"example-row"}>
        <Button className={"example-button"}  type={"dark"}>{"点我"}</Button>
        <Button className={"example-button"}  shape={"round"}>{"点我"}</Button>
        <Button className={"example-button"}  shape={"round"} type={"dark"} icon={"github"}>{"登录"} </Button>
        <Button className={"example-button"}  icon={"user"} shape={"circle"}/>
        <Button className={"example-button"} type={"dark"} icon={"user"} shape={"circle"}/>
      </div>
      <p className={"example-title"}>示例代码</p>
      <Code code={require('!!raw-loader!./button.example.tsx').default}/>
    </div>
  );
};

export default ButtonExample;
