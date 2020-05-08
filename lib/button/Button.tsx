import React from "react";
import classes from "../helper/className";
import "./style.scss";
import {Icon} from "../index";


interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  icon?: string
  type?: string
  shape?: string
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {onClick, className, icon, type, shape, ...rest} = props;
  return (
    <div className={classes("jd-button", className, shape, type)}
         onClick={onClick} {...rest}
         style={{...props.style}}
    >
      {icon && <Icon name={icon} size={"1em"}/>}
      {props.children &&
      <div className={"jd-button-text"} style={{marginLeft: icon ? "0.5em" : "0"}}>
        {props.children}
      </div>
      }
    </div>
  );
};

Button.defaultProps = {
  color: "#1890ff",
  type: "light",
  shape: "square"
};


export default Button;
