import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container container'>
				<div className='header__content'>
					<h1 className='header__title'>hello!</h1>
					<h2 className='header__name'>I'm Jarek</h2>
					<h2 className='header__info'>It's my GitHubApp</h2>
				</div>
				<div className='header__logo'>
					<FontAwesomeIcon
						className='header__ico'
						icon={faGithub}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
