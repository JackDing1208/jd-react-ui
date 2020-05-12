import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconExample from '../lib/icon/icon.example';
import ModalExample from '../lib/modal/modal.example';
import ButtonExample from '../lib/button/button.example';
import LayoutExample from '../lib/layout/layout.example';
import "./example.scss"
import {Layout,Header,Aside,Main,Footer} from "../lib"


ReactDOM.render(
	<Router>
		<Layout className={"site-page"}>
			<Header className={"site-header"}>
				<div className="logo">
					DUI
				</div>
			
			</Header>
			<Layout>
				<Aside className={"site-aside"}>
					<h2>组件</h2>
					<ul>
						<li>
							<NavLink to="/icon">图标 Icon</NavLink>
						</li>
						<li>
							<NavLink to="/button">按钮 Button</NavLink>
						</li>
						<li>
							<NavLink to="/layout">布局 Layout</NavLink>
						</li>
						<li>
							<NavLink to="/dialog">弹窗 Modal</NavLink>
						</li>
						{/*<li>*/}
						{/*	<NavLink to="/dialog">表单 Form</NavLink>*/}
						{/*</li>*/}
						
					</ul>
				</Aside>
				<Main className={"site-main"}>
					<Route path="/icon" component={IconExample}/>
					<Route path="/button" component={ButtonExample}/>
					<Route path="/dialog" component={ModalExample}/>
					<Route path="/layout" component={LayoutExample}/>
				</Main>
			</Layout>
			<Footer className={"site-footer"}>&copy; Jack Ding</Footer>
		</Layout>
	</Router>
	, document.querySelector('#root'));
