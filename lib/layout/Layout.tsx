import React, {ReactElement} from 'react';
import './layout.scss';
import Aside from './Aside';
import classes from "../helper/className";


interface Props extends React.HTMLAttributes<HTMLElement> {
	children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
	const {className, ...rest} = props;
	const children = props.children as Array<ReactElement>;
	const hasAside = 'length' in children &&
		children.reduce((result, node) => result || node.type === Aside, false);
	return (
		<div className={classes("jd-layout", hasAside ? "jd-layout-hasAside" : "", className)} {...rest}>
			{props.children}
		</div>
	);
};

export default Layout;
