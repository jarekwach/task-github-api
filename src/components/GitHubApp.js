import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserInfo from './UserCard';
import Alert from './Alert';
import Header from './Header';
import Footer from './Footer';
import FindSection from './FindSection';
import Form from './Form';

const GithubApp = () => {
	const [error, setError] = useState('');

	return (
		<>
			<Header />
			<FindSection>
				<Form />
				<div className='find-user__card user'>
					<UserInfo />
					<Outlet />
				</div>
			</FindSection>

			{error && (
				<Alert
					message={error}
					onClick={() => setError('')}
				/>
			)}

			<Footer />
		</>
	);
};

export default GithubApp;
