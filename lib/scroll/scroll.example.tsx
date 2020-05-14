import * as React from 'react';
import Scroll from './Scroll';
import "./scroll.scss"
import Code from "../Code"


const ScrollExample: React.FunctionComponent = () => {
  return (
    <div>
      <p className={"example-title"}>组件展示</p>
      <Scroll style={{height:"400px",width:"400px",border:"1px solid red"}}>
        <div style={{height:"100px",background:"pink"}}/>
        <div style={{height:"100px",background:"yellow"}}/>
        <div style={{height:"100px",background:"orange"}}/>
        <div style={{height:"100px",background:"blue"}}/>
        <div style={{height:"100px",background:"bisque"}}/>
        <div style={{height:"100px",background:"aqua"}}/>
      </Scroll>
      <p className={"example-title"}>示例代码</p>
      <Code code={require('!!raw-loader!./scroll.example.tsx').default}/>
    </div>
  );
};

export default ScrollExample;
