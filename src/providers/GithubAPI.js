const GithubAPI = () => {
	const token = process.env.REACT_APP_ACCESS_TOKEN;
	const url = 'https://api.github.com';

	const setHeaders = () => {
		return {
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `token ${token}`,
			},
		};
	};

	const _fetch = (options, additionalPath = '') => {
		const apiUrl = url + additionalPath;

		return fetch(apiUrl, options).then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		});
	};

	const getUserInfo = (username) => {
		return _fetch({ ...setHeaders() }, `/users/${username}`);
	};

	const getUserRepositories = (username) => {
		return _fetch({ ...setHeaders() }, `/users/${username}/repos`);
	};

	const getRepoById = (id) => {
		return _fetch({ ...setHeaders() }, `/repositories/${id}`);
	};

	return {
		getUserInfo,
		getUserRepositories,
		getRepoById,
	};
};

export { GithubAPI };
