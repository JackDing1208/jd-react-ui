import React from "react";


interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  onClick: React.MouseEventHandler
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {onClick, ...rest} = props;
  return (
    <div
      className={"jd-button"}
      onClick={onClick} {...rest}>
      {props.children}
    </div>
  );
};


export default Button;
