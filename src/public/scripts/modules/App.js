import React from 'react';
import Link from 'react-router/lib/Link'

import { PageHeader, Navbar, NavItem, Nav } from 'react-bootstrap'

export default React.createClass({
	render() {
		return <div>
			<PageHeader>The Spinning Register</PageHeader>
			<Navbar>
				<nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
					<ul class="nav navbar-nav pull-xs-right">
						<li class="nav-item">
							<button class="btn btn-link" data-target="#explainQuestionModal" data-toggle="modal" type="button">
								<Link to="/about">About</Link>
							</button>
							<button class="btn btn-link">
								<Link to="/users">Users</Link>
							</button>
							<button class="btn btn-link">
								<Link to="/sessions">Sessions</Link>
							</button>
						</li>
					</ul>
				</nav>
			</Navbar>
			{this.props.children}

		</div>
	}
});