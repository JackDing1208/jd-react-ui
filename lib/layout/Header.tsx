import React from 'react';
import classes from "../helper/className";



interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = (props) => {
	const {className, ...rest} = props;
	return (
		<div className={classes("jd-header",className)} {...rest}>
			{props.children}
		</div>
	);
};

export default Header;
