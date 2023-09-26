import React from 'react';
import {
	HashRouter as Router,
	Route,
} from 'react-router-dom/cjs/react-router-dom.min';

import './index.css';
import GitHubApp from './components/GitHubApp';

function App() {
	return (
		<Router>
			<Route path='/'>
				<GitHubApp />
			</Route>
		</Router>
	);
}

export default App;
