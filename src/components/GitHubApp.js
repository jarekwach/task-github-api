import React, { useState } from 'react';
import GithubAPI from '../GithubAPI';
import UserInfo from './UserCard';
import UserRepo from './UserRepo';
import UserRepoDetails from './UserRepoDetails';
import Alert from './Alert';
import Header from './Header';
import Footer from './Footer';
import FindSection from './FindSection';

const token = process.env.REACT_APP_API_KEY;
const gh = new GithubAPI(token);

const GithubApp = () => {
	const [userInfo, setUserInfo] = useState('');
	const [repositories, setRepositories] = useState([]);
	const [currentRepo, setCurrentRepo] = useState([]);
	const [showAlert, setShowAlert] = useState(false);
	const [alertMsg, setAlertMsg] = useState('');
	const [formData, setFormData] = useState({
		username: '',
		searchQuery: '',
	});

	const handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (formData.username !== '') {
			gh.getUserInfo(formData.username)
				.then((resp) => {
					setUserInfo(resp);
					setFormData({ ...formData, username: '' });
				})
				.catch(() => {
					setShowAlert(true);
					setAlertMsg('User not found');
				});
		} else {
			setShowAlert(true);
			setAlertMsg('Please enter username');
		}
	};

	const getUserRepositories = () => {
		if (userInfo.login) {
			gh.getUserRepositories(userInfo.login)
				.then((resp) => {
					if (resp.length === 0) {
						setAlertMsg('Public repository not found');
						setShowAlert(true);
					}
					setRepositories(resp);
				})
				.catch((err) => {
					setAlertMsg(`Error: ${err.status}`);
					setShowAlert(true);
				});
		}
	};

	const getRepoDetails = (e) => {
		const selectedRepoId = e.target.id;

		const filteredRepo = repositories.filter((repo) => {
			return repo.id === parseInt(selectedRepoId);
		});

		setCurrentRepo(...filteredRepo);
	};

	return (
		<>
			<Header />

			<FindSection>
				<form
					className='find-user__form'
					onSubmit={handleSubmit}>
					<label>Check user details:</label>
					<input
						type='text'
						value={formData.username}
						name='username'
						onChange={handleInputChange}
					/>
					<input
						type='submit'
						value={'send'}
					/>
				</form>

				<div className='find-user__card user'>
					{userInfo !== '' ? (
						<UserInfo
							data={userInfo}
							onClick={getUserRepositories}
						/>
					) : null}

					{repositories.length !== 0 ? (
						<UserRepo
							repoList={repositories}
							onClick={getRepoDetails}
							onChange={handleInputChange}
							inpValue={formData.searchQuery}
						/>
					) : null}

					{currentRepo.length !== 0 ? (
						<UserRepoDetails data={currentRepo} />
					) : null}
				</div>
			</FindSection>

			{showAlert && (
				<Alert
					message={alertMsg}
					onClick={() => {
						setShowAlert(false);
						setAlertMsg('');
					}}
				/>
			)}

			<Footer />
		</>
	);
};

export default GithubApp;
