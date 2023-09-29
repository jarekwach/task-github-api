import React, { useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import GithubAPI from '../GithubAPI';
import UserInfo from './UserCard';
import Alert from './Alert';
import Header from './Header';
import Footer from './Footer';
import FindSection from './FindSection';
import Form from './Form';

const GithubApp = () => {
	const [error, setError] = useState('');
	const userInfo = useLoaderData();

	return (
		<>
			<Header />
			<FindSection>
				<Form />

				<div className='find-user__card user'>
					{userInfo !== '' ? (
						<UserInfo
							data={userInfo}

						/>
					) : null}
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
