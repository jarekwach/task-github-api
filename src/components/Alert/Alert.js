import React from "react";
import { StyledAlert, StyledAlertMessage } from "./Alert.styled";

const Alert = ({ message, onClick }) => {
    return (
        <StyledAlert>
            <button onClick={onClick}>X</button>
            <StyledAlertMessage>{message}</StyledAlertMessage>
        </StyledAlert>
    );
};

export default Alert;
