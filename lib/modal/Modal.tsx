import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./style.scss";


enum ModalType {
  "Alert",
  "Confirm",
}

interface Props {
  visible: Boolean,
  type?: ModalType,
  content: String,
  title?: String,
  onClose: React.MouseEventHandler
  canModalClose?: Boolean
}


const Modal: React.FunctionComponent<Props> = (props) => {
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

const alert = (content: String,) => {
  // const div = document.createElement('div');
  const closeModal = () => {

  };

  const component = (
    <Modal visible={true} onClose={() => {closeModal();}} content={content}/>
  );
  ReactDOM.render(component, document.body);
};


// Modal.alert =alert


export {alert};
export default Modal;
