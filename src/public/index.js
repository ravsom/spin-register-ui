import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import App from './scripts/modules/App';
import About from './scripts/modules/About';
import Users from './scripts/modules/Users';
import User from './scripts/modules/User';
import Sessions from './scripts/modules/Sessions';


ReactDOM.render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/users" component={Users}>
					<Route path="/users/:userName" component={User}/>
				</Route>
				<Route path="/about" component={About}/>
				<Route path="/sessions" component={Sessions}/>
			</Route>
		</Router>
	),
	document.getElementById('content'));