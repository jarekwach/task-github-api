import React from 'react';

const UserRepo = ({ repoList, onClick }) => {
	return (
		<div className='user__repositories repositories'>
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
