import React from "react";
import Button from "./Button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div style={{border:"1px solid red",height:"100px"}}>
      <Button onClick={(e) => {console.log(e);}}>{"点我"}</Button>
      <Button style={{marginLeft:"10px"}} icon={"wechat"} shape={"round"}>{"点我"}</Button>
      <Button icon={"react"} shape={"circle"}/>

      <Button type={"dark"}>{"点我"}</Button>
      <Button type={"dark"} icon={"qq"} shape={"round"}>{"点我"}</Button>
      <Button type={"dark"} icon={"user"} shape={"circle"}/>
    </div>
  );
};

export default ButtonExample;
