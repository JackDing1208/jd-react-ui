import React from "react";
import Button from "../lib/button/Button"

interface Props {
  [key:string]:any
}

const HomePage = (props:Props) => {

  const goToGithub = () => {
    window.open("https://github.com/JackDing1208/jd-react-ui");
  }
  const goToQuickStart = () => {
    props.history.push("/doc")
  }

  return (
    <div className={"example-home-container"}>
      <img src="https://i.loli.net/2020/05/14/bw7JuktCZe6MHQG.png" width={500} height={500}/>
      <p className={"example-home-title"}>这是一套基于 React+TypeScript 开发的UI组件</p>
      <div style={{marginTop: 16}}>
        <Button shape={"round"} onClick={goToGithub}>{"查看源码"} </Button>
        <Button style={{marginLeft: 32}} onClick={goToQuickStart} shape={"round"} fill={"dark"}>{"快速开始"} </Button>
      </div>
    </div>
  );
};

export default HomePage;
