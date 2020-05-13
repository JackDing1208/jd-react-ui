import React from "react";
import classes from "../helper/className";
import "./button.scss";
import {Icon} from "../index";


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: string
	fill?: string
	shape?: string
}

const Button: React.FunctionComponent<Props> = (props) => {
	const {className, icon, fill, shape, ...rest} = props;
	return (
		<button className={classes("jd-button", className, shape, fill)}
				 {...rest}
		>
			{icon && <Icon name={icon} size={"1em"}/>}
			{props.children &&
      <div className={"jd-button-text"} style={{marginLeft: icon ? "0.5em" : "0"}}>
				{props.children}
      </div>
			}
		</button>
	);
};

Button.defaultProps = {
	fill: "light",
	shape: "square"
};


export default Button;
