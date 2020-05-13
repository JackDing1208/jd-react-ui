import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./style.scss";


interface Props {   //继承svg标签自带属性
  size?: string,
  onClick?:  React.MouseEventHandler
}

const FloatButton: React.FunctionComponent<Props> = (props) => {
  const button = <Fragment>
    <div className={"jd-float-button"} onClick={props.onClick}>
      <div className={"jd-float-button-center"}/>
    </div>
  </Fragment>;


  return (
    ReactDOM.createPortal(button, document.body)
  );
};

export default FloatButton;
