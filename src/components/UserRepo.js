import React from "react";

const UserRepo = ({ repoList, onClick }) => {
    return (
        <ul>
            {repoList.map((repo) => (
                <li key={repo.id}>
                    <a href={repo.html_url}>{repo.name}</a>
                    <button onClick={onClick}>details</button>
                </li>
            ))}
        </ul>
    );
};

export default UserRepo;
