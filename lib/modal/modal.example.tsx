import React, {useState} from "react";
import {Button, Modal, Scroll} from "../index";
import Code from "../Code"


const ModalExample: React.FunctionComponent = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <Scroll style={{width: "100%", height: "100%"}} barVisible={false}>
      <div className={"example"}>
        <p className={"example-title"}>组件展示</p>
        <div className={"example-row"}>
          <Button className={"example-button"} onClick={() => {setVisible1(true)}}>{"显示默认弹窗"}</Button>
          <Button className={"example-button"} onClick={() => {setVisible2(true)}}>{"显示警告弹窗"}</Button>
          <Button className={"example-button"} onClick={() => {setVisible3(true)}}>{"显示输入弹窗"}</Button>
        </div>
        <div className={"example-row"}>
          <Button
            className={"example-button"}
            onClick={() => {
              Modal.Alert("快速警告", "警告标题")
            }}>{"调用函数警告"}</Button>
          <Button
            className={"example-button"}
            onClick={() => {
              Modal.Confirm("是不是很方便", "确认标题")
            }}>{"调用函数确认"}</Button>
          <Button
            className={"example-button"}
            onClick={() => {
              Modal.Input("哈哈", "输入框", (e, text) => {console.log(text)})
            }}>{"调用函数输入"}
          </Button>
        </div>
        <Modal visible={visible1}
               content={"弹窗的内容很多个字"}
               onClose={() => {setVisible1(false)}}
        />

        <Modal type={"Alert"}
               visible={visible2}
               title={"报警啦"}
               content={"不要乱点！！！"}
               onConfirm={() => {console.log("随便干点事")}}
               onClose={() => {setVisible2(false)}}
        />

        <Modal visible={visible3}
               type={"Input"}
               content={"弹窗的内容很多个字弹窗的内容很多个字弹窗的内容很多的内容很多个字"}
               title={"请输入用户名字"}
               canModalClose={true}
               onConfirm={(e, text) => {
                 console.log("输入的内容", text)
               }}
               onClose={() => {setVisible3(false)}}
        />
        <p className={"example-title"}>示例代码</p>
        <Code code={require('!!raw-loader!./modal.example.tsx').default}/>
      </div>
    </Scroll>
  );
};

export default ModalExample;
