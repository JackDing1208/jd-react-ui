import * as React from 'react';
import {InputHTMLAttributes} from 'react';
import classes from '../helper/className';
import './input.scss';
import Icon from "../icon/Icon"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
}

const Input: React.FunctionComponent<Props> = (props) => {
  const {className, icon, ...rest} = props;
  return (
    <div className={"jd-input-wrapper"}>
      {icon && <Icon name={icon} size={"1em"} className={"jd-input-icon"}/>}
      <input className={classes('jd-input', className, icon ? "hasIcon" : "")}
             {...rest}/>
    </div>

  );
};
export default Input;
