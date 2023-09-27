import React from 'react';

import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	const date = new Date();

	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<p className='footer__info'>
					&copy; <span className='footer__date'>{date.getFullYear()} </span>
					GitHubApp - <span className='footer__name'>Jaroslaw Wachala</span>
					<a
						className='footer__ico'
						href='mailto:jaroslaw.wachala@gmail.com'>
						<FontAwesomeIcon icon={faAt} />
					</a>
					<a
						className='footer__ico'
						href='https://www.linkedin.com/in/jaros%C5%82aw-w%C4%85cha%C5%82a/'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						className='footer__ico'
						href='https://github.com/jarekwach'>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
