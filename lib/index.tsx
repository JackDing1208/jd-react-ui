import React from "react";
import ReactDOM from "react-dom";
// import Button from "./Button";
import Icon from "./icon/Icon";
import FloatButton from "./floatButton/FloatButton"

const root = document.getElementById("root");

function Board () {
  return (
    <div style={{width:"100%",minHeight:"100vh",background:"#ddd"}}>
      <Icon name={"react"}/>
      <FloatButton onClick={()=>{
        console.log(111);}}/>
    </div>

  )
}


ReactDOM.render(<Board />, root);
