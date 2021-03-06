import React from 'react';
import Layout from './Layout';
import Header from './Header';
import Content from './Main';
import Footer from './Footer';
import Aside from './Aside';
import './layout.example.scss';
import Code from "../Code"
import {Scroll} from "../index"

const code = require('!!raw-loader!./layout.example.tsx')

export default function () {
  return (
    <Scroll style={{width: "100%", height: "100%"}} barVisible={false}>
      <div className="example-container">
        <div>
          <p className={"example-title"}>组件展示</p>
          <p>上中下布局</p>
          <Layout style={{height: 300, width: 500}}>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
          <p>侧边栏布局1</p>
          <Layout style={{height: 300, width: 500}}>
            <Header className="x">header</Header>
            <Layout>
              <Aside className="z">aside</Aside>
              <Content className="y">content</Content>
            </Layout>
            <Footer className="x">footer</Footer>
          </Layout>
          <p>侧边栏布局2</p>
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
    </Scroll>
  );
}
