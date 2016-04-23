import React from 'react'

export default React.createClass({
	render() {
		return <div>
			<h1>User: {this.props.params.userName}</h1>
		</div>
	}
});