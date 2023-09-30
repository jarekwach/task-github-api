import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserInfo from '../../components/UserCard';
import Alert from '../../components/Alert';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Form from '../../components/Form';
import Footer from '../../components/Footer';
import './UserPage.css';

const UserPage = () => {
	const [error, setError] = useState('');

	return (
		<>
			<Header />
			<MainSection>
				<Form />
				<div className='content'>
					<UserInfo />
					<Outlet />
				</div>
			</MainSection>

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

export default UserPage;
