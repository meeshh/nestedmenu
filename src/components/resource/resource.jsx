import React, { Component } from 'react';
import './resource.scss';

class Resource extends Component {
	render() {
		const { item } = this.props;
		return (
			<div className='resourceContainer'>
				<h1>{item.name}</h1>
				<p>{item.description}</p>
			</div>
		);
	}
}

export default Resource;
