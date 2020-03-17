import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Modal} from "./lib";

const root = document.getElementById("root");

function Board() {

  const [visible, setVisible] = useState(false);

  return (
    <div style={{width: "100%", minHeight: "100vh", background: "pink"}}>
      <button onClick={() => {setVisible(true);}}>click</button>
      <Modal
        visible={visible}
        onClose={() => {setVisible(false);}}
        content={"你是煞笔么？？？"}
        canModalClose={true}
      />

      <button onClick={()=>{alert("haha")}}>点我</button>
    </div>
  );
}


ReactDOM.render(<Board/>, root);
