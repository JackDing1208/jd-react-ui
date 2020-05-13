import React from 'react';
import Layout from './Layout';
import Header from './Header';
import Content from './Main';
import Footer from './Footer';
import Aside from './Aside';
import './layout.example.scss';
import Code from "../Code"

const code = require('!!raw-loader!./layout.example.tsx')

export default function () {
  return (
    <div className="example-container">
      <div>
        <p className={"example-title"}>组件展示</p>
        <p>上中下布局</p>
        <Layout style={{height: 300, width: 500}}>
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
        <p>带侧边栏布局</p>
        <Layout style={{height: 300, width: 500}}>
          <Header className="x">header</Header>
          <Layout>
            <Aside className="z">aside</Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
        <Layout style={{height: 300, width: 500}}>
          <Aside className="z">aside</Aside>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>
      <div>
        <p className={"example-title"}>示例代码</p>
        <Code code={code.default}/>
      </div>
    </div>
  );
}
