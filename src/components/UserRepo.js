import React from "react";

const UserRepo = ({ repoList, onClick }) => {
    return (
        <ul>
            {repoList.map((repo) => (
                <li key={repo.id}>
                    <p>{repo.name}</p>
                    <button onClick={onClick} id={repo.id}>
                        details
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default UserRepo;
