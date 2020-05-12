import React, {useState} from "react";
import {Button, Modal} from "../index";
import Code from "../Code"


const ModalExample: React.FunctionComponent = () => {
	const [visible1, setVisible1] = useState(false);
	const [visible2, setVisible2] = useState(false);
	const [visible3, setVisible3] = useState(false);
	return (
		<div className={"example"}>
			<div>
				<Button onClick={() => {setVisible1(true)}}>{"默认弹窗"}</Button>
				<Button onClick={() => {setVisible2(true)}}>{"警告弹窗"}</Button>
				<Button onClick={() => {setVisible3(true)}}>{"输入弹窗"}</Button>
			</div>
			<div>
				<Button onClick={() => {Modal.Alert("快速警告")}}>{"快捷警告"}</Button>
				<Button onClick={() => {Modal.Confirm("是不是很方便", "加个标题")}}>{"快捷确认"}</Button>
				<Button onClick={() => {Modal.Input("哈哈", "输入框", (e, text) => {console.log(text)})}}>{"快捷输入"}</Button>
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
				       console.log("输入的内容")
				       console.log(text)
			       }}
			       onClose={() => {setVisible3(false)}}
			/>
			<div>示例代码</div>
			<Code code={require('!!raw-loader!./modal.example.tsx').default}/>
		</div>
	);
};

export default ModalExample;
