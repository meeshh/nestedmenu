import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import slug from 'slug';

class TopMenu extends Component {
	render() {
        const match = this.props.match;
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						{this.props.items.map((item, key) => {
							return (
								<NavLink
									key={key}
									to={`${match.path}/${slug(item.name, {lower: true})}`}
									className='navLink nav-item nav-link'
								>
									{item.name}
								</NavLink>
							);
						})}
					</div>
				</div>
			</nav>
		);
	}
}

export default TopMenu;
