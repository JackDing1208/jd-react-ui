import React from "react";
import ReactDOM from "react-dom";
// import Button from "./Button";
import Icon from "./icon/Icon";


const root = document.getElementById("root");

ReactDOM.render(<Icon className={"hehe"} size={"60px"} name={"react"} onClick={(e) => {
  console.log(e.currentTarget);
}}/>, root);
