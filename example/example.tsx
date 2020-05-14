import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import IconExample from '../lib/icon/icon.example';
import ModalExample from '../lib/modal/modal.example';
import ButtonExample from '../lib/button/button.example';
import LayoutExample from '../lib/layout/layout.example';
import FormExample from '../lib/form/form.example';
import ScrollExample from '../lib/scroll/scroll.example';
import InputExample from "../lib/input/input.example"
import HomePage from "./homePage"
import DocPage from "./docPage"
import "./example.scss"
import {Layout, Header, Aside, Main, Footer} from "../lib"


ReactDOM.render(
  <Router>
    <Layout className={"site-page"}>
      <Header className={"site-header"}>
        <div className="logo">
          <img src="https://i.loli.net/2020/05/12/FiD4NH61kfMwbLz.png" height={32} width={32}/>
          JD-React-UI
        </div>

      </Header>
      <Layout>
        <Aside className={"site-aside"}>
          <h2 style={{color: "#00ADB5"}}>项目说明</h2>
          <ul>
            <li>
              <NavLink to="/home">项目介绍</NavLink>
            </li>
            <li>
              <NavLink to="/doc">快速开始</NavLink>
            </li>
          </ul>
          <h2 style={{color: "#00ADB5"}}>组件预览</h2>
          <ul>
            <li>
              <NavLink to="/icon">图标 Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">按钮 Button</NavLink>
            </li>
            <li>
              <NavLink to="/input">输入框 Input</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局 Layout</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">弹窗 Modal</NavLink>
            </li>
            <li>
              <NavLink to="/form">表单 Form</NavLink>
            </li>
            <li>
              <NavLink to="/scroll">滚动条 Scroll</NavLink>
            </li>

          </ul>
        </Aside>
        <Main className={"site-main"}>
          <Redirect path="/" to="/home"/>
          <Route path="/home" component={HomePage}/>
          <Route path="/doc" component={DocPage}/>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/input" component={InputExample}/>
          <Route path="/dialog" component={ModalExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
          <Route path="/scroll" component={ScrollExample}/>
        </Main>
      </Layout>
      <Footer className={"site-footer"}>&copy; Jack Ding</Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
