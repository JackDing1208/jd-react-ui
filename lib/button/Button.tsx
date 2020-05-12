import React from "react";
import classes from "../helper/className";
import "./button.scss";
import {Icon} from "../index";


interface Props extends React.HTMLAttributes<HTMLDivElement> {
	icon?: string
	type?: string
	shape?: string
}

const Button: React.FunctionComponent<Props> = (props) => {
	const {onClick, className, icon, type, shape, ...rest} = props;
	return (
		<div className={classes("jd-button", className, shape, type)}
				 onClick={onClick}
				 {...rest}
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
	type: "light",
	shape: "square"
};


export default Button;
