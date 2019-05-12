import React from 'react';
import TopMenu from '../topmenu/topmenu';
import { Route } from 'react-router-dom';
import slug from 'slug';
import { coffees } from '../../config/routes';
import Resource from '../resource/resource';

const Coffees = ({ match }) => {
	return (
		<div>
			<TopMenu items={coffees} match={match} />

			{coffees.map((resource, key) => {
				return (
					<Route
						exact
						key={key}
						path={`${match.path}/${slug(resource.name, {lower: true})}`}
						render={() => {
							return <Resource item={resource} />;
						}}
					/>
				);
			})}
		</div>
	);
};

export default Coffees;
