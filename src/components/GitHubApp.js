import React, { useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import GithubAPI from '../GithubAPI';
import UserInfo from './UserCard';
import Alert from './Alert';
import Header from './Header';
import Footer from './Footer';
import FindSection from './FindSection';
import Form from './Form';

const token = process.env.REACT_APP_API_KEY;
const gh = new GithubAPI(token);

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
							// onClick={getUserRepositories}
						/>
					) : null}

					{/* {repositories.length !== 0 ? (
						<UserRepo
							repoList={repositories}
							onClick={getRepoDetails}
							onChange={handleInputChange}
							inpValue={formData.searchQuery}
						/>
					) : null} */}

					{/* {currentRepo.length !== 0 ? (
						<UserRepoDetails data={currentRepo} />
					) : null} */}
				</div>

				<Outlet />
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
