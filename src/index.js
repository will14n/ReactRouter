import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import './css/freelancer.css';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
    	<IndexRoute component={App}></IndexRoute>
    	<Route path="/Portfolio" component={Portfolio}></Route>
    	<Route path="/Sobre" component={Sobre}></Route>
    	<Route path="/Contato" component={Contato}></Route>
    </Route>
  </Router>,
  app)
