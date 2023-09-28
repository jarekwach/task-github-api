import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserRepoDetails = ({ data }) => {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<ul>
			<li>
				<h3>repo details {id}</h3>
				<button onClick={() => navigate(-1)}>back</button>
			</li>
		</ul>
	);
};

export default UserRepoDetails;
