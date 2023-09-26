import styled from "styled-components";

const StyledAlert = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid black;
`;

const StyledAlertMessage = styled.p`
    font-size: 20px;
`;

export { StyledAlert, StyledAlertMessage };
