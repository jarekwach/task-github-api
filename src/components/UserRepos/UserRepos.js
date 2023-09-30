import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './UserRepos.css';

const UserRepos = () => {
	const [inpValue, setInpValue] = useState('');
	const repositories = useLoaderData();
	const navigate = useNavigate();

	const filteredRepoList = repositories.filter(
		(repo) =>
			repo.name.toLowerCase().includes(inpValue.toLowerCase()) ||
			(repo.description &&
				repo.description.toLowerCase().includes(inpValue.toLowerCase()))
	);

	return (
		<div className='user-repos'>
			<form className='user-repos__form'>
				<label>Search repositories: </label>
				<input
					className='user-repos__input'
					type='text'
					name='searchQuery'
					value={inpValue}
					onChange={(e) => setInpValue(e.target.value)}></input>
			</form>

			<ul className='user-repos__list'>
				<button
					className='user-repos__close-btn'
					onClick={() => navigate(-1)}>
					<FontAwesomeIcon
						icon={faX}
						className='user-repos__close-ico'
					/>
				</button>
				{filteredRepoList.length > 0 ? (
					filteredRepoList.map((repo) => {
						const { id, name, stargazers_count, description } = repo;

						return (
							<li
								className='user-repos__item'
								key={id}>
								<p className='user-repos__name'>
									<button
										className='user-repos__info-btn'
										onClick={(e) => navigate(e.target.id)}
										id={id}>
										info
									</button>{' '}
									{name}
									{stargazers_count > 0 ? (
										<span className='user-repos__star'>
											{' '}
											<FontAwesomeIcon icon={faStar} /> {stargazers_count}
										</span>
									) : null}
								</p>
								<p className='user-repos__description'>{description}</p>
							</li>
						);
					})
				) : (
					<p className='user-repos__info'>Not found</p>
				)}
			</ul>
		</div>
	);
};

export default UserRepos;
