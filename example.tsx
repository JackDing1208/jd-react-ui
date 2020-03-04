import React from "react";
import ReactDOM from "react-dom";
// import Button from "./Button";
import Icon from "./lib/icon/Icon";

const root = document.getElementById("root");

function Board() {
  return (
    <div style={{width: "100%", minHeight: "100vh", background: "pink"}}>
      <Icon name={"react"}/>
    </div>

  );
}


ReactDOM.render(<Board/>, root);
