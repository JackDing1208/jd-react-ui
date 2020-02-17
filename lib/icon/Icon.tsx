import React from "react";
import "./style.scss"
import "./importIcons"
// import "./svg/react.svg"

interface IconProps extends React.SVGAttributes<SVGElement>{   //继承svg标签属性
  name: string
}


const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className={"jd-icon"} {...props}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  );
};


export default Icon;
