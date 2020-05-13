import React from "react";
import "./style.scss";
import classes from "../helper/className";
import "./importAllIcons";

// import "./svg/react.svg"
// todo 规范svg格式支持改变颜色
interface Props extends React.SVGAttributes<SVGElement> {   //继承svg标签自带属性
  name: string,
  size?: string,
  color?: string
}


const Icon: React.FunctionComponent<Props> = (props) => {
  const {name, className, size, color, ...rest} = props;
  return (
    <svg
      className={classes("jd-icon", className)}
      style={{width: size, height: size, fill: color}}
      {...rest}
    >
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};



export default Icon;



