class GithubAPI {
    constructor(token) {
        this.owner = "jarekwach";
        this.token = token;
        this.url = "https://api.github.com";
    }

    getUserInfo(username) {
        return this._fetch({ ...this._setHeaders() }, `/users/${username}`);
    }

    getUserRepositories(username) {
        return this._fetch(
            { ...this._setHeaders() },
            `/users/${username}/repos`
        );
    }

    _setHeaders() {
        return {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `token ${this.token}`,
            },
        };
    }

    _fetch(options, additionalPath = "") {
        const url = this.url + additionalPath;

        return fetch(url, options).then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        });
    }
}

export default GithubAPI;
