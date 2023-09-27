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
