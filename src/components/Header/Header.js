import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
	return (
		<section className='header'>
			<header className='header__container'>
				<div className='header__content'>
					<h1 className='header__title'>hello!</h1>
					<h2 className='header__name'>I'm Jarek</h2>
					<p className='header__info'>It's my GitHubApp</p>
				</div>
				<div className='header__logo'>
					<FontAwesomeIcon
						className='header__ico'
						icon={faGithub}
					/>
				</div>
			</header>
		</section>
	);
};

export default Header;
