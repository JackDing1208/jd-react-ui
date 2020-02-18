import React from "react";
import "./style.scss"
import classes from "../helper/className"
import "./importAllIcons"
// import "./svg/react.svg"

interface Props extends React.SVGAttributes<SVGElement>{   //继承svg标签自带属性
  name: string,
  size?: string
}


const Icon: React.FunctionComponent<Props> = (props) => {
  const {name,className,size,...rest}=props
  return (
      <svg
        className={classes("jd-icon",className)}
        style={{width:size,height:size}}
        {...rest}>
        <use xlinkHref={`#${name}`}/>
      </svg>
  );
};


export default Icon;
