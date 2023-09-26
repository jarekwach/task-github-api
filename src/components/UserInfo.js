import React from "react";

const UserInfo = ({ data, onClick }) => {
    const { name, login, email, type, avatar_url } = data;

    return (
        <div>
            <header>
                <h3>{name}</h3>
                <img width={"50px"} src={`${avatar_url}`} alt="avatar" />
            </header>
            <ul>
                <li>Login: {login}</li>
                <li>{email}</li>
                <li>Type: {type}</li>
                <li>
                    <a href={`https://github.com/${login}`}>
                        Go to GitHub <i></i>
                    </a>
                </li>
                <button onClick={onClick}>Public repositories</button>
            </ul>
        </div>
    );
};

export default UserInfo;
