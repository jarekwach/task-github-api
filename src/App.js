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
import NotFound from './pages/NotFound';

import { GithubAPI } from './providers/GithubAPI';
const api = GithubAPI();

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path='/'
				element={<Layout />}
				errorElement={<NotFound />}
			/>
			<Route
				path='/user/:username'
				element={<UserPage />}
				loader={async ({ params }) => await api.getUserInfo(params.username)}
				errorElement={<NotFound />}>
				<Route
					path='/user/:username/repos'
					element={<UserRepos />}
					loader={async ({ params }) =>
						await api.getUserRepositories(params.username)
					}></Route>
				<Route
					path='repos/:id'
					element={<RepoDetails />}
					loader={async ({ params }) =>
						await api.getRepositoryById(params.id)
					}></Route>
			</Route>
		</>
	)
);

export { router };
