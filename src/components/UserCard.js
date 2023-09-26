import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const UserCard = ({ data, onClick }) => {
	const { name, login, email, type, avatar_url, created_at } = data;

	return (
		<div className='user__item'>
			<a className='user__close-btn'>
				<FontAwesomeIcon
					icon={faX}
					className='user__close-ico'
				/>
			</a>
			<header className='user__header'>
				<h3 className='user__name'>{name}</h3>
				<img
					className='user__avatar'
					src={`${avatar_url}`}
					alt='avatar'
				/>
			</header>
			<ul className='user__details'>
				<li className='user__login'>Login: {login}</li>
				<li className='user__email'>{email}</li>
				<li className='user__type'>Type: {type}</li>
				<li className='user__created-at'>Join: {created_at.slice(0, 10)}</li>
				<li className='user__site'>
					<a
						className='user__link'
						href={`https://github.com/${login}`}>
						Go to GitHub{' '}
						<FontAwesomeIcon
							icon={faGithub}
							className='user__ico'
						/>
					</a>
				</li>
				<button
					className='user__btn'
					onClick={onClick}>
					Public repositories
				</button>
			</ul>
		</div>
	);
};

export default UserCard;
