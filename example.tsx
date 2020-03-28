import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Icon, Modal,Button} from "./lib";


const root = document.getElementById("root");

function Board() {

  const [visible, setVisible] = useState(false);

  return (
    <div style={{width: "100%", minHeight: "100vh", background: "pink"}}>
      <Icon name={"quit"} color={"#fff"}/>

      <Button onClick={()=>{
        console.log(22222222222222)
      }}>哈哈</Button>

      <button onClick={() => {setVisible(true);}}>click</button>
      <Modal
        type={"Alert"}
        visible={visible}
        onClose={() => {setVisible(false);}}
        content={"你是煞笔么？？？"}
        canModalClose={true}
      />

      <button onClick={()=>{Modal.Alert("haha")}}>点我</button>
    </div>
  );
}


ReactDOM.render(<Board/>, root);
