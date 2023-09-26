import React from 'react';

const UserRepoDetails = ({ data }) => {
	const { id, name, html_url } = data;

	return (
		<ul>
			<li>
				<a href={html_url}>{name}</a>
			</li>
		</ul>
	);
};

export default UserRepoDetails;
