import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const UserRepo = ({ repoList, onClick, inpValue, onChange }) => {
	const filteredRepoList = repoList.filter(
		(repo) =>
			repo.name.toLowerCase().includes(inpValue.toLowerCase()) ||
			(repo.description &&
				repo.description.toLowerCase().includes(inpValue.toLowerCase()))
	);

	return (
		<div className='user__repositories repositories'>
			<form className='repositories__form'>
				<label>search repositories: </label>
				<input
					type='text'
					name='searchQuery'
					value={inpValue}
					onChange={onChange}></input>
			</form>

			<ul className='repositories__list'>
				{filteredRepoList.map((repo) => (
					<li
						className='repositories__item'
						key={repo.id}>
						<p className='repositories__name'>
							<button
								className='repositories__btn'
								onClick={onClick}
								id={repo.id}>
								info
							</button>{' '}
							{repo.name}
							{repo.stargazers_count > 0 ? (
								<span className='repositories__star'>
									{' '}
									<FontAwesomeIcon icon={faStar} /> {repo.stargazers_count}
								</span>
							) : null}
						</p>
						<p className='repositories__description'>{repo.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserRepo;
