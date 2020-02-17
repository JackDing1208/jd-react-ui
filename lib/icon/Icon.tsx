import React from "react";
import "./style.scss"
import "./importIcons"
// import "./svg/react.svg"

interface IconProps {
  name: string
}


const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className={"jd-icon"}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  );
};


export default Icon;
