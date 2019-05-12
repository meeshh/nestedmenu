import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBeer, faHome } from '@fortawesome/free-solid-svg-icons';

import Home from '../components/home/home';
import Coffees from '../components/coffees/coffees';
import Beers from '../components/beers/beers';

const coffees = [
	{
		name: 'Long Black',
		id: 'long-black',
		description:
			'Hot water is poured into a cup, and then two shots of espresso are poured into the water. If you do the inverse of this, it will result in an Americano. Long blacks can be quite strong, and have more crema (a creamy foam that tops espresso shots) than an Americano.'
	},
	{
		name: 'Vienna',
		id: 'vienna',
		description:
			'A Vienna is made by adding two shots of particularly strong espresso together before whipped cream is added as a substitute for milk and sugar. The Vienna is a melding of the strong flavours of straight espresso, with the smoothness of sugary cream.'
	}
];

const beers = [
	{
		name: 'Ale',
		id: 'ale',
		description:
			'Perhaps the best-known type of beer, ales are brewed from malted barley and come in many different varieties (pale, brown, cream, etc.) and flavors. Examples include Newcastle Brown Ale, Sierra Nevada Pale Ale, Bass Ale, Red Tail Amber Ale, etc…'
	},
	{
		name: 'Porter',
		id: 'porter',
		description:
			'Similar to stouts, porters can also be like drinking a (albeit delicious) loaf of bread, but often pack more of a punch than their heady cousins. Examples: Fuller’s London Porter, Duck-Rabbit Porter, People’s Porter, Founders Porter, Deschutes Black Butte Porter, and Mayflower Porter.'
	}
];

const routes = [
	{
		id: 'home',
		iconComponent: <FontAwesomeIcon icon={faHome} />,
		path: '/',
        name: 'Home',
        component: Home,
        isExact: true,
        items: []
	},
	{
		id: 'coffees',
		iconComponent: <FontAwesomeIcon icon={faCoffee} />,
		path: '/coffees',
        name: 'Coffees',
        component: Coffees,
        isExact: false,
        items: [
            {
                name: 'Long Black',
                id: 'long-black',
                description:
                    'Hot water is poured into a cup, and then two shots of espresso are poured into the water. If you do the inverse of this, it will result in an Americano. Long blacks can be quite strong, and have more crema (a creamy foam that tops espresso shots) than an Americano.'
            },
            {
                name: 'Vienna',
                id: 'vienna',
                description:
                    'A Vienna is made by adding two shots of particularly strong espresso together before whipped cream is added as a substitute for milk and sugar. The Vienna is a melding of the strong flavours of straight espresso, with the smoothness of sugary cream.'
            }
        ]
	},
	{
		id: 'beers',
		iconComponent: <FontAwesomeIcon icon={faBeer} />,
		path: '/beers',
        name: 'Beers',
        component: Beers,
        isExact: false,
        items: [
            {
                name: 'Ale',
                id: 'ale',
                description:
                    'Perhaps the best-known type of beer, ales are brewed from malted barley and come in many different varieties (pale, brown, cream, etc.) and flavors. Examples include Newcastle Brown Ale, Sierra Nevada Pale Ale, Bass Ale, Red Tail Amber Ale, etc…'
            },
            {
                name: 'Porter',
                id: 'porter',
                description:
                    'Similar to stouts, porters can also be like drinking a (albeit delicious) loaf of bread, but often pack more of a punch than their heady cousins. Examples: Fuller’s London Porter, Duck-Rabbit Porter, People’s Porter, Founders Porter, Deschutes Black Butte Porter, and Mayflower Porter.'
            }
        ]
	}
];

export default routes;
export { coffees, beers };
