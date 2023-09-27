import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './NotFound.css';

const NotFound = () => {
	return (
		<div className='not-found'>
			<h2 className='not-found__title'>Page not found</h2>
			<Link
				to='/'
				className='not-found__link'>
				back to home
			</Link>
		</div>
	);
};

export default NotFound;
