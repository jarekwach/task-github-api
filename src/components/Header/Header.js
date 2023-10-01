import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
	return (
		<section className='header'>
			<header className='header__container'>
				<h1 className='header__title'>GitHub App</h1>
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
