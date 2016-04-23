import React from 'react';
import Link from 'react-router/lib/Link'

export default React.createClass({
	render() {
		return <div>
			<h1>App</h1>
			<Link to="/users">Users</Link>
			<Link to="/about">About</Link>
			{this.props.children}

		</div>
	}
});