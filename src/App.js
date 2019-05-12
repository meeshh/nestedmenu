import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from './components/sidenav/sidenav';
import './app.scss';

import ContentFrame from './components/contentframe/contentframe';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='appContainer'>
					<SideNav />
					<ContentFrame />
				</div>
			</Router>
		);
	}
}

export default App;
