import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ModalExample from './lib/modal/modal.example';
import ButtonExample from './lib/button/button.example';
import "./example.scss"

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          FUI
        </div>

      </header>
      <div className={"jd-container"}>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={ModalExample}/>
          {/*<Route path="/layout" component={LayoutExample}/>*/}
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));
