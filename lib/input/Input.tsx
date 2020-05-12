import * as React from 'react';
import {InputHTMLAttributes} from 'react';
import classes from '../helper/className';
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FunctionComponent<Props> = (props) => {
	const {className, ...rest} = props;
	return (
		<input className={classes('jd-input', className)}
					 {...rest}/>
	);
};
export default Input;
