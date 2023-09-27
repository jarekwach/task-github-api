import React from 'react';
import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom/cjs/react-router-dom.min';

import './index.css';
import GitHubApp from './components/GitHubApp';
import FindSection from './components/FindSection';
import NotFound from './components/NotFound';
import Header from './components/Header';
import UserCard from './components/UserCard';

function App() {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path='/'>
					<GitHubApp>
						<FindSection />
					</GitHubApp>
				</Route>

				<Route
					exact
					path='/user/:username'>
					<GitHubApp />
				</Route>
				<Route
					exact
					path='/user/:username/repos'>
					<GitHubApp />
				</Route>

				<Route
					exact
					path='/404'>
					<Header />
					<FindSection>
						<NotFound />
					</FindSection>
				</Route>

				<Route>
					<Redirect to='/404' />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
