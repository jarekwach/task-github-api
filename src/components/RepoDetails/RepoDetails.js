import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import Markdown from 'react-markdown';

import { GithubAPI } from '../../providers/GithubAPI';
import { decodedBase64 } from '../../helpers/decodedBase64';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './RepoDetails.css';

const RepoDetails = () => {
	const repository = useLoaderData();
	const navigate = useNavigate();
	const api = GithubAPI();
	const [readme, setReadme] = useState(null);

	const {
		name,
		owner: { login },
		html_url,
	} = repository;

	useEffect(() => {
		if (repository) {
			api.getRepositoryReadme(login, name).then((resp) => {
				const encodedReadme = resp.content;
				const decodedReadme = decodedBase64(encodedReadme);

				setReadme(decodedReadme);
			});
		}
	}, [api, login, name, repository]);

	return (
		<ul className='repo-details'>
			<li className='repo-details__item'>
				<header className='repo-details__header'>
					<p className='repo-details__name'>
						Repository on Github:{' '}
						<a
							className='repo-details__link'
							href={html_url}>
							{name}
						</a>
					</p>
					<button
						className='repo-details__btn'
						onClick={() => navigate(-1)}>
						<FontAwesomeIcon
							icon={faX}
							className='repo-details__ico'
						/>
					</button>
				</header>

				<div className='repo-details__readme'>
					{readme && <Markdown>{readme}</Markdown>}
				</div>
			</li>
		</ul>
	);
};

export default RepoDetails;
