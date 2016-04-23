import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './scripts/modules/App';
import About from './scripts/modules/About';
import Users from './scripts/modules/Users';
import User from './scripts/modules/User';

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/users" component={Users}>
					<Route path="/users/:userName" component={User}/>
				</Route>
				<Route path="/about" component={About}/>
			</Route>
		</Router>
	),
	document.getElementById('content'));