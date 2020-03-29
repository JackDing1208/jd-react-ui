import React from "react";
import Button from "./Button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button onClick={(e)=>{console.log(e)}}>{"点我"}</Button>
      </div>
  );
};

export default ButtonExample;
