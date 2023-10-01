import React from 'react';
import {
	useRouteError,
	isRouteErrorResponse,
	useNavigate,
} from 'react-router-dom';
import './NotFound.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NotFound = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	const getErrorMessage = () => {
		if (isRouteErrorResponse(error)) {
			if (error.status === 404) {
				return <div>This page doesn't exist!</div>;
			}

			if (error.status === 401) {
				return <div>You aren't authorized to see this</div>;
			}

			if (error.status === 503) {
				return <div>Looks like our API is down</div>;
			}

			if (error.status === 418) {
				return <div>🫖</div>;
			}
		}

		return <div>Something went wrong</div>;
	};

	return (
		<>
			<Header />
			<div className='not-found'>
				<h3 className='not-found__title'>{getErrorMessage()}</h3>
				<button
					className='not-found__btn'
					onClick={() => navigate(-1)}>
					back
				</button>
			</div>
			<Footer />
		</>
	);
};

export default NotFound;
