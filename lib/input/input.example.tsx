import React from "react";
import Input from "./Input";
import Code from "../Code"

const InputExample: React.FunctionComponent = () => {
  return (
    <div className={"example"}>
      <p className={"example-title"}>组件展示</p>
      <div className={"example-row"}>
        <Input/>
      </div>
      <div className={"example-row"}>
        <Input style={{width:200}} placeholder={"密码"}/>
      </div>
      <div className={"example-row"}>
        <Input icon={"email"} style={{width:"20em"}}/>
      </div>
      <p className={"example-title"}>示例代码</p>
      <Code code={require('!!raw-loader!./input.example.tsx').default}/>
    </div>
  );
};

export default InputExample;
