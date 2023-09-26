import React from "react";

const UserRepo = ({ repoList }) => {
    return (
        <ul>
            {repoList.map((item) => (
                <li key={item.id}>
                    <a href={item.html_url}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
};

export default UserRepo;
