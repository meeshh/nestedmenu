import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './sidenav.scss';
import routes from '../../config/routes';

class SideNav extends Component {
	render() {
		return (
			<div className='sideNav'>
				{routes.map((route, key) => {
					return (
						<div key={key} className="navLinkWrapper">
						    <NavLink  to={route.path} className='navLink'>
    							{route.iconComponent}
    						</NavLink>
						</div>
					);
				})}
			</div>
		);
	}
}

export default SideNav;
