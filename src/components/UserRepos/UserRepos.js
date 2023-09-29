import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
		<div className='user__repositories repositories'>
			<form className='repositories__form'>
				<label>Search repositories: </label>
				<input
					type='text'
					name='searchQuery'
					value={inpValue}
					onChange={(e) => setInpValue(e.target.value)}></input>
			</form>

			<ul className='repositories__list'>
				{filteredRepoList.length > 0 ? (
					filteredRepoList.map((repo) => {
						const { id, name, stargazers_count, description } = repo;

						return (
							<li
								className='repositories__item'
								key={id}>
								<p className='repositories__name'>
									<button
										className='repositories__btn'
										onClick={(e) => navigate(e.target.id)}
										id={id}>
										info
									</button>{' '}
									{name}
									{stargazers_count > 0 ? (
										<span className='repositories__star'>
											{' '}
											<FontAwesomeIcon icon={faStar} /> {stargazers_count}
										</span>
									) : null}
								</p>
								<p className='repositories__description'>{description}</p>
							</li>
						);
					})
				) : (
					<p className='repositories__info'>No results</p>
				)}
			</ul>
		</div>
	);
};

export default UserRepos;
