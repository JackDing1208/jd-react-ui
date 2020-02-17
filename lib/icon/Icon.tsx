import React from "react";
import "./style.scss"
import classes from "../helper/className"
import "./importAllIcons"
// import "./svg/react.svg"

interface IconProps extends React.SVGAttributes<SVGElement>{   //继承svg标签属性
  name: string
}


const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {name,className,...rest}=props
  return (
      <svg className={classes("jd-icon",className)} {...rest}>
        <use xlinkHref={`#${name}`}/>
      </svg>
  );
};


export default Icon;
