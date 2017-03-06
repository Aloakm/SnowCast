import React, { Component } from 'react';

export default class Signout extends Component {
	componentWillMount() {
		this.props.signout()
	}

	render() {
		return <div>asd</div>
	}
}