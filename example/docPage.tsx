import React from "react";
import "./github-markdown.css"
interface Props {
  [key: string]: any
}


const DocPage = (props: Props) => {
  return (
    <div>
      <article className="markdown-body">
        <h1>快速开始</h1>
        <b>部分组件基于 React Hooks 开发，使用时请确保 React 版本支持</b>
        <h2>安装方法</h2>
        <code>
          npm install jd-react-ui
        </code>
        <h2>全局样式</h2>
        推荐设置以下全局CSS方便使用
        <pre>{`* {margin: 0;padding: 0; box-sizing: border-box;}
*::before {box-sizing: border-box;}
*::after {box-sizing: border-box;}
ul, ol {list-style: none;}
h1, h2, h3, h4, h5, h6 {font-weight: normal;}
a { text-decoration: none; color: inherit; }`}
        </pre>
        <h2>组件引入</h2>
        <pre>{`import {Button,Icon} from "jd-react-ui"`}</pre>

      </article>
    </div>
  )
};

export default DocPage;
