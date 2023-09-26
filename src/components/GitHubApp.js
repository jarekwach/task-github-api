import React, { useState } from "react";
import GithubAPI from "../GithubAPI";
import UserInfo from "./UserInfo";
import UserRepo from "./UserRepo";
import UserRepoDetails from "./UserRepoDetails";

const token = process.env.REACT_APP_API_KEY;
const gh = new GithubAPI(token);

const GithubApp = () => {
    const [username, setUsername] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [currentRepo, setCurrentRepo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username !== "") {
            gh.getUserInfo(username)
                .then((resp) => {
                    setUserInfo(resp);
                })
                .catch((err) => console.log(err));
        } else {
            console.log("wyswietlic blad");
        }
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const getUserRepositories = () => {
        if (userInfo.login) {
            gh.getUserRepositories(userInfo.login).then((resp) =>
                setRepositories(resp)
            );
        } else {
            console.log("wyswietlic blad");
        }
    };

    const getRepoDetails = (e) => {
        const selectedRepoId = e.target.id;

        const filteredRepo = repositories.filter((repo) => {
            return repo.id === parseInt(selectedRepoId);
        });

        setCurrentRepo(...filteredRepo);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>GitHub user</label>
                <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>

            {userInfo !== "" ? (
                <UserInfo data={userInfo} onClick={getUserRepositories} />
            ) : null}

            <UserRepo repoList={repositories} onClick={getRepoDetails} />
            <UserRepoDetails data={currentRepo} />
        </>
    );
};

export default GithubApp;
