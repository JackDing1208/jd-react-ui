import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from '../lib/icon/icon.example';
import ModalExample from '../lib/modal/modal.example';
import ButtonExample from '../lib/button/button.example';
import LayoutExample from '../lib/layout/layout.example';
import "./example.scss"
import {Layout,Header,Aside,Main,Footer} from "../lib"


ReactDOM.render(
	<Router>
		<Layout className={"site-page"}>
			<Header>
				<div className="logo">
					FUI
				</div>
			
			</Header>
			<Layout>
				<Aside>
					<h2>组件</h2>
					<ul>
						<li>
							<Link to="/icon">Icon</Link>
						</li>
						<li>
							<Link to="/button">Button</Link>
						</li>
						<li>
							<Link to="/layout">Layout</Link>
						</li>
						<li>
							<Link to="/dialog">Modal</Link>
						</li>
						
					</ul>
				</Aside>
				<Main className={"content"}>
					<Route path="/icon" component={IconExample}/>
					<Route path="/button" component={ButtonExample}/>
					<Route path="/dialog" component={ModalExample}/>
					<Route path="/layout" component={LayoutExample}/>
				</Main>
			</Layout>
			<Footer>{'&copy'}</Footer>
		</Layout>
	</Router>
	, document.querySelector('#root'));
