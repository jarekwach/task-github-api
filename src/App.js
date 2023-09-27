import React from 'react';
import {
	Route,
	Routes,
	BrowserRouter,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import './index.css';
import GitHubApp from './components/GitHubApp';
import FindSection from './components/FindSection';

import GithubAPI from './GithubAPI';
const token = process.env.REACT_APP_API_KEY;
const gh = new GithubAPI(token);

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path='/'
				element={<>Strona glowna</>}
			/>
			<Route
				exact
				path='/user/:username'
				element={<GitHubApp />}
				loader={async ({ request, params }) => {
					console.log(params);
					return gh.getUserInfo(params.username);
				}}>
				<Route
					exact
					path='repos'
					element={<>repos</>}></Route>
			</Route>
		</>
	)
);

export { router };
