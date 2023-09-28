import React from 'react';
import {
	Route,
	Routes,
	BrowserRouter,
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
} from 'react-router-dom';

import './index.css';
import GitHubApp from './components/GitHubApp';
import FindSection from './components/FindSection';

import GithubAPI from './GithubAPI';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import UserRepos from './components/UserRepos';
import UserRepoDetails from './components/UserRepoDetails';

const token = process.env.REACT_APP_API_KEY;
const gh = new GithubAPI(token);

const Layout = () => {
	return (
		<>
			<Header />
			<FindSection>
				<Form />
			</FindSection>
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path='/'
				element={<Layout />}
			/>

			<Route
				exact
				path='/user/:username'
				element={<GitHubApp />}
				loader={async ({ request, params }) => {
					return gh.getUserInfo(params.username);
				}}>
				<Route
					exact
					path='repos'
					element={<UserRepos />}
					loader={async ({ request, params }) => {
						return gh.getUserRepositories(params.username);
					}}></Route>
				<Route
					exact
					path='repos/:id'
					element={<UserRepoDetails />}></Route>
			</Route>
		</>
	)
);

export { router };
