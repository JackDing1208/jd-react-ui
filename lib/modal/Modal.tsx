import React, {Fragment, useState} from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import {Button} from "../index"
import Input from "../input/Input"
import Icon from "../icon/Icon"

type ModalType = "Alert" | "Confirm" | "Input" | "Customize"
type onConfirm = (e: React.MouseEvent, text?: string) => void
type ModalMethod = (content: string, title?: string,onConfirm?: onConfirm, ) => void

interface Props {
	visible: boolean,
	type?: ModalType,
	content: string,
	title?: string,
	onClose: React.MouseEventHandler,
	onConfirm?: onConfirm
	canModalClose?: boolean
}


interface ComponentWithFunction extends React.FunctionComponent<Props> {
	Alert: ModalMethod,
	Confirm: ModalMethod,
	Input: ModalMethod,
	Customize: ModalMethod,
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
	const [text, setText] = useState("")
	
	
	const component = props.visible ?
		(
			<Fragment>
				<div className={"jd-modal"} onClick={onClickModal}/>
				<div className={"jd-modal-dialog"}>
					<header className={"jd-modal-title"}>
						{props.title}
						<div/>
						<Icon name={"cross"} size={"1.5em"} onClick={props.onClose}/>
					</header>
					<main className={"jd-modal-content"}>
						<div className={"jd-modal-content-text"}>{props.content}</div>
						<div className={"jd-modal-content-input"}>
							{props.type === "Input" ?
								<Input style={{width: "100%"}}
											 value={text}
											 onChange={(e) => {setText(e.target.value)}}/>
								: null}
						</div>
					</main>
					
					<footer className={"jd-modal-buttons"}>
						{props.type !== "Alert" ?
							<Button onClick={onClickNo} style={{marginRight: "50px"}}>取消</Button>
							: null
						}
						<Button type={"dark"}
										onClick={(e) => {
											props.onClose(e)
											props.onConfirm && props.onConfirm(e, text)
										}}>确定</Button>
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
	return (content: string, title?: string, onConfirm?: onConfirm) => {
		const div = document.createElement("div");
		document.body.append(div);
		const component = (
			<Modal
				type={type}
				visible={true}
				onClose={() => {closeModal()}}
				onConfirm={(e, text) => {
					onConfirm && onConfirm(e, text)
					closeModal()
				}}
				title={title}
				content={content}
			/>
		);
		//直接渲染到body下会把其他DOM覆盖
		ReactDOM.render(component, div);
		
		const closeModal = () => {
			// 复制一个组件，改变属性再重新渲染
			ReactDOM.render(React.cloneElement(component, {visible: false}), div);
			//官方推荐删除节点方法
			ReactDOM.unmountComponentAtNode(div);
			div.remove();
		};
	}
}


Modal.Alert = createModal("Alert")
Modal.Confirm = createModal("Confirm")
Modal.Input = createModal("Input")
Modal.Customize = createModal("Customize")


Modal.defaultProps = {
	type: "Confirm",
	canModalClose: false,
	onConfirm: () => {}
};


export default Modal;
