import React from 'react';
import { useNavigate, useParams, useLoaderData } from 'react-router-dom';
import './RepoDetails.css';

const RepoDetails = () => {
	const { id } = useParams();
	const repositories = useLoaderData();
	const navigate = useNavigate();

	const filteredRepo = repositories.filter((repo) => {
		return repo.id === parseInt(id);
	});

	const [currentRepo] = filteredRepo;

	return (
		<ul>
			<li>
				<h3>{currentRepo.name}</h3>
				<button onClick={() => navigate(-1)}>back</button>
			</li>
		</ul>
	);
};

export default RepoDetails;
