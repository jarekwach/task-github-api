import React, { useState } from "react";
import GithubAPI from "../GithubAPI";
import UserInfo from "./UserInfo";
import UserRepo from "./UserRepo";

const token = process.env.REACT_APP_API_KEY;
const gh = new GithubAPI(token);

const GithubApp = () => {
    const [username, setUsername] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [repositories, setRepositories] = useState([]);

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

    const getRepoDetails = () => {
        console.log("wyswielic dane repo");
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
        </>
    );
};

export default GithubApp;
