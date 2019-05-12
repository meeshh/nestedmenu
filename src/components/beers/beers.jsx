import React from 'react';
import TopMenu from '../topmenu/topmenu';
import { Route } from 'react-router-dom';
import slug from 'slug';
import { beers } from '../../config/routes';
import Resource from '../resource/resource';


const Beers = ({match}) => {
    return (
        <div>
            <TopMenu items={beers} match={match} />
			{beers.map((resource, key) => {
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

export default Beers;

