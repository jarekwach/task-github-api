import React from 'react';
import { useNavigate, useParams, useLoaderData } from 'react-router-dom';
import './RepoDetails.css';

const RepoDetails = () => {
	const { id } = useParams();
	const repositories = useLoaderData();
	const navigate = useNavigate();

	return (
		<ul className='repo-details'>
			<li className='repo-details__item'>
				<button
					className='repo-details__btn'
					onClick={() => navigate(-1)}>
					back
				</button>
			</li>
		</ul>
	);
};

export default RepoDetails;
