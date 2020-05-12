import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import {Button} from "../index"
import Input from "../input/Input"

type ModalType = "Alert" | "Confirm" | "Input" | "Customize"

interface Props {
	visible: boolean,
	type: ModalType,
	content: string,
	title?: string,
	onClose: React.MouseEventHandler
	canModalClose?: boolean
}

interface ComponentWithFunction extends React.FunctionComponent<Props> {
	Alert(content: string): void,
	
	Confirm(content: string): void,
	
	Input(content: string): void,
	
	Customize(content: any): void,
}


const Modal: ComponentWithFunction = (props) => {
	const onClickNo: React.MouseEventHandler = (e) => {
		props.onClose(e);
	};
	
	const onClickModal: React.MouseEventHandler = (e) => {
		if (props.canModalClose) {
			props.onClose(e);
		}
	};
	const component = props.visible ?
		(
			<Fragment>
				<div className={"jd-modal"} onClick={onClickModal}/>
				<div className={"jd-modal-dialog"}>
					<header className={"jd-modal-title"}>{props.title}</header>
					<main className={"jd-modal-content"}>
						{props.content}
						<Input/>
					</main>
					
					<footer className={"jd-modal-buttons"}>
						<Button onClick={onClickNo}>取消</Button>
						<Button type={"dark"} style={{marginLeft:"20px"}}>确定</Button>
					</footer>
				</div>
			</Fragment>
		) : null;
	
	return (
		ReactDOM.createPortal(component, document.body)
	);
};


Modal.defaultProps = {
	canModalClose: false
};


const createModal = (type: ModalType) => {
	return (content: string) => {
		const div = document.createElement("div");
		document.body.append(div);
		const closeModal = () => {
			// 复制一个组件，改变属性再重新渲染
			ReactDOM.render(React.cloneElement(component, {visible: false}), div);
			//官方推荐删除节点方法
			ReactDOM.unmountComponentAtNode(div);
			div.remove();
		};
		
		const component = (
			<Modal
				type={type}
				visible={true}
				onClose={() => {closeModal()}}
				content={content}/>
		);
		//直接渲染到body下会把root节点覆盖
		ReactDOM.render(component, div);
	}
}


Modal.Alert = createModal("Alert")
Modal.Confirm = createModal("Confirm")
Modal.Input = createModal("Input")
Modal.Customize = createModal("Customize")


export default Modal;
