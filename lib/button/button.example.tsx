import React from "react";
import Button from "./Button";
import "./example.scss"

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <p>支持设置icon</p>
        <Button>{"点我"}</Button>
        <Button icon={"qq"}>{"QQ登录"}</Button>
        <Button icon={"wechat"}>{"微信登录"}</Button>
      </div>
      <div>
        <p>支持设置风格及形状</p>
        <Button type={"dark"}>{"点我"}</Button>
        <Button shape={"round"}>{"点我"}</Button>
        <Button icon={"user"} shape={"circle"}/>
      </div>
    </div>
  );
};

export default ButtonExample;
