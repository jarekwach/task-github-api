import React from 'react';
import {
	Route,
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
import RepoDetails from './components/RepoDetails';

const gh = new GithubAPI();

const Layout = () => {
	return (
		<>
			<Header />
			<FindSection>
				<Form />
				<Outlet />
			</FindSection>
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
					element={<RepoDetails />}
					loader={async ({ request, params }) => {
						return gh.getUserRepositories(params.username);
					}}></Route>
			</Route>
		</>
	)
);

export { router };
