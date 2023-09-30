import React from 'react';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import './index.css';
import Layout from './pages/Layout';
import UserPage from './pages/UserPage';
import UserRepos from './components/UserRepos';
import RepoDetails from './components/RepoDetails';

import { GithubAPI } from './providers/GithubAPI';
const api = GithubAPI();

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path='/'
				element={<Layout />}
			/>
			<Route
				path='/user/:username'
				element={<UserPage />}
				loader={async ({ request, params }) => {
					return api.getUserInfo(params.username);
				}}>
				<Route
					path='/user/:username/repos'
					element={<UserRepos />}
					loader={async ({ request, params }) => 
						api.getUserRepositories(params.username)}></Route>
				<Route
					path='repos/:id'
					element={<RepoDetails />}
					loader={async ({ request, params }) => {
						return api.getRepoById(params.id);
					}}></Route>
			</Route>
		</>
	)
);

export { router };
