import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from '../../config/routes';

import './contentframe.scss';

class ContentFrame extends Component {
	render() {
		return (
			<div className='contentFrame'>
				{routes.map((route, key) => {
					if (route.isExact) {
						return (
							<Route
								key={key}
								exact
								path={route.path}
								component={route.component}
							/>
						);
					} else {
						return (
							<Route key={key} path={route.path} component={route.component} />
						);
					}
				})}
			</div>
		);
	}
}

export default ContentFrame;
