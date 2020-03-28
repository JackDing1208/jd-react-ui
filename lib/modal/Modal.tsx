import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./style.scss";



interface Props {
  visible: Boolean,
  type: "Alert"|"Confirm"|"Customize"|"Input",
  content: String,
  title?: String,
  onClose: React.MouseEventHandler
  canModalClose?: Boolean
}

interface ComponentWithFunction extends React.FunctionComponent<Props> {
  Alert(content:String):void
  // Confirm:()=>void
}


const Modal: ComponentWithFunction = (props) => {
  const onClickNo: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  console.log("type", props.type);
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
          <main className={"jd-modal-content"}>{props.content}</main>
          <footer className={"jd-modal-button"}>
            <button>yes</button>
            <button onClick={onClickNo}>no</button>
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


const Alert = (content: String,) => {
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
    <Modal type={"Alert"} visible={true} onClose={() => {closeModal();}} content={content}/>
  );

  //直接渲染到body下会把root节点覆盖
  ReactDOM.render(component, div);
};


Modal.Alert = Alert;


export default Modal;
