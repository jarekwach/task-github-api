import React from 'react';

const UserRepo = ({ repoList, onClick, inpValue, onChange }) => {
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
				{repoList.map((repo) => (
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
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserRepo;
